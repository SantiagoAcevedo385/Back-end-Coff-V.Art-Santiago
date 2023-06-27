const { response } = require("express");
const User = require("../models/UserModel");

const getUsers = async (req, res = response) => {
    try{
        const users = await User.find();
        // console.log(users);
        res.status(200).json({
            ok: true,
            users
        });
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener usuarios',
            error
        });
    }
}

const getUserId = async (req, res = response) => {
    const userId = req.params.id
    try {
        const user = await User.findById(userId);
        res.status(200).json({
            ok: true,
            user
        });
    }catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Usuario no encontrado',
            error
        })
    }
}

const postUser = async (req, res = response) => {
    const { name, tel, email, password, rol } = req.body;
    console.log(req.body)
    const user = new User({ name, tel, email, password, rol });
    try {
        await user.save();
        res.status(201).json({
            ok: true,
            msg: 'Usuario creado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al crear usuario',
            error
        });
    }
};

const putUser = async (req, res) => {
    const {_id, ...body} = req.body;
    try {
        console.log({...body})
        await User.findOneAndUpdate({_id}, {...body})
        res.status(200).json({
            ok: true,
            msg: 'User updated successfully'
        })
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'User not found',
            error
        })
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try{
        await User.findOneAndDelete({_id: id})
        res.status(200).json({
            ok: true,
            msg: 'User deleted successfully'
        })
    }catch(error) {
        res.status(404).json({
            ok: false,
            msg: 'could not find user',
            error
        })
    }
}

module.exports = {
    getUsers,
    getUserId,
    postUser,
    putUser,
    deleteUser
}