const {Schema, model} = require('mongoose');

const InsumoSchema = Schema({
    nombre: {
        type: String,
        required: ['true', 'El nombre es obligatorio']
    },
    costoSaco: {
        type: String,
        required: ['true', 'El costo del saco es obligatorio'],
        min:[1, 'El costo del saco debe ser mayor a 1000']
    },
    cantidad: {
        type: Number,
        required: ['true', 'La cantidad es obligatoria'],
        min:[1, 'La cantidad debe ser mayor a 0'],
        validate:{
            validator:Number.isInteger,
            message:'la cantidad debe ser un entero'
        }
    },
    categoria: {
        type: String,
        required: ['true', 'La categoría es obligatoria']
    },
    descripcion: {
        type: String,
        required: ['true', 'La decripción es obligatoria']
    }
    
})

module.exports = model('Insumo', InsumoSchema);