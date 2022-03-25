import { useState } from "react"
import { Button,Form, Row, Col, Alert } from "react-bootstrap"
import useCategorias from "../hooks/useCategoria"
import useBebidas from "../hooks/useBebidas"


const Formulario = () => {

    const {categorias} = useCategorias()
    const {consultarBebidas} = useBebidas()

    const [busqueda, setBusqueda] = useState({
        nombre:'',
        categoria:''
    })
    const [alerta,setAlerta] = useState('')

    const handleSubmit = e =>{
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setAlerta('Todos Locas campos son obligatorios')
            return
        }
        setAlerta('')
        consultarBebidas(busqueda)
    }

  return (
    
    <Form onSubmit={handleSubmit}>
        {alerta && <Alert variant="danger" className="text-center m-3">{alerta}</Alert>}

        <Row >

            <Col md={6}>
                <Form.Group className={"mt-3"}>
                    <Form.Label htmlFor="nombre">Nombre de bebida</Form.Label>
                    <Form.Control value={busqueda.nombre} id="nombre" name="nombre" placeholder="Ej: Tequila, Vodka, etc" type="text" 
                                  onChange={e => setBusqueda({...busqueda, [e.target.name]: e.target.value})}/>
                </Form.Group>
            </Col>

            <Col md={6}>
                <Form.Group className={"mt-3"}>
                        <Form.Label htmlFor="nombre">Categoria Bebida</Form.Label>
                        <Form.Select id="categoria" name="categoria" value={busqueda.categoria} onChange={e => setBusqueda({...busqueda, [e.target.name]: e.target.value})}>
                            <option >- Selecciona Categoria -</option>
                            {categorias.map(categorias =>(
                                <option key={categorias.strCategory} value={categorias.strCategory}>
                                    {categorias.strCategory}
                                </option>
                            ))}
                        </Form.Select>
                </Form.Group>
            </Col>

        </Row>

        <Row className="justify-content-end mt-3">
            <Col md={3}>
                <Button variant="danger" className="text-uppercase w-100" type="submit">
                    Buscar Bebida
                </Button>
            </Col>
        </Row>

    </Form>

  )
}

export default Formulario