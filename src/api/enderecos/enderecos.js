const restful = require("node-restful");
const mongoose = restful.mongoose;

const enderecoSchema = new mongoose.Schema({
  cep: { type: String, required: true },
  estado: { type: String, required: true },
  cidade: { type: String, required: true },
  bairro: { type: String, required: true },
  logradouro: { type: String, required: true },
  endereco: { type: String, required: true },
  numero: { type: Number, required: true },
  complemento: { type: String, required: true },
  referencia: { type: String, required: true },
  criadoEm: { type: Date, required: false, defaultValue: Date.now },
  ativo: { type: Boolean, required: true },
});

module.exports = restful.model("EsquemaEndereco", enderecoSchema);
