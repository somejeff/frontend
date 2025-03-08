const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8080", // Your Spring Boot backend
      changeOrigin: true,
      logLevel: "debug", // Enables proxy logging
    })
  );
};
