import gulp from 'gulp';
import postcss from 'gulp-postcss';
import concat from 'gulp-concat';
// import sourcemaps from 'gulp-sourcemaps';

import { browser } from './server';

export function styles() {
  return gulp.src('src/styles/*.css')
    // .pipe(sourcemaps.init())
    .pipe(postcss())
    // .pipe(sourcemaps.write('./'))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./.tmp/css'))
    .pipe(browser.stream());
}
