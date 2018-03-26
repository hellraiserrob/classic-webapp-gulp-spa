import gulp from 'gulp';
import postcss from 'gulp-sass';
import stylelint from 'gulp-stylelint';
import sourcemaps from 'gulp-sourcemaps';

import { browser } from './server';
import { isProduction } from './utils';

const folder = isProduction ? 'dist' : '.tmp';

export function styles() {
  return gulp.src('src/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(`./${folder}/css`))
    .pipe(browser.stream());
}

export function stylesLint() {
  return gulp.src('src/styles/**/*.scss')
    .pipe(stylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
}
