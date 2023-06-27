const { response } = require("express");
const Contract = require("../models/ContractModel");

const getContracts = async (req, res = response) => {
    try{
        const contracts = await Contract.find();
        console.log(contracts);
        res.status(200).json({
            ok: true,
            contracts
        });
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener Contratos',
            error
        });
    }
}

const postContract = async (req, res = response) => {
    const { nombreEmpresa, NIT, direccion, nombreRepresentante, correoRepresentante, producto, comision, duracion, cobro, fecha } = req.body;
    console.log(req.body)
    const contract = new Contract({ nombreEmpresa, NIT, direccion, nombreRepresentante, correoRepresentante, producto, comision, duracion, cobro, fecha  });
    try {
        await contract.save();
        res.status(201).json({
            ok: true,
            msg: 'Contrato creado correctamente'
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al crear contrato',
            error
        });
    }
}
const getContractId = async (req, res = response) => {
    const contractId = req.params.id
    try {
        const contract = await Contract.findById(contractId);
        res.status(200).json({
            ok: true,
            user
        });
    }catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Contrato no encontrado',
            error
        })
    }
}
const putContract = async (req, res) => {
    const {_id, ...body} = req.body;
    try {
        console.log({...body})
        await Contract.findOneAndUpdate({_id}, {...body})
        res.status(200).json({
            ok: true,
            msg: 'Contrato actualizado exitosamente'
        })
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Contrato no encontrado',
            error
        })
    }
}

const deleteContract = async (req, res) => {
    const {id} = req.params;
    try{
        await Contract.findOneAndDelete({_id: id})
        res.status(200).json({
            ok: true,
            msg: 'Contrato eliminado correctamente'
        })
    }catch(error) {
        res.status(404).json({
            ok: false,
            msg: 'Contrato no encontrado',
            error
        })
    }
};

module.exports = {
    getContracts,
    postContract,
    getContractId,
    putContract,
    deleteContract
}