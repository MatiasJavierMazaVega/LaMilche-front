import { Form, Button } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom";
import axios from 'axios';

const AdminBebidas = () =>{


    const URL_B = import.meta.env.VITE_URL_BEBIDA;

   

    
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: { 
            producto: '',
            imagen: '',
            precio: ''
        }
    });
    


    const onSubmitBebida = (datos, e) =>{
        e.preventDefault();
        try {
            console.log(datos);
            axios.post(URL_B, datos)
            e.target.reset();
            console.log(URL_B);
        } catch (error) {
            console.log(error);
        }
    }

/*  const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); */


    return (

      <div className="container mt-5">
        <div className="text-center m-5">
            <Link to="/MenuEstandarAdmin"><p1 className="mx-5" style={{color:"#593C2C", fontFamily:"Verdana"}}>Clásico</p1></Link>
            <Link to="/MenuVeggieAdmin"><p1 className="mx-5" style={{color:"#593C2C", fontFamily:"Verdana"}}>Veggie</p1></Link>
            <Link to="/PostresAdmin"><p1 className="mx-5" style={{color:"#593C2C", fontFamily:"Verdana"}}>Postre</p1></Link>
            <Link to="/BebidasAdmin"><p1 className="mx-5" style={{color:"#593C2C", fontFamily:"Verdana"}}>Bebida</p1></Link>
            </div>
            <div className="text-center m-5">
            <h1 style={{color:"#F2E6DF", fontFamily:"Verdana", textAlign:"center"}}>Formulario Bebidas</h1>
            </div>
            <Form  onSubmit={handleSubmit(onSubmitBebida)}>
                <Form.Field>
                    <label style={{color:"#F2E6DF", fontFamily:"Verdana"}}>Producto: </label>
                    <input 
                        placeholder='Producto'
                        type= 'text'
                        name='producto'
                        {...register('producto', 
                            {
                                required: true,
                                maxLength: 50
                            })
                        }
                    />
                </Form.Field>
                

                <Form.Field>
                    <label style={{color:"#F2E6DF", fontFamily:"Verdana"}}>Imagen: </label>
                    <input 
                        placeholder='Ingresar ruta de la imagen dentro del proyecto'
                        type='text'
                        name='imagen'
                        {...register('imagen', 
                            {
                                required: true,
                                maxLength: 80
                            })
                        }
                    />
                </Form.Field>
                

                <Form.Field>
                    <label style={{color:"#F2E6DF", fontFamily:"Verdana"}}>Precio: </label>
                    <input 
                        placeholder='Precio'
                        type='text'
                        name='precio'
                        {...register('precio', 
                        {
                            required: true,
                        })
                        }
                    />
                </Form.Field>
                
                

                <div>

                <Button type='submit' style={{color:'#A65625'}}>Enviar Datos</Button>


                </div>
            </Form>
        </div>

    )
    
}


export default AdminBebidas;