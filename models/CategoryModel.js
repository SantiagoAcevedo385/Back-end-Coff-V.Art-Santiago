const {Schema, model} = require('mongoose');

const CategorySchema = Schema({
    nombre: {
        type: String,
        required: ['true', 'El nombre es obligatorio']
    },
    descripcion: {
        type: String,
        required: ['true', 'La decripción es obligatoria']
    }
    
})

module.exports = model('Category', CategorySchema);