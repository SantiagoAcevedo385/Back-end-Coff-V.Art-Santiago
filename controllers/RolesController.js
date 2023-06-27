const {response} = require('express');
const Roles = require('../models/RolesModel');

const getRoles = async (req, res = response) => {
    try{
        const roles = await Roles.find();
        res.status(200).json({
            ok: true,
            roles
        })
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener roles',
            error
        })
    }
}

const getRolId = async (req, res = response) => {
    const rolId = req.params.id;
    try{
        const rol = await Roles.findById(rolId);
        res.status(200).json({
            ok: true,
            rol
        })
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener rol',
            error
        })
    }
}

const postRol = async (req, res = response) => {
    const {name, state} = req.body;
    const rol = new Roles({name, state});
    try{
        await rol.save();
        res.status(201).json({
            ok: true,
            msg: 'Rol creado correctamente'
        })
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Error al crear rol',
            error
        })
    }
}

const putRol = async (req, res = response) => {
    const {_id, ...body} = req.body;
    try{
        await Roles.findOneAndUpdate({_id}, {...body});
        res.status(200).json({
            ok: true,
            msg: 'Rol actualizado correctamente'
        })
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar rol',
            error
        })
    }
}

const deleteRol = async (req, res = response) => {
    const rolId = req.params.id;
    try{
        await Roles.findByIdAndDelete(rolId);
        res.status(200).json({
            ok: true,
            msg: 'Rol eliminado correctamente'
        })
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Error al eliminar rol',
            error
        })
    }
}

module.exports = {
    getRoles,
    getRolId,
    postRol,
    putRol,
    deleteRol
}