const paths = {
  files: {
    nunjucks: 'src/templates/pages/**/*.nunjucks'
  },
  watch: {
    nunjucks: 'src/templates/**/*.nunjucks',
    models: 'src/models/**/*.json'
  },
  folders: {
    dist: './dist'
  }
};

export default paths;
