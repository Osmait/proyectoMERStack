import {useContext}from 'react'
import ProyectosContext from '../context/ProyectosProvider'

const useProyestos = () => {
    return useContext(ProyectosContext)
}
export default useProyestos