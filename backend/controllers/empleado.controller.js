const Empleado = require('../models/empleado');

const empleadoCtrl = {}; // ✅ Ahora está correctamente definido

empleadoCtrl.getEmpleados = async (req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);
};

empleadoCtrl.createEmpleados = async (req, res) => {
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.json({ status: 'Empleado guardado' });
};

empleadoCtrl.getUnicoEmpleado = async (req, res) => {
    const empleadoUnico = await Empleado.findById(req.params.id);
    res.json(empleadoUnico);
};

empleadoCtrl.editarEmpleado = async (req, res) => {
    const { id } = req.params;
    const empleadoEdit = {  
        nombre: req.body.nombre,
        cargo: req.body.cargo,  // ✅ Cargo corregido
        salario: req.body.salario
    };

    const empleadoActualizado = await Empleado.findByIdAndUpdate(id, { $set: empleadoEdit }, { new: true });

    if (!empleadoActualizado) {
        return res.status(404).json({ error: "Empleado no encontrado" });
    }

    res.json({ status: "Empleado Actualizado", data: empleadoActualizado });
};

empleadoCtrl.eliminarEmpleado = async (req, res) => {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({ status: 'Empleado Eliminado' });
};

module.exports = empleadoCtrl; // ✅ Exportación corregida
