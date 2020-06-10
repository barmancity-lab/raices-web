module.exports = {
  name: process.env.NODE_CONTEXT_NAME || 'web-raices',
  port: process.env.NODE_CONTEXT_PORT || 3000,
  middlewares: {
    commons: process.env.NODE_CONTEXT_MIDDLEWARES_COMMONS || [
      'check-country-middleware',
    ],
  }
};
