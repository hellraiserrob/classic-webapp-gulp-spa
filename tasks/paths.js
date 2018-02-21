const paths = {
  files: {
    nunjucks: 'src/templates/pages/**/*.nunjucks'
  },
  watch: {
    nunjucks: 'src/templates/**/*.nunjucks',
    models: 'src/templates/pages/**/*.json'
  },
  folders: {
    dist: './dist'
  }
};

export default paths;
