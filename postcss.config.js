module.exports = {
  plugins: [
      require('postcss-import'),
      require('postcss-font-magician')({ 
        foundries: 'google'
      }),
      // require('postcss-simple-vars'),
      require('stylelint'),
      require('lost'),
      require('precss'),
      require('autoprefixer'),
  ]
};
