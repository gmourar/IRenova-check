const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: '26.121.130.48:8080',
      changeOrigin: true,
    })
  );
};
