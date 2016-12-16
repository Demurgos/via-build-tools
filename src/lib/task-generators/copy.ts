import {Gulp, TaskFunction} from "gulp";
import {Minimatch} from "minimatch";

import {asString, join} from "../utils/matcher";

export interface Options {
  /**
   * An array of minimatch patterns
   */
  files: string[];

  /**
   * Base-directory for copy
   */
  from: string;

  /**
   * Target directory
   */
  to: string;
}

/**
 * Return a list of sources, prefixed by "from"
 */
export function getSources({files, from}: Options): string[] {
  return files.map((val: string): string => asString(join(from, new Minimatch(val))));
}

export function copy(gulp: Gulp, options: Options): NodeJS.ReadableStream {
  return gulp
    .src(getSources(options), {base: options.from})
    .pipe(gulp.dest(options.to));
}

/**
 * Generate a task to copy files from one directory to an other.
 */
export function generateTask(gulp: Gulp, targetName: string, options: Options): TaskFunction {
  return function (): NodeJS.ReadableStream {
    return copy(gulp, options);
  };
}