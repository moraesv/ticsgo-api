const Atendimento = require("./atendimentos");

Atendimento.methods(["get", "post", "put", "delete"]);

Atendimento.updateOptions({ new: true, runValidators: true });

module.exports = Atendimento;
