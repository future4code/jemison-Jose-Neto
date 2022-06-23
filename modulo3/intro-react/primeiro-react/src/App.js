
import './App.css';
import imagem from './img/img-site.png'

function App() {

  const titulo = 'Olá! Eu sou Neto!'
  const abrirMensagem =()=>{
    alert('Boa noite! Vc clicou no botão')
  }

  return (

    <div className="App">
      
      <h1>{titulo}</h1>
      <img src={imagem} className='logo' alt='logo labenu' />
      <p>Este é meu primeiro React</p>
      <button onClick={abrirMensagem}>Aperte este botão</button>


    </div>
  );
}

export default App;
