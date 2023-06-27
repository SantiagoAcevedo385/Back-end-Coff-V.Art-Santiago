const { response } = require("express");
const Empaquetado = require("../models/EmpaquetadoModel");

const getEmpaquetados = async (req, res = response) => {
    try{
        const empaquetados = await Empaquetado.find();
        console.log(empaquetados);
        res.status(200).json({
            ok: true,
            empaquetados
        });
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener empaquetados',
            error
        });
    }
}

const postEmpaquetado = async (req, res = response) => {
    const { insumo, productoFinal, cantidad, fechaInicio, estado } = req.body;
    console.log(req.body)
    const empaquetado = new Empaquetado({ insumo, productoFinal, cantidad, fechaInicio, estado });
    try {
        await empaquetado.save();
        res.status(201).json({
            ok: true,
            msg: 'empaquetado registrado correctamente'
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al registrar empaquetado',
            error
        });
    }
}
const getEmpaquetadoId = async (req, res = response) => {
    const empaquetadoId = req.params.id
    try {
        const empaquetado = await Empaquetado.findById(empaquetadoId);
        res.status(200).json({
            ok: true,
            user
        });
    }catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Empaquetado no encontrado',
            error
        })
    }
}
const putEmpaquetado = async (req, res) => {
    const {_id, ...body} = req.body;
    try {
        console.log({...body})
        await Empaquetado.findOneAndUpdate({_id}, {...body})
        res.status(200).json({
            ok: true,
            msg: 'Empaquetado actualizado exitosamente'
        })
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Empaquetado no encontrado',
            error
        })
    }
}

const deleteEmpaquetado = async (req, res) => {
    const {id} = req.params;
    try{
        await Empaquetado.findOneAndDelete({_id: id})
        res.status(200).json({
            ok: true,
            msg: 'Empaquetado eliminado correctamente'
        })
    }catch(error) {
        res.status(404).json({
            ok: false,
            msg: 'Empaquetado no encontrado',
            error
        })
    }
};

module.exports = {
    getEmpaquetados,
    postEmpaquetado,
    getEmpaquetadoId,
    putEmpaquetado,
    deleteEmpaquetado
}