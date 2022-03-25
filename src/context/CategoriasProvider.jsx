import { useState,useEffect, createContext } from "react";
import axios from "axios";


const CategoriasCotext = createContext()

const CategoriasProvider = ({children})=>{

    const [categorias, setCategorias]=useState([])

    const obtenerCategorias = async ()=>{
        try {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const {data} = await axios(url)
            setCategorias(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obtenerCategorias()
    },[])
    


    return(
        <CategoriasCotext.Provider value={{categorias}}>
            {children}
        </CategoriasCotext.Provider>
    )
}

export{
    CategoriasProvider
}

export default CategoriasCotext