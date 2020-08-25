function login(req, res) {
  return res.render("index.html", {
    title: "Login",
    ativoMenu: "home",
  });
}
function cadastroLogin(req, res) {
  return res.render("cadastro.html", {
    title: "Cadastro",
    ativoMenu: "home",
  });
}

module.exports = {
  login,
  cadastroLogin,
};
