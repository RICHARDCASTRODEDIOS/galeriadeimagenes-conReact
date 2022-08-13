import './App.css';
import Header from './components/Header'; // importando el Header
import 'bootstrap/dist/css/bootstrap.min.css'; //importación de bootstrap
import Tarjeta from './components/Tarjeta'; // importando imagenes 
import Mototorito from './assets/img/Mototorito.jpg';
import Goku from './assets/img/Goku.jpg';
import Furgoneta from './assets/img/Furgoneta.webp';
import Footer from './components/Footer'; // pie de pagina 


function App() {
  return (
    <div className='container-principal'>
      <div>
      <Header titulo="Galerias de Imagines con React"/> {/*Mostrando el componente Header*/}
      <Tarjeta titulo="Moto" descripcion="Ultima gama" imagen={Mototorito}/> {/*Mostrando el componente Tarjeta*/}
      <Tarjeta titulo="Goku" descripcion="En sus inicios" imagen={Goku}/>
      <Tarjeta titulo="Furgoneta" descripcion="Para pasear" imagen={Furgoneta}/>
      <Footer footer="Este proyecto fue hecho por Richard Castro"/> {/*Mostrando el componente Footer*/}
      </div>
    </div>
  );
}

export default App;
