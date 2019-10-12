const express = require("express");
const PontoController = require("./controllers/PontoController");
const routes = new express.Router();

routes.post("/ponto",PontoController.store);
routes.get("/ponto",PontoController.index);
routes.get("/ponto/:name",PontoController.show);

module.exports = routes;
