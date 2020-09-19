const Endereco = require("./enderecos");

Endereco.methods(["get", "post", "put", "delete"]);

Endereco.updateOptions({ new: true, runValidators: true });

module.exports = Endereco;
