const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmpleadoSchema = new Schema({
    nombre: { type: String, required: true },
    cargo: { type: String, required: true },
    salario: { type: Number, required: true }
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);