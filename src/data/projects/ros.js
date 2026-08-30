export const rosProject = {
  id: 4,
  slug: "4-ros",
  title: "RoboRangers - Autonomous Vehicle with Deep Reinforcement Learning",
  description:
    "Autonomous navigation system combining ROS2 distributed robotics framework, Gazebo physics simulation, and deep reinforcement learning (TD3 algorithm). The system learns intelligent driving policies through trial-and-error, enabling safe autonomous navigation in dynamic environments with multi-modal sensor fusion.",
  image: "assets/img/projects/robo/roborangers.webp",
  tags: ["ROS2", "Gazebo", "TD3 RL", "Autonomous Driving", "Robotics"],
  link: "/projects/4-ros",
  github: "https://github.com/MEHDI57-NRG/RoboRangers",
  company: "Ibn Tofail University",
  period: "February 2024 — July 2024",
  location: "Kenitra, Morocco",
  role: "Academic Project",
  overview: {
    architectureImage: "assets/img/projects/architecture/ros_architecture.png",
    keyContributions: [
      "Architected a modular ROS2 distributed system with cleanly decoupled perception, decision, and control layers communicating over asynchronous pub/sub topics.",
      "Implemented a TD3 (Twin Delayed DDPG) reinforcement learning agent with actor and critic networks, trained over 1,000+ episodes of 500 steps each in Gazebo simulation.",
      "Designed a custom reward function balancing three competing objectives: goal-directed progress, obstacle safety margins, and energy efficiency.",
      "Engineered a multi-modal sensor fusion pipeline combining Velodyne LIDAR (720 rays at 10 Hz) and RGB camera streams, with intelligent downsampling (720→180 rays) for real-time GPU processing.",
      "Built the full vehicle model in URDF/Xacro with realistic physics, integrated into Gazebo 11 with domain randomization and injected sensor noise to reduce the sim-to-real gap.",
      "Implemented a CNN-based traffic sign recognition module and integrated trajectory planning to complement the RL-based navigation policy.",
    ],
  },
  problemStatement: {
    title: "Autonomous Driving Challenges",
    description:
      "How to enable a system to learn real-time decision-making based on environmental changes while ensuring safety and efficiency?",
    challenges: [
      "Real-time autonomous navigation in dynamic environments",
      "Obstacle detection and avoidance with multiple sensor types",
      "Safe decision-making under uncertainty",
      "Sim-to-Real gap between simulation and physical world",
      "Integration of RL with practical robotics constraints",
    ],
  },
  solution:
    "Integrated ROS2 for modular architecture, Gazebo for realistic simulation, TD3 RL for autonomous learning, and multi-modal sensors (LIDAR + Cameras).",
  keyAchievements: [
    "Autonomous navigation system functional in Gazebo simulation",
    "Real-time obstacle detection using LIDAR (720 rays) and RGB cameras",
    "TD3 (Twin Delayed DDPG) agent for continuous control policy",
    "Modular ROS2 architecture with independent perception/decision/control",
    "Point cloud processing and 3D sensor fusion",
    "Collision avoidance behavior learned through RL",
    "Traffic sign recognition with CNN",
    "Trajectory planning and optimization",
    "Open-source implementation on GitHub",
    "Tested in diverse scenarios with reliable performance",
  ],
  techStack: [
    "ROS2 Humble", "Gazebo 11", "PyTorch", "Python 3.10",
    "C++", "Velodyne LIDAR", "RGB Cameras", "Rviz",
    "TensorBoard", "URDF/xacro",
  ],
  modules: [
    {
      id: 1,
      name: "Sensor Integration",
      description: "Multi-modal sensor fusion for 360° perception",
      metrics: {
        sensors: "Velodyne LIDAR + RGB Cameras",
        lidarResolution: "720 rays/scan",
        updateRate: "10 Hz LIDAR",
        dataFusion: "Real-time fusion",
      },
    },
    {
      id: 2,
      name: "Perception Layer",
      description: "Point cloud processing and obstacle detection",
      metrics: {
        pointCloud: "3D spatial reasoning",
        obstacleDetection: "Real-time",
        signRecognition: "CNN-based",
      },
    },
    {
      id: 3,
      name: "Decision Layer (TD3 RL)",
      description: "Deep reinforcement learning for autonomous decision-making",
      metrics: {
        algorithm: "TD3",
        actionSpace: "Continuous",
        trainingEpisodes: "1000+",
        maxStepsPerEpisode: "500",
      },
    },
    {
      id: 4,
      name: "Control Layer",
      description: "Motor control and command execution",
      metrics: {
        control: "ROS2 cmd_vel",
        controlFrequency: "50 Hz",
        response: "Real-time",
      },
    },
  ],
  results: {
    trainingEpisodes: "1000+",
    maxStepsPerEpisode: "500",
    trainingTime: "~48h on RTX 4060",
    obstacleDetection: "Real-time",
    collisionAvoidance: "Learned behavior",
  },
  visualizations: [
    {
      title: "Velodyne LIDAR Sensor Integration",
      description: "360° LIDAR point cloud processing for obstacle detection (720 rays per scan)",
      image: "assets/img/projects/robo/LiDAR.webp",
    },
    {
      title: "Camera Perception Module",
      description: "RGB camera for sign recognition and visual obstacle detection",
      image: "assets/img/projects/robo/Camera.webp",
    },
    {
      title: "TD3 Algorithm Architecture",
      description: "Twin Delayed DDPG reinforcement learning for continuous control",
      image: "assets/img/projects/robo/TD3.webp",
    },
  ],
  challenges: {
    drlIntegration: {
      problem: "Environmental difficulties with ROS2-Gazebo-TD3 integration",
      status: "Partially resolved",
      solution: "Module separation, independent unit tests, fallback control",
    },
    lidarProcessing: {
      problem: "High data volume (720 points @ 10Hz)",
      solution: "Intelligent downsampling (720→180), distance filtering, GPU processing",
    },
    simToReal: {
      problem: "Simulation ≠ Reality (physics, sensors)",
      solution: "Domain randomization, sensor noise injection, sim2real transfer",
    },
  },
  team: [
    "Alami Aroussi Zineb", "Griche Mohammed Imrane",
    "Hicham El Mehdi", "Moutia Salma",
  ],
  supervisor: "Pr. BOUKIR Khaoula",
  demos: [],
};