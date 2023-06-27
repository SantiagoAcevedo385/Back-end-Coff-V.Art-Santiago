const { response } = require("express");
const Product = require("../models/ProductModel");

const getProduct = async (req, res = response) => {
    try{
        const products = await Product.find();
        // console.log(users);
        res.status(200).json({
            ok: true,
            products
        });
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener el producto',
            error
        });
    }
}

const getProductId = async (req, res = response) => {
    const productId = req.params.id
    try {
        const product = await Product.findById(productId);
        res.status(200).json({
            ok: true,
            product
        });
    }catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Producto no encontrado',
            error
        })
    }
}

const postProduct = async (req, res = response) => {
    const { name, valorU, insumo, stockMin, stockMax, descripcion } = req.body;
    console.log(req.body)
    const product = new Product({ name, valorU, insumo, stockMin, stockMax, descripcion });
    try {
        await product.save();
        res.status(201).json({
            ok: true,
            msg: 'Producto creado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al crear producto',
            error
        });
    }
};

const putProduct = async (req, res) => {
    const {_id, ...body} = req.body;
    try {
        console.log({...body})
        await Product.findOneAndUpdate({_id}, {...body})
        res.status(200).json({
            ok: true,
            msg: 'Producto editado correctamente'
        })
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Producto no encontrado',
            error
        })
    }
}

const deleteProduct = async (req, res) => {
    const {id} = req.params;
    try{
        await Product.findOneAndDelete({_id: id})
        res.status(200).json({
            ok: true,
            msg: 'Producto eliminado correctamente'
        })
    }catch(error) {
        res.status(404).json({
            ok: false,
            msg: 'Producto no encontrado',
            error
        })
    }
}

module.exports = {
    getProduct,
    getProductId,
    postProduct,
    putProduct,
    deleteProduct
}