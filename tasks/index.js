import gulp from 'gulp';

import { scripts } from './webpack';
import { styles }  from './styles';
import { server }  from './server';
import { nunjucks }  from './nunjucks';

export const dev = gulp.parallel( server, styles, nunjucks );
export const build = gulp.series( scripts );

export default dev;