import gulp from 'gulp';
import Browser from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import paths from './paths';
import { config as webpackConfig } from './webpack';
import { styles } from './styles';
import { nunjucks } from './nunjucks';

export const browser = Browser.create();
const bundler = webpack(webpackConfig);

function reload(done) {
  browser.reload();
  done();
}

export function server(done) {

  let config = {
    // server: 'src',
    server: {
      baseDir: ['.tmp', 'public'],
      // directory: true
    },
    open: false,
    middleware: [
      webpackDevMiddleware(bundler, { /* options */ }),
      webpackHotMiddleware(bundler)
    ],
    // serveStatic: ['./.tmp']
  };

  browser.init(config);

  gulp.watch([paths.watch.nunjucks, paths.watch.models], gulp.series(nunjucks, reload));
  gulp.watch('src/styles/**/*.css', styles);

  // gulp.watch('src/scripts/*.js').on('change', reload);
  // gulp.watch('src/*.html').on('change', reload);

  done();
}

