import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {


const [inputNome, setInputNome] = useState("")
const [inputFotoPerfil, setInputFotoPerfil] = useState("")
const [inputPublicacao, setInputPublicacao] = useState("")

    const [postInsta, setPostInsta] = useState ([
    {nomeUsuario: 'paulinha', fotoUsuario: 'https://picsum.photos/50/50', fotoPost: 'https://picsum.photos/200/150'},
    {nomeUsuario: 'zezinha', fotoUsuario: 'https://picsum.photos/70/70', fotoPost: 'https://picsum.photos/220/120'},
    {nomeUsuario: 'junior', fotoUsuario: 'https://picsum.photos/80/80', fotoPost: 'https://picsum.photos/210/110'}
])

  const mapear = postObjeto.map((item, index) => {
    return(
      <post key={index}
        nomeUsuario = {item.nomeUsuario}
        fotoUsuario = {item.fotoUsuario}
        fotoPost = {item.fotoPost}
      />
    )
  })

  const handleInputNome = (e) => {
    setInputNome(e.target.value)
  }
  //
  const handleinputFotoPerfil = (e) => {
    setInputFotoPerfil(e.target.value)
  }
  //
  const handleinputPublicacao = (e) => {
    setInputPublicacao(e.target.value)
  }
  
  
  // adicionar item
  const addPost = (e) => {
    e.preventDefault()
  
    setPostInsta([...postsInsta,{nomeUsuario:inputNome, fotoUsuario:inputFotoPerfil,fotoPost:inputPublicacao}])
    setInputNome("")
    setInputFotoPerfil("")
    setInputPublicacao("")
  
  }
  

return(
  <MainContainer>
    <div>

      <label>Nome Usuario:</label>
      <input
        placeholder='Insira seu nome !'
        value={inputNome}
        onChange={handleInputNome}
      />
      <label>Foto Perfil:</label>
      <input
        placeholder='Insira seu nome !'
        value={inputFotoPerfil}
        onChange={handleinputFotoPerfil}
      />
      <label> Foto Publicação :</label>
      <input
        placeholder='Insira seu nome !'
        value={inputPublicacao}
        onChange={handleinputPublicacao}
      />
      <button onClick={addPost}>Adicionar</button>
    </div>
  </MainContainer>
)

}


export default App;
