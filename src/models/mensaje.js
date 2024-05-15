import { Schema, model } from "mongoose"

const mensajeSchema = new Schema({
    comentario: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true,
    },
    destacado: {
        type: String,
        required: true,
    },
    fecha: {
        type: String,
        required: true
    }

})

const Mensaje = model("mensaje", mensajeSchema)

export default Mensaje