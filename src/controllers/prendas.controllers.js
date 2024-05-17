import { validationResult } from "express-validator"
import Prenda from "../models/prenda"

//Controlador para obtener prendas

export const obtenerPrendas = async (req, res) => {
    try {
        const prendas = await Prenda.find()
        res.status(200).json(prendas)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar las prendas de la base de datos"
        })
    }
}
//Controlador para obtener una sola prenda

export const obtenerPrenda = async (req, res) => {
    try {
        const { id } = req.params
        const prenda = await Prenda.findById(id)
        res.status(200).json(prenda)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar la prenda de la base de datos"
        })
    }
}

// Controlador para crear una receta

export const crearPrenda = async (req, res) => {
    try {
        //trabajar con el resultado de la validacion de express-validator
        const errors = validationResult(req)
        // errors.isEmpty() // true: esta vacio, false: hay error
        if (!errors.isEmpty()) {
            return res.status(400).json({ errores: errors.array() })
        }
        const prendaNueva = new Prenda(req.body)
        await prendaNueva.save()
        res.status(201).json({
            mensaje: "La Prenda fue creada correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al crear la prenda"
        })
    }
}

// controlador para eliminar una Prenda

export const borrarPrenda = async (req, res) => {
    try {
        //obtener el id y luego solicitar a moongoose el borrar   
        const { id } = req.params
        await Prenda.findByIdAndDelete(id)
        res.status(200).json({
            mensaje: "La Prenda fue eliminada"
        })
    }
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al eliminar la prenda"
        })
    }
}

// controlador para editar una Prenda

export const editarPrenda = async (req, res) => {
    try {
        //obtener el id y luego solicitar a moongoose el editar   
        const { id } = req.params
        await Prenda.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            mensaje: "La Prenda fue actualizada correctamente"
        })
    }
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al editar la prenda"
        })
    }
}