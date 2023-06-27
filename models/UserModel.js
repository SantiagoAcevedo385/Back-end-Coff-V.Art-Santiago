const {Schema, model} = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: ['true', 'El nombre es obligatorio']
    },
    tel: {
        type: String,
        required: ['true', 'El telefono es obligatorio']
    },
    email: {
        type: String,
        required: ['true', 'El correo es obligatorio']
    },
    password: {
        type: String,
        required: ['true', 'La contraseña es obligatoria']
    },
    rol: {
        type: String,
        required: ['true', 'El rol es obligatorio']
    }
})

module.exports = model('User', UserSchema);