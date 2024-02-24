const Producto = require("../models/Producto");

exports.crearProducto = async (req, res) => {
    try {
        let producto;
        producto = new Producto(req.body);
        await producto.save();
        res.send(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Se produjo un error');
    }
}

exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Se produjo un error');
    }
}

exports.modificarProducto = async (req, res) => {
    try {
        const { descripcion, categoria, distribuidora, precio } = req.body;
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).json({ msg: 'No existe el producto solicitado' });
        }
        producto.descripcion = descripcion;
        producto.categoria = categoria;
        producto.distribuidora = distribuidora;
        producto.precio = precio;
        producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true });
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Se produjo un error');
    }
}

exports.obtenerProductoEspecifico = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).json({ msg: 'No existe el producto solicitado' });
        }
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Se produjo un error');
    }
}

exports.eliminarProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).json({ msg: 'No existe el producto solicitado' });
        }
        await Producto.deleteOne({ _id: req.params.id });
        res.json({ msg: 'Se eliminó el producto solicitado con éxito'});
    } catch (error) {
        console.log(error);
        res.status(500).send('Se produjo un error');
    }
}