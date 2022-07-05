
import './App.css';

function App() {
  return (
    <div className='divPai'>
      <header>aqui vai uma img</header>

      <Main>
        <Nav><p>nav direita</p></Nav>
        <NavMeio>
          <label>remetente</label>
          <input type='text' id='name' name='name'></input>
          <label>mensagem</label>
          <input type='text' id='msg' name='msg'></input>
          <button>enviar mensagem</button>
        </NavMeio>
      </Main>
    </div>
  );
}

export default App;
