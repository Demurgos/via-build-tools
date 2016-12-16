// Sample gulpfile
const gulp = require("gulp");
const typescript = require("typescript");
const buildTools = require("./local-web-build-tools");

// Project-wide options
const projectOptions = Object.assign(
  {},
  buildTools.config.DEFAULT_PROJECT_OPTIONS,
  {
    root: __dirname
  }
);

// Node library
const libTarget = Object.assign(
  {},
  buildTools.config.LIB_TARGET,
  {
    typescriptOptions: {
      skipLibCheck: true,
      typescript: typescript
    }
  }
);

buildTools.projectTasks.registerAll(gulp, projectOptions);
buildTools.targetGenerators.node.generateTarget(gulp, projectOptions, libTarget);
