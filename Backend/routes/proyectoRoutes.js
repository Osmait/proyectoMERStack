import express from "express";
import {
  obtenerProyectos,
  nuevoProyectos,
  obtenerProyecto,
  editarProyecto,
  eliminarColaborador,
  eliminarProyecto,
  agregarColaborador,
  buscarColaborador,

} from "../controllers/proyectoController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

// Rutas para crear y buscar los Proyectos
router
  .route("/")
  .get(checkAuth, obtenerProyectos)
  .post(checkAuth, nuevoProyectos);

//   Rutas para  editar buscar y eliminar proyectos
router
  .route("/:id")
  .get(checkAuth, obtenerProyecto)
  .put(checkAuth, editarProyecto)
  .delete(checkAuth, eliminarProyecto);


// Rutas de los colaboradores 

router.post('/Colaboradores', checkAuth,buscarColaborador)
router.post('/Colaboradores/:id', checkAuth,agregarColaborador)
router.post('/eliminar-Colaborador/:id', checkAuth,eliminarColaborador)


export default router;
