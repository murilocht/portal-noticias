module.exports = function(app) {
  var check = require("express-validator").check;

  app.get("/formulario_inclusao_noticia", function(req, res) {
    app.src.controllers.admin.formulario_inclusao_noticia(app, req, res);
  });

  app.post(
    "/noticias/salvar",
    [
      check("titulo")
        .notEmpty()
        .withMessage("Título é obrigatório"),
      check("resumo")
        .notEmpty()
        .withMessage("Resumo é obrigatório"),
      check("resumo")
        .isLength({ min: 10, max: 100 })
        .withMessage("Resumo deve conter entre 10 e 100 caracteres"),
      check("autor")
        .notEmpty()
        .withMessage("Autor é obrigatório"),
      check("data_noticia")
        .notEmpty()
        .withMessage("Data é obrigatório"),
      check("noticia")
        .notEmpty()
        .withMessage("Notícia é obrigatório")
    ],
    function(req, res) {
      app.src.controllers.admin.noticias_salvar(app, req, res);
    }
  );
};
