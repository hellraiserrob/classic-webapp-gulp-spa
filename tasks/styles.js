import gulp from 'gulp';
import postcss from 'gulp-postcss';
import concat from 'gulp-concat';
// import sourcemaps from 'gulp-sourcemaps';

import { browser } from './server';
import { isProduction } from './utils';

const folder = isProduction ? 'dist' : '.tmp';

export function styles() {
  return gulp.src('src/styles/*.css')
    // .pipe(sourcemaps.init())
    .pipe(postcss())
    // .pipe(sourcemaps.write('./'))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(`./${folder}/css`))
    .pipe(browser.stream());
}
