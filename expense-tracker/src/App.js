import styled from "styled-components";
import { MainLayout } from "./styles/Layout";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <AppStyled className="App">
      <Orb>
        <MainLayout>
          <Navigation/>
        </MainLayout>
      </Orb>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height:100vh;
`;

export default App;
