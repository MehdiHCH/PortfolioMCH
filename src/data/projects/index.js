import { tactiVisionProject } from "./tactivision";
import { tactiVisionInsightProject } from "./tactivisionInsight";
import { futsalProject } from "./futsal";
import { e2eProject } from "./e2e";
import { azulProject } from "./azul";
import { rosProject } from "./ros";
import { diabeticProject } from "./diabetic";

const allProjects = [
  tactiVisionProject,
  tactiVisionInsightProject,
  futsalProject,
  e2eProject,
  azulProject,
  rosProject,
  diabeticProject,
];

// Keep unpublished work in the codebase so it can be restored with one flag,
// while excluding it from cards, demos, and direct project routes.
export const projectsData = allProjects.filter(
  (project) => project.isPublished !== false,
);

export const getProjectBySlug = (slug) => {
  return projectsData.find((p) => p.slug === slug);
};

export const getProjectById = (id) => {
  return projectsData.find((p) => p.id === id);
};
