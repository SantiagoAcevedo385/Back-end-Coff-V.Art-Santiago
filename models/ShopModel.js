const {Schema, model} = require('mongoose');

const ShopSchema = Schema({
    producto: {
        type: String,
        required: ['true', 'El nombre es obligatorio']
    },
    cantidad: {
        type: String,
        required: ['true', 'La cantidad es obligatoria'],
        min:[1, 'La cantidad debe ser mayor a 0'],
        validate:{
            validator: (value)=> Number(value),
            message:'La cantidad debe ser un entero'
        }
    },
    iva: {
        type: String,
        required: ['true', 'El iva es obligatorio'],
    },
    total: {
        type: String,
        required: ['true', 'El total es obligatorio'],
        min:[1, 'El total debe ser mayor a 1000']
    }
    
})

module.exports = model('Shop', ShopSchema);