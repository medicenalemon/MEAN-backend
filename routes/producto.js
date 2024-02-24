const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.put('/:id', productoController.modificarProducto);
router.get('/:id', productoController.obtenerProductoEspecifico);
router.delete('/:id', productoController.eliminarProducto);

module.exports = router;