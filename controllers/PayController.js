const { response } = require("express");
const Pay = require("../models/PayModel");

const getPays = async (req, res = response) => {
    try{
        const pays = await Pay.find();
        console.log(pays);
        res.status(200).json({
            ok: true,
            pays
        });
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener Pagos',
            error
        });
    }
}

const postPay = async (req, res = response) => {
    const { numeroContrato, montoPagado, fechaPago } = req.body;
    console.log(req.body)
    const pay = new Pay({ numeroContrato, montoPagado, fechaPago  });
    try {
        await pay.save();
        res.status(201).json({
            ok: true,
            msg: 'Pago Registrado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al Registrar Pago',
            error
        });
    }
}
const getPayId = async (req, res = response) => {
    const payId = req.params.id
    try {
        const pay = await Pay.findById(payId);
        res.status(200).json({
            ok: true,
            pay
        });
    }catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Pago no encontrado',
            error
        })
    }
}
const putPay = async (req, res) => {
    const {_id, ...body} = req.body;
    try {
        console.log({...body})
        await Pay.findOneAndUpdate({_id}, {...body})
        res.status(200).json({
            ok: true,
            msg: 'Pago actualizado exitosamente'
        })
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Pago no encontrado',
            error
        })
    }
}

const deletePay = async (req, res) => {
    const {id} = req.params;
    try{
        await Pay.findOneAndDelete({_id: id})
        res.status(200).json({
            ok: true,
            msg: 'Pago eliminado correctamente'
        })
    }catch(error) {
        res.status(404).json({
            ok: false,
            msg: 'Pago no encontrado',
            error
        })
    }
};

module.exports = {
    getPays,
    postPay,
    getPayId,
    putPay,
    deletePay
}