const restful = require("node-restful");
const mongoose = restful.mongoose;

const enderecoSchema = new mongoose.Schema({
  horaAtendimento: { type: String, required: true },
  descricao: { type: String, required: true },
  horaInicioAtuacao: { type: String, required: true },
  horaFimAtuacao: { type: String, required: true },
  formaSolicitacao: { type: Number, required: true },
  nomeSolicitante: { type: String, required: true },
  qualificadoEnvolvido: { type: String, required: true },
  telefone: { type: Number, required: true },
  outros: { type: String, required: true },
  criadoEm: { type: Date, required: false, defaultValue: Date.now },
  ativo: { type: Boolean, required: true },
});

module.exports = restful.model("EsquemaAtendimento", atendimentoSchema);
