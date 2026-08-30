/**
 * WebGPU depth-parallax hero background.
 *
 * The colour plate is a real frame from the TactiVision tracker and the depth
 * plate is a monocular depth estimate of that same frame, so the tracking
 * labels sit on their own depth layer and drift independently of the pitch as
 * the pointer moves. Loaded only where WebGPU is available (see Hero.jsx), so
 * the three.js chunk never reaches browsers that cannot render it.
 */
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three/webgpu";
import { bloom } from "three/examples/jsm/tsl/display/BloomNode.js";
import {
  abs, add, blendScreen, float, mix, mod, mx_cell_noise_float, oneMinus,
  pass, smoothstep, texture, uniform, uv, vec2, vec3,
} from "three/tsl";

const COLOR_MAP = `${import.meta.env.BASE_URL}hero-frame.webp`;
const DEPTH_MAP = `${import.meta.env.BASE_URL}hero-depth.webp`;

const IMG_W = 1600;
const IMG_H = 900;

/** Bloom + a violet scan sweep that reads as a sensor pass over the frame. */
const PostProcessing = ({ strength = 0.62, threshold = 0.92 }) => {
  const { gl, scene, camera } = useThree();
  const scanRef = useRef({ value: 0 });

  const render = useMemo(() => {
    const post = new THREE.PostProcessing(gl);
    const scenePass = pass(scene, camera);
    const scenePassColor = scenePass.getTextureNode("output");
    const bloomPass = bloom(scenePassColor, strength, 0.5, threshold);

    const uScan = uniform(0);
    scanRef.current = uScan;

    const band = smoothstep(0, float(0.06), abs(uv().y.sub(float(uScan.value))));
    // brand violet rather than the stock red
    const overlay = vec3(0.42, 0.28, 0.85).mul(oneMinus(band)).mul(0.32);
    const scanned = mix(
      scenePassColor,
      add(scenePassColor, overlay),
      smoothstep(0.9, 1.0, oneMinus(band)),
    );

    post.outputNode = scanned.add(bloomPass);
    return post;
  }, [camera, gl, scene, strength, threshold]);

  useFrame(({ clock }) => {
    scanRef.current.value = Math.sin(clock.getElapsedTime() * 0.45) * 0.5 + 0.5;
    render.renderAsync();
  }, 1);

  return null;
};

const Plane = () => {
  const [rawMap, depthMap] = useTexture([COLOR_MAP, DEPTH_MAP]);
  const { viewport } = useThree();

  const { material, uniforms } = useMemo(() => {
    const uPointer = uniform(new THREE.Vector2(0));
    const uProgress = uniform(0);

    const tDepth = texture(depthMap);
    // depth drives the pointer displacement — near pixels travel further
    const tMap = texture(rawMap, uv().add(tDepth.r.mul(uPointer).mul(0.014)));

    const aspect = float(IMG_W).div(IMG_H);
    const tUv = vec2(uv().x.mul(aspect), uv().y);

    const tiling = vec2(112.0);
    const tiledUv = mod(tUv.mul(tiling), 2.0).sub(1.0);
    const brightness = mx_cell_noise_float(tUv.mul(tiling).div(2));
    const dot = float(smoothstep(0.5, 0.49, float(tiledUv.length()))).mul(brightness);

    // a thin band of dots rides the depth slice, like a scanning depth probe
    const flow = oneMinus(smoothstep(0, 0.025, abs(tDepth.sub(uProgress))));
    const mask = dot.mul(flow).mul(vec3(4.5, 2.4, 12));

    return {
      material: new THREE.MeshBasicNodeMaterial({
        colorNode: blendScreen(tMap, mask),
        transparent: true,
      }),
      uniforms: { uPointer, uProgress },
    };
  }, [rawMap, depthMap]);

  // cover the viewport rather than fit inside it
  const imgAspect = IMG_W / IMG_H;
  const vpAspect = viewport.width / viewport.height;
  const scale =
    vpAspect > imgAspect
      ? [viewport.width, viewport.width / imgAspect, 1]
      : [viewport.height * imgAspect, viewport.height, 1];

  useFrame(({ clock, pointer }) => {
    uniforms.uProgress.value = Math.sin(clock.getElapsedTime() * 0.45) * 0.5 + 0.5;
    uniforms.uPointer.value = pointer;
  });

  return (
    <mesh scale={scale} material={material}>
      <planeGeometry />
    </mesh>
  );
};

extend(THREE);

export default function HeroDepthScene() {
  return (
    <Canvas
      flat
      className="absolute inset-0"
      gl={async (props) => {
        const renderer = new THREE.WebGPURenderer(props);
        await renderer.init();
        return renderer;
      }}
    >
      <PostProcessing />
      <Plane />
    </Canvas>
  );
}
