const express = require("express");

module.exports = function (server) {
  const router = express.Router();

  server.use("/api", router);
  const tarefaService = require("../api/tarefas/tarefasService");
  const enderecoService = require("../api/enderecos/enderecosService");
  const atendimentoService = require("../api/atendimentos/atendimentosService");
  const oficialService = require("../api/oficiais/oficiaisService");

  tarefaService.register(router, "/tarefas");
  enderecoService.register(router, "/enderecos");
  atendimentoService.register(router, "/atendimentos");
  oficialService.register(router, "/oficiais");
};
