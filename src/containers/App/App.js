import styled from "styled-components";
import CurrencySelect from "../CurrencySelect/CurrencySelect";

const SApp = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <SApp>
      <CurrencySelect />
    </SApp>
  );
};

export default App;
