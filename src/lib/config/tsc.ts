// tslint:disable-next-line:typedef
export const PROD_TSC_OPTIONS = {
  allowJs: false,
  allowSyntheticDefaultImports: false,
  allowUnreachableCode: false,
  allowUnusedLabels: false,
  charset: "utf8",
  declaration: true,
  diagnostics: false,
  disableSizeLimit: false,
  emitBOM: false,
  emitDecoratorMetadata: true,
  experimentalDecorators: true,
  forceConsistentCasingInFileNames: true,
  inlineSourceMap: false,
  inlineSources: false,
  isolatedModules: false,
  lib: ["es6"],
  listEmittedFiles: false,
  listFiles: false,
  locale: "en-us",
  module: "commonjs",
  moduleResolution: "node",
  newLine: "lf",
  noFallthroughCasesInSwitch: false,
  noImplicitAny: true,
  noImplicitReturns: true,
  noImplicitThis: true,
  noImplicitUseStrict: false,
  noResolve: false,
  noUnusedLocals: true,
  noUnusedParameters: false,
  preserveConstEnums: true,
  pretty: true,
  removeComments: false,
  skipLibCheck: false,
  skipDefaultLibCheck: false,
  sourceMap: false,
  strictNullChecks: true,
  stripInternal: true,
  suppressExcessPropertyErrors: false,
  suppressImplicitAnyIndexErrors: false,
  target: "es6"
};

// tslint:disable-next-line:typedef
export const DEV_TSC_OPTIONS = Object.assign({}, PROD_TSC_OPTIONS, {
  noUnusedLocals: false,
  preserveConstEnums: true,
  removeComments: false,
  sourceMap: true,
  stripInternal: false
});

export default DEV_TSC_OPTIONS;
