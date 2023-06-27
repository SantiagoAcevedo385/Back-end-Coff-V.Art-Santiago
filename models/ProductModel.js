const {Schema, model} = require('mongoose');

const ProductSchema = Schema({
    name: {
        type: String,
        required: ['true', 'El nombre es obligatorio']
    },
    valorU: {
        type: String,
        required: ['true', 'El valor unitario es obligatorio'],
        min:[1, 'El valor unitario debe ser mayor a 1000']
    },
    insumo: {
        type: String,
        required: ['true', 'El insumo es obligatorio']
    },
    stockMin: {
        type: String,
        required: ['true', 'El stock minimo es obligatorio'],
        min:[1, 'La cantidad debe ser mayor a 0'],
        validate:{
            validator:Number.isInteger,
            message:'la cantidad debe ser un entero'
        }
    },
    stockMax: {
        type: String,
        required: ['true', 'El stock máximo es obligatorio'],
        min:[1, 'La cantidad debe ser mayor a 0'],
        validate:{
            validator:Number.isInteger,
            message:'la cantidad debe ser un entero'
        }
    },
    descripcion: {
        type: String,
        required: ['true', 'La decripción es obligatoria']
    }
    
})

module.exports = model('Product', ProductSchema);