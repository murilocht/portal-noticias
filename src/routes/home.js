module.exports = function(app) {
  app.get("/", function(req, res) {
    app.src.controllers.home.index(app, req, res);
  });
};
