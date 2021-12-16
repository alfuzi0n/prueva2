import Mensaje from './Componentes/Intro';
import './App.css';



function App() {

  

  return (

    <div className="App">
     <Mensaje color='red'title='Wertyland' />
    <Mensaje color='blue' title='estamos trabajando en un curso de react' />
  

    </div>
  );
}

export default App;
