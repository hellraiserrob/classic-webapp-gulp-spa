module.exports = {
  process(src) {
    return `
      const nunjucks = require('nunjucks');
      module.exports = nunjucks.compile(\`${src}\`);
    `;
  }
};
