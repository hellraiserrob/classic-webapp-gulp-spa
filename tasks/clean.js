import del from 'del';

export function clean() {
  return del([
    './.tmp',
    './dist'
  ]);
}
