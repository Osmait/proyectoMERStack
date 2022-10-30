import { Router } from "express";
import {
  autenticar,
  comprobarToken,
  confirmar,
  nuevoPassword,
  olvidePassword,
  perfil,
  registrar,
} from "../controllers/usuarioController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = Router();

// Autenticacion, registro y Confimacion de usuarios
router.post("/", registrar); // Crea un nuevo usuario
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword)


router.get('/perfil',checkAuth, perfil)



export default router;
