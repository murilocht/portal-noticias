module.exports = function(app) {
  app.get("/noticias", function(req, res) {
    app.src.controllers.noticias.noticias(app, req, res);
  });

  app.get("/noticia", function(req, res) {
    app.src.controllers.noticias.noticia(app, req, res);
  });
};
