const { response } = require("express");
const Shop = require("../models/ShopModel");

const getShop = async (req, res = response) => {
    try{
        const shops = await Shop.find();
        // console.log(users);
        res.status(200).json({
            ok: true,
            shops
        });
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener la compra',
            error
        });
    }
}

const getShopId = async (req, res = response) => {
    const shopId = req.params.id
    console.log(shopId)
    try {
        const shop = await Shop.findById(shopId);
        res.status(200).json({
            ok: true,
            shop
        });
    }catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Compra no encontrada',
            error
        })
    }
}

const postShop = async (req, res = response) => {
    const { producto, cantidad, iva, total} = req.body;
    const cantidadEntero = parseInt(cantidad)
    console.log(req.body)
    const shop = new Shop({ producto, cantidad: cantidadEntero, iva, total });
    try {
        await shop.save();
        res.status(201).json({
            ok: true,
            msg: 'Compra creada correctamente'
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al crear compra',
            error
        });
    }
};

const putShop = async (req, res) => {
    const {_id, ...body} = req.body;
    try {
        console.log({...body})
        await Shop.findOneAndUpdate({_id}, {...body})
        res.status(200).json({
            ok: true,
            msg: 'Compra editada correctamente'
        })
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Compra no encontrada',
            error
        })
    }
}

const deleteShop = async (req, res) => {
    const {id} = req.params;
    try{
        await Shop.findOneAndDelete({_id: id})
        res.status(200).json({
            ok: true,
            msg: 'Compra eliminada correctamente'
        })
    }catch(error) {
        res.status(404).json({
            ok: false,
            msg: 'Compra no encontrada',
            error
        })
    }
}

module.exports = {
    getShop,
    getShopId,
    postShop,
    putShop,
    deleteShop
}