const restful = require("node-restful");
const mongoose = restful.mongoose;

const tarefaSchema = new mongoose.Schema({
  descricao: { type: String, required: true },
  realizada: { type: Boolean, required: true, default: false },
  criadaEm: { type: Date, default: Date.now },
  quem: { type: String, required: true },
  onde: { type: String, required: true },
  prioridade: { type: Number, required: true },
});

module.exports = restful.model("EsquemaTarefa", tarefaSchema);
