import styled from "styled-components";
import { MainLayout } from "./styles/Layout";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import Form from "./Components/Form/Form";

function App() {
  return (
    <AppStyled className="App">
      <Orb/>
        <MainLayout>
          <Navigation/>
        </MainLayout>
        <Form/>
        
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height:100vh;
  position:relative;
`;

export default App;
