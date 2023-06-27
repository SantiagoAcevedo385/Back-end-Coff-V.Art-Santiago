const {Schema, model} = require('mongoose');

const RolesSchema = Schema({
    name: {
        type: String,
        required: ['true', 'El nombre es obligatorio']
    },
    state:{
        type: Boolean,
        default: true,
        required: ['true', 'El estado es obligatorio']
    },
    permissions: {
        type: Array,
        required: ['true', 'Los permisos son obligatorios']
    }
})

module.exports = model('Roles', RolesSchema);