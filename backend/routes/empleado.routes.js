const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleado.controller');

router.get('/', empleadoController.getEmpleados);
router.post('/', empleadoController.createEmpleados);
router.get('/:id', empleadoController.getUnicoEmpleado);
router.put('/:id', empleadoController.editarEmpleado); // ✅ Ruta corregida
router.delete('/:id', empleadoController.eliminarEmpleado);

module.exports = router;