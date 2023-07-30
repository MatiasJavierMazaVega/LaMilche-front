import { Form, Button } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import axios from 'axios';

const AdminPostres = () =>{


    const URL_P = import.meta.env.VITE_URL_POSTRE;


   

    
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: { 
            producto: '',
            imagen: '',
            precio: ''
        }
    });
    


    const onSubmitPostre = (datos, e) =>{
        e.preventDefault();
        try {
            console.log(datos);
            axios.post(URL_P, datos)
            e.target.reset();
            console.log(URL_P);
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
            <h1 style={{color:"#F2E6DF", fontFamily:"Verdana", textAlign:"center"}}>Formulario Postres</h1>
            </div>
            <Form onSubmit={handleSubmit(onSubmitPostre)}>
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
                
                

                <div className='centrar'>

                <Button type='submit' style={{color:'#A65625'}}>Enviar Datos</Button>


                </div>
            </Form>
        </div>


    )
    
}


export default AdminPostres;