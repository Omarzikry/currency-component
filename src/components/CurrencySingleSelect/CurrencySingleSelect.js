import styled from "styled-components";

const SCheckbox = styled.label`
  background-color: #e5e5e5;
  padding: 0.5rem 0.7rem;
  margin: 1rem;
  cursor: pointer;
  width: 4rem;
  color: #34435e;
`;

const CurrencySingleSelect = (props) => {
  const { id, name, handleChange, checked } = props;

  return (
    <SCheckbox htmlFor={id}>
      <input
        id={id}
        name={name}
        type="checkbox"
        onChange={handleChange}
        checked={checked}
      />
      {name}
    </SCheckbox>
  );
};

export default CurrencySingleSelect;
