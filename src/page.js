function dashboard(req, res) {
  return res.render("index.html", {
    title: "OLA",
    ativoMenu: "home",
  });
}

module.exports = {
  dashboard,
};
