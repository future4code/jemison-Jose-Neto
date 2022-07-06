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

  const postObjeto = [
  {
    nomeUsuario: 'paulinha',
    fotoUsuario: 'https://picsum.photos/50/50',
    fotoPost: 'https://picsum.photos/200/150'
  },
  {
    nomeUsuario: 'zezinha',
    fotoUsuario: 'https://picsum.photos/70/70',
    fotoPost: 'https://picsum.photos/220/120'
  },
  {
    nomeUsuario: 'junior',
    fotoUsuario: 'https://picsum.photos/80/80',
    fotoPost: 'https://picsum.photos/210/110'
  }
]

return(
  <MainContainer>
          <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />

          <Post
            nomeUsuario={'zezinha'}
            fotoUsuario={'https://picsum.photos/70/70'}
            fotoPost={'https://picsum.photos/220/120'}
          />

          <Post
            nomeUsuario={'junior'}
            fotoUsuario={'https://picsum.photos/80/80'}
            fotoPost={'https://picsum.photos/210/110'}
          />
  </MainContainer>
)

}


export default App;
