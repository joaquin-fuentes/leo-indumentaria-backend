import { Schema, model } from "mongoose"

const prendaSchema = new Schema({
    nombrePrenda: {
        type: String,
        minLength: 2,
        maxLength: 80,
        required: true
    },
    
    estado: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    descuento: {
        type: String,
        required: true,
    },
    destacado: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    precioxmayor: {
        type: Number,
        required: true,
    },
    imagen: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true,
    },
    talle:{
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true
    },
    otro: {
        type: String,
        required: true
    }

})

const Prenda = model("prenda", prendaSchema)

export default Prenda