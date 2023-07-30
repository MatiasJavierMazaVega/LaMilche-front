import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';


const Postres = () =>{

    const DATOS = import.meta.env.VITE_POSTRE

    console.log(DATOS);

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        axios.get(DATOS)
        .then((res) => {
            console.log(res.data);
            setApiData(res.data.postre)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])







    console.log(apiData);

    return (
      <Container fluid>
        <div className="container m-5">
            <div className="text-center m-5">
                <h1 style={{color:"#F2E6DF", fontFamily:"Verdana", textAlign:"center"}}>
                    Postres
                </h1>
            </div>
            <div class="album py-5">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {apiData.map((data)=>{
        return (
        <div class="col">
          <div class="card text-bg-dark shadow-sm">
          <img src={data.imagen} class="card-img-top" width="480px" height="260px" xmlns="http://www.w3.org/2000/svg" role="img"  alt="...">
          </img>
            <div class="card-body">
              <p class="card-text">{data.producto}{data.precio}</p>
            </div>
          </div>
        </div> )  })}
        </div> 
        </div>
        </div>

        </div>
        </Container>
    )
}

export default Postres;