import gulp from 'gulp';
import nunjucksRender from 'gulp-nunjucks-render';
import data from 'gulp-data';
import fs from 'fs';

import paths from './paths';
import { isProduction } from './utils';

const folder = isProduction ? 'dist' : '.tmp';
const base =  JSON.parse(fs.readFileSync('./src/models/base.json'));

function getDataForFile(file) {
  const parts = file.relative.split('.');
  const name = parts[0];
  const filePath = `./src/models/${name}.json`;

  if (!fs.existsSync(filePath)) {
    console.log('File not found');
    return base;
  }

  const model = JSON.parse(fs.readFileSync(filePath));

  return Object.assign(base, model);

}

export function nunjucks() {

  // Gets .html and .nunjucks files in pages
  return gulp.src(paths.files.nunjucks)
    .pipe(data(getDataForFile))
    // Renders template with nunjucks
    .pipe(nunjucksRender({
      path: ['src/templates']
    }))
    // output files in app folder
    .pipe(gulp.dest(`./${folder}`));

}
