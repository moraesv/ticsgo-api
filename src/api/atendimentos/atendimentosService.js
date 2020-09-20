const Atendimento = require("./atendimentos");

Endereco.methods(["get", "post", "put", "delete"]);

Endereco.updateOptions({ new: true, runValidators: true });

module.exports = Atendimento;
