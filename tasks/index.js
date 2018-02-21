import gulp from 'gulp';

import { scripts } from './webpack';
import { styles }  from './styles';
import { server }  from './server';
import { nunjucks }  from './nunjucks';
import { clean }  from './clean';
import { copy }  from './utils';

export const dev = gulp.series(clean, gulp.parallel( styles, nunjucks, server ));
export const build = gulp.series( clean, styles, scripts, nunjucks, copy );

export default dev;
