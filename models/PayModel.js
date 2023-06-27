const {Schema, model} = require('mongoose');

const PaySchema = Schema({
    numeroContrato: {
        type: Number,
        //debería tomarlo automaticamente cuando se da en el botón del datagrid del contrato
    },
    montoPagado: {
        type: Number,
        required: ['true', 'El monto es obligatorio'],
        min: [0,'El valor debe ser mayor a 0']
    },
    fechaPago: {
        type: Date,
        default: new Date
        //Esta fecha se registra automaticamente dependiendo 
    },
})

module.exports = model('Pay', PaySchema);