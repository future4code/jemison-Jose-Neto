import './App.css';
import React, {useState} from 'react';
import{DivCentral,MsgInicial} from './style'

function App() {

  const[inputRemetente ,setInputRemetente] = useState('');
  const[inputMensagem,setInputMensagem] = useState('');
  const[primeiraMensagem,setPrimeiraMensagem] = useState ([{nome: "Chat", mensagem: "Olá, digite sua mensagem" }])

  const handleInputRemetente = (e) =>{
    setInputRemetente(e.target.value)
  }

  const handleInputMensagem = (e) =>{
    setInputMensagem(e.target.value)
  }

  const addMensagem = (e) =>{
    e.preventDefault();

    setPrimeiraMensagem ([...primeiraMensagem, {nome:inputRemetente, mensagem:inputMensagem}])
    setInputMensagem("")
    setInputRemetente("")
  }


  const mensagensMapeada = primeiraMensagem.map((pessoa, index) => {
    return(
        <div key={index}>
            <p>{pessoa.nome}</p>
            <p>{pessoa.mensagem}</p>
        </div>
    )
})


  return (
    <DivCentral>
      
      <MsgInicial>{mensagensMapeada}</MsgInicial>
      
      <label/>
      <MsgInicial>
      <input
        placeholder='Remetente' 
        id='remetente'
        value={inputRemetente}
        onChange={handleInputRemetente}
      />
      </MsgInicial>
      <label/>
      <MsgInicial>
      <input
        placeholder='Escreva sua mensagem'
        id='mensagem'
        value={inputMensagem}
        onChange={handleInputMensagem}
      />
      </MsgInicial>
      <button onClick={addMensagem}>Enviar</button>
      
    </DivCentral>



)
}

export default App;