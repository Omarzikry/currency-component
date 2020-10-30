import styled from "styled-components";

const SCurrencySingleInput = styled.div`
  text-align: center;
  margin: 1rem;
  background-color: #e5e5e5;
  padding: 0.5rem 0.7rem;
  border-radius: 0.4rem;
  position: relative;
  cursor: pointer;
`;

const SCloseIcon = styled.div`
  position: absolute;
  background-color: black;
  color: white;
  font-weight: bold;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1em;
  transform: translate(30%, -30%);
  cursor: pointer;
  border: 2px solid black;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: transparent;
    color: black;
  }
`;

const CurrencySingleItem = (props) => {
  const { click, currencyName } = props;
  return (
    <SCurrencySingleInput onClick={click}>
      <SCloseIcon>
        <span>x</span>
      </SCloseIcon>
      <div>{currencyName}</div>
    </SCurrencySingleInput>
  );
};

export default CurrencySingleItem;
