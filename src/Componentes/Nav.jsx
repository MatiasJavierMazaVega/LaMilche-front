import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Navegacion = () => {
    return (
        <header className="header">
        <div className="container text-center py-2">
          <Row className="justify-content-md-center my-4"><Col><img src="img/type.png" width="600px"></img></Col></Row>
          <hr></hr>
          <Row>
          <Col><div className="m-1"><Link to="/"><img src="/public/img/botónlanding.png" alt="..." width="200px"></img></Link></div></Col>
          <Col><div className="m-1"><Link to="/MenuEstandar"><img src="../../public/img/botónestándar.png" alt="..." width="200px"></img></Link></div></Col>
          <Col><div className="m-1"><Link to="/MenuVeggie"><img src="../../public/img/botónveggie.png" alt="..." width="200px"></img></Link></div></Col>
          <Col><div className="m-1"><Link to="/Postres"><img src="../../public/img/botónpostres.png" alt="..." width="200px"></img></Link></div></Col>
          <Col><div className="m-1"><Link to="/Bebidas"><img src="../../public/img/botónbebidas.png" alt="..." width="200px"></img></Link></div></Col>
          </Row>
          <hr></hr>
        </div>
      </header>
    );
};

export default Navegacion;