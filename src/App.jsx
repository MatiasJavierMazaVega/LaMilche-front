import 'semantic-ui-css/semantic.min.css'
import Nav from './Componentes/Nav';
import Home from './Componentes/Home';
import MenuEstandar from './Componentes/MenuEstandar';
import MenuVeggie from './Componentes/MenuVeggie';
import Postres from './Componentes/Postres';
import Bebidas from './Componentes/Bebidas';

import AdminEstandar from './Componentes/AdminEstandar';
import AdminVeggie from './Componentes/AdminVeggie';
import AdminPostres from './Componentes/AdminPostre';
import AdminBebidas from './Componentes/AdminBebida';

import Footer from './Componentes/Footer';

import { Routes, Route } from 'react-router-dom';

function App() {
  return(
    
    <div style={{backgroundImage:`url("img/fondo.png")`, backgroundRepeat: "repeat", backgroundSize:"cover", backgroundPosition: "center"}}>
      
      <Nav />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/MenuEstandar" element={ <MenuEstandar />} />
        <Route path="/MenuVeggie" element={ <MenuVeggie />} />
        <Route path="/Postres" element={ <Postres />} />
        <Route path="/Bebidas" element={ <Bebidas />} />        
        <Route path="/MenuEstandarAdmin" element={ <AdminEstandar />} />
        <Route path="/MenuVeggieAdmin" element={ <AdminVeggie />} />
        <Route path="/PostresAdmin" element={ <AdminPostres />} />
        <Route path="/BebidasAdmin" element={ <AdminBebidas />} />
      </Routes>
      <Footer />
      </div>
    
  )
}

export default App;
