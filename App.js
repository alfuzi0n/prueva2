import Mensaje from './Componentes/Intro';
import './App.css';



function App() {

  

  return (

    <div className="App">
     <Mensaje color='red'title='Wertyland soy gato y me la como' />
    <Mensaje color='blue' title='estamos trabajando en un curso de react aguarde un momento nuestros operadores estan ocupados intenten nuevamente luego muchas gracias.' />
  

    </div>
  );
}

export default App;
