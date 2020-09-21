const restful = require("node-restful");
const mongoose = restful.mongoose;

const enderecoSchema = new mongoose.Schema({
    nomeOficial: {type: String, required: true},
    chapa: {type: Number, required: true},
    funcional: {type: Number, required: true},
    nomeUsuario: {type: String, required: true},
    senha: {type: String, required: true},
    criadoEm: { type: Date, required: false, defaultValue: Date.now },
    ativo: { type: Boolean, required: true },
});

module.exports = restful.model("EsquemaOficial", oficialSchema);