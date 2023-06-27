const { response } = require("express");
const Category = require("../models/CategoryModel");

const getCategory = async (req, res = response) => {
    try{
        const categorys = await Category.find();
        // console.log(users);
        res.status(200).json({
            ok: true,
            categorys
        });
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener la categoría',
            error
        });
    }
}

const getCategoryId = async (req, res = response) => {
    const categoryId = req.params.id
    try {
        const category = await Category.findById(categoryId);
        res.status(200).json({
            ok: true,
            category
        });
    }catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Categoría no encontrada',
            error
        })
    }
}

const postCategory = async (req, res = response) => {
    const { nombre, descripcion } = req.body;
    console.log(req.body)
    const category = new Category({ nombre, descripcion });
    try {
        await category.save();
        res.status(201).json({
            ok: true,
            msg: 'Categoría creada correctamente'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al crear la categoría',
            error
        });
    }
};

const putCategory = async (req, res) => {
    const {_id, ...body} = req.body;
    try {
        console.log({...body})
        await Category.findOneAndUpdate({_id}, {...body})
        res.status(200).json({
            ok: true,
            msg: 'Categoría editada correctamente'
        })
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Categoría no encontrada',
            error
        })
    }
}

const deleteCategory = async (req, res) => {
    const {id} = req.params;
    try{
        await Category.findOneAndDelete({_id: id})
        res.status(200).json({
            ok: true,
            msg: 'Categoría eliminada correctamente'
        })
    }catch(error) {
        res.status(404).json({
            ok: false,
            msg: 'Categoría no encontrada',
            error
        })
    }
}

module.exports = {
    getCategory,
    getCategoryId,
    postCategory,
    putCategory,
    deleteCategory
}