import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer my-5 py-5">
        <hr></hr>
        <Row>
            <Col>
                <div className="container text-center">
                    <p1> Bistro La Milche. Todos los derechos reservados.</p1>
                </div>
            </Col>
            <Col>
                <Row>
                    <Col>
                    <Link to="https://www.instagram.com/?hl=es-la"><img src='/img/instagram.png' width="50px"></img></Link>
                    </Col>
                    <Col>
                    <Link to="https://www.rappi.com.ar/"><img src='/img/rappi.png' width="50px"></img></Link>
                    </Col>
                    <Col>
                    <Link to="https://www.pedidosya.com/"><img src='/img/pedidosya.png' width="50px"></img></Link>
                    </Col>
                    <Col>
                    <Link to="https://web.whatsapp.com/"><img src='/img/whatsapp.png' width="50px"></img></Link>
                    </Col>
                    <Col>
                    <Link to="/MenuEstandarAdmin"><p1 style={{color:"#593C2C", fontFamily:"Verdana"}}>admin</p1></Link>
                    </Col>
                    <Col>
                    <Link to="/MenuVeggieAdmin"><p1 style={{color:"#593C2C", fontFamily:"Verdana"}}>admin</p1></Link>
                    </Col>
                    <Col>
                    <Link to="/PostresAdmin"><p1 style={{color:"#593C2C", fontFamily:"Verdana"}}>admin</p1></Link>
                    </Col>
                    <Col>
                    <Link to="/BebidasAdmin"><p1 style={{color:"#593C2C", fontFamily:"Verdana"}}>admin</p1></Link>
                    </Col>
                </Row>
            </Col>
        </Row>
    </footer>
  );
};

export default Footer;