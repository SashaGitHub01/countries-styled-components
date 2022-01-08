import react, { useEffect } from "react";
import Header from "./components/Header/Header";
import styled from 'styled-components';
import { Container } from "./components/Container/Container";
import AppRouter from "./components/AppRouter";

const Main = styled.main`
padding: 2.5rem 0;

@media (min-width:767px) {
   padding: 4rem 0;
}
`
const Content = styled.div`
`

function App() {

   return (
      <>
         <Header />
         <Main>
            <Container>
               <Content>
                  <AppRouter />
               </Content>
            </Container>
         </Main>
      </>
   );
}

export default App;
