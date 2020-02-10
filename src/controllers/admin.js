module.exports.formulario_inclusao_noticia = function(app, req, res) {
  res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
};

module.exports.noticias_salvar = function(app, req, res) {
  var validationResult = require("express-validator").validationResult;

  var noticia = req.body;

  var errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.render("admin/form_add_noticia", {
      validacao: errors.array(),
      noticia: noticia
    });
    return;
  }

  var connection = app.config.dbConnection();
  var noticiasModel = new app.src.models.NoticiasDAO(connection);

  noticiasModel.salvarNoticia(noticia, function() {
    res.redirect("/noticias");
  });
};
