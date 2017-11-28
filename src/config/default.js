module.exports = {
  host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
  port: process.env.PORT,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'React Example Project',
    titleTemplate: 'React Example Project - %s',
    meta: [
      {
        name: 'description',
        content: 'Awesome React Example Project',
      },
    ],
  },
};
