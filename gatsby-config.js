const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Typescript Emotion Tailwind',
    description: '',
    author: '@Erbenos',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
      },
    },
  ],
};
