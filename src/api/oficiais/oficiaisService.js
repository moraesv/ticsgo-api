const Oficial = require("./oficiais");

Oficial.methods(["get", "post", "put", "delete"]);

Oficial.updateOptions({ new: true, runValidators: true });

module.exports = Oficial;