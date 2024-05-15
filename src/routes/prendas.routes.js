import { Router } from "express";
import {
    borrarPrenda,
    crearPrenda,
    editarPrenda,
    obtenerPrendas,
    obtenerPrenda
} from "../controllers/prendas.controllers";
import {check} from "express-validator"

const router = Router()


router.route("/prendas")
    .get(obtenerPrendas)
    .post([check("nombrePrenda")
           .notEmpty()
           .withMessage("La prenda es un dato obligatorio")]
                ,crearPrenda)
router.route("/prendas/:id")
    .get(obtenerPrenda)
    .delete(borrarPrenda)
    .put(editarPrenda)

export default router