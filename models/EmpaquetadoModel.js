const {Schema, model} = require('mongoose');

const EmpaquetadoSchema = Schema({
    insumo: {
        type: String,
        required: ['true', 'El insumo es obligatorio']
        //select
        //opciones: insumos del modulo insumo
    },
    productoFinal: {
        type: String,
        required: ['true', 'El producto final es obligatorio']
        //select
        //opcines: café 250gr, café 500gr, café 1Kg
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
    fechaInicio: {
        type: Date,
        default: new Date()
        // se registra automaticamente con la creación
    },
    estado: {
        type: Boolean,
        default:true,
        required: ['true', 'El estado es obligatorio'],
        enum:['EnProceso','Finalizado']
        //select
        //opciones: En proceso, finalizado
    }
})

module.exports = model('Empaquetado', EmpaquetadoSchema);