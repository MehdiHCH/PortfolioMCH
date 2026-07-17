import { tactiVisionProject } from "./tactivision";
import { futsalProject } from "./futsal";
import { e2eProject } from "./e2e";
import { azulProject } from "./azul";
import { rosProject } from "./ros";
import { diabeticProject } from "./diabetic";

export const projectsData = [
  tactiVisionProject,
  futsalProject,
  e2eProject,
  azulProject,
  rosProject,
  diabeticProject,
];

export const getProjectBySlug = (slug) => {
  return projectsData.find((p) => p.slug === slug);
};

export const getProjectById = (id) => {
  return projectsData.find((p) => p.id === id);
};
