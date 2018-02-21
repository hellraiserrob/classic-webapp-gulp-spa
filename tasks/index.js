import gulp from 'gulp';

import { scripts } from './webpack';
import { styles }  from './styles';
import { server }  from './server';
import { nunjucks }  from './nunjucks';
import { clean }  from './clean';

export const dev = gulp.series(clean, gulp.parallel( styles, nunjucks, server ));
export const build = gulp.series( scripts );

export default dev;
