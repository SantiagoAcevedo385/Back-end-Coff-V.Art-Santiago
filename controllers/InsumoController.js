const { response } = require("express");
const Insumo = require("../models/InsumoModel");

const getInsumo = async (req, res = response) => {
    try{
        const insumos = await Insumo.find();
        // console.log(users);
        res.status(200).json({
            ok: true,
            insumos
        });
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener el insumo',
            error
        });
    }
}

const getInsumoId = async (req, res = response) => {
    const insumoId = req.params.id
    try {
        const insumo = await Insumo.findById(insumoId);
        res.status(200).json({
            ok: true,
            insumo
        });
    }catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Insumo no encontrado',
            error
        })
    }
}

const postInsumo = async (req, res = response) => {
    const { nombre, costoSaco, cantidad, categoria, descripcion } = req.body;
    console.log(req.body)
    const insumo = new Insumo({ nombre, costoSaco, cantidad, categoria, descripcion });
    try {
        await insumo.save();
        res.status(201).json({
            ok: true,
            msg: 'Insumo creado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al crear insumo',
            error
        });
    }
};

const putInsumo = async (req, res) => {
    const {_id, ...body} = req.body;
    try {
        console.log({...body})
        await Insumo.findOneAndUpdate({_id}, {...body})
        res.status(200).json({
            ok: true,
            msg: 'Insumo editado correctamente'
        })
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Insumo no encontrado',
            error
        })
    }
}

const deleteInsumo = async (req, res) => {
    const {id} = req.params;
    try{
        await Insumo.findOneAndDelete({_id: id})
        res.status(200).json({
            ok: true,
            msg: 'Insumo eliminado correctamente'
        })
    }catch(error) {
        res.status(404).json({
            ok: false,
            msg: 'Insumo no encontrado',
            error
        })
    }
}

module.exports = {
    getInsumo,
    getInsumoId,
    postInsumo,
    putInsumo,
    deleteInsumo
}