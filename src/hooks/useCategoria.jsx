import { useContext } from "react";
import CategoriasCotext from "../context/CategoriasProvider";

const useCategorias = ()=>{
    return useContext(CategoriasCotext)
}

export default useCategorias