import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <Container className='my-5'>
            <Row>
            <Col><h1 style={{color:"#F2E6DF", fontFamily:"Verdana"}}>Bienvenido a nuestro bistró en La Matanza, Buenos Aires. Disfruta de auténticos sabores caseros y la calidez familiar. Nuestro menú sencillo y delicioso te llevará a un viaje culinario. Aquí, cada comensal es parte de nuestra familia.</h1></Col>
            <Col><img src="img/logowhite.png" height="350px"></img></Col>
            <Col><h1 style={{color:"#F2E6DF", fontFamily:"Verdana", textAlign:"right"}}>Comparte momentos especiales con tus seres queridos en un ambiente relajado. Te esperamos con los brazos abiertos para brindarte una experiencia gastronómica inolvidable. ¡Ven y sé parte de nuestra historia!</h1></Col>
            </Row>
            <Row>
            <h1 className="mt-5" style={{color:"#F2E6DF", fontFamily:"Verdana"}}>Podés revisar nuestro menú en las pestañas superiores, y podés pedir nuestro delivery desde Rappi, Pedidos Ya o usando mercado pago a través de nuestro whatsapp. ¡Buen Provecho!</h1>
            </Row>
        </Container>
    )
}

export default Home;