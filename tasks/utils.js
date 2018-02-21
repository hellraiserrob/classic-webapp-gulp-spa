import gulp from 'gulp';
import process from 'process';

export const isProduction = (process.env.NODE_ENV === 'production');

export function copy() {
  return gulp.src('./public/**/*')
    .pipe(gulp.dest('./dist'));
}
