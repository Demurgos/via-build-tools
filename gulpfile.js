"use strict";

const gulp = require("gulp");
const typescript = require("typescript");

const useDist = true;

const buildTools = (useDist
  ? require("./dist/lib/lib/index")
  : require("demurgos-web-build-tools")); // Going meta

const projectOptions = buildTools.config.DEFAULT_PROJECT_OPTIONS;
const libTarget = buildTools.config.LIB_TARGET;
const libTestTarget = buildTools.config.LIB_TEST_TARGET;

buildTools.projectTasks.registerAll(gulp, {
  project: projectOptions,
  tslintOptions: {},
  install: {}
});

libTestTarget.copy = [
  {
    name: "examples",
    from: "test/examples",
    files: ["**/*"],
    to: "test/examples"
  }
];

buildTools.targetGenerators.node.generateTarget(
  gulp,
  "lib",
  {
    project: projectOptions,
    target: libTarget,
    tsOptions: {
      typescript: typescript,
      skipLibCheck: true
    }
  }
);

buildTools.targetGenerators.test.generateTarget(
  gulp,
  "lib-test",
  {
    project: projectOptions,
    target: libTestTarget,
    tsOptions: {
      typescript: typescript,
      skipLibCheck: true
    }
  }
);
