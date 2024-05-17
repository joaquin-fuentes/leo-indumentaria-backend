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
    estilo: {
        type: String
    },
    tipo: {
        type: String
    },
    descuento: {
        type: String
    },
    destacado: {
        type: String
    },
    precio: {
        type: Number,
        required: true,
    },
    precioxmayor: {
        type: Number
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
        type: String
    },
    talle:{
        type: String,
        required: true,
    },
    descripcion: {
        type: String
    },
    otro: {
        type: String
    },
    otro2: {
        type: String
    }

})

const Prenda = model("prenda", prendaSchema)

export default Prenda