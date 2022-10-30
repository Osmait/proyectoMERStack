import useProyestos from "./useProyectos";
import useAuth from "./useAuth";

const useAdmin = ()=> {
    const { proyecto }= useProyestos()
    const { auth }= useAuth()

    return proyecto.creador === auth._id
}

export default useAdmin
