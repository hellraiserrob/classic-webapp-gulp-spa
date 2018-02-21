import gulp from 'gulp';
import nunjucksRender from 'gulp-nunjucks-render';
import data from 'gulp-data';
import fs from 'fs';

import paths from './paths';
import { isProduction } from './utils';

const folder = isProduction ? 'dist' : '.tmp';

function getDataForFile(file) {  
  const parts = file.relative.split('.');
  const name = parts[0];
  const filePath = `./src/templates/pages/${name}.json`;

  if(!fs.existsSync(filePath)) {
    console.log('File not found');
    return {};
  }
  
  return JSON.parse(fs.readFileSync(filePath));

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
