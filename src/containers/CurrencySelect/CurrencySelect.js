import styled from "styled-components";
import { useState } from "react";
import CurrencySingleSelect from "../../components/CurrencySingleSelect/CurrencySingleSelect";
import CurrencySingleItem from "../../components/CurrencySingleItem/CurrencySingleItem";

const SCurrencySelectContainer = styled.div`
  padding: 1rem;
  border: 1px solid black;
  max-width: 25rem;
  box-shadow: 0px 0px 55px 7px rgba(0, 0, 0, 0.13);
`;

const SCurrencySelectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const CurrencySelect = (props) => {
  const [currencies] = useState([
    { id: 1, name: "EUR" },
    { id: 2, name: "EGP" },
    { id: 3, name: "USD" },
    { id: 4, name: "PLN" },
    { id: 5, name: "RUB" },
    { id: 6, name: "GBP" },
    { id: 7, name: "DZD" },
    { id: 8, name: "AUD" },
    { id: 9, name: "CZK" },
  ]);

  const [selectedCurrencies, setSelectedCurrencies] = useState([]);
  const [checkboxValues, setCheckboxValues] = useState([]);

  // handle currency change
  const currencyChangeHandler = (e, i) => {
    const selectedCurrency = currencies.filter(
      (currency) => currency.name === e.target.name
    );

    // check if checked is true in order to add or remove the item
    if (e.target.checked) {
      setSelectedCurrencies([...selectedCurrencies, selectedCurrency[0]]);
    } else {
      const currenciesSelected = selectedCurrencies.filter(
        (currency) => currency.name !== e.target.name
      );
      setSelectedCurrencies(currenciesSelected);
    }

    let value = checkboxValues.slice();
    value[i] = e.target.checked;
    setCheckboxValues(value);
  };

  const unCheck = (i) => {
    let value = checkboxValues.slice();
    value[i] = !value[i];
    setCheckboxValues(value);
  };

  // handle currency item click to uncheck the currency checkbox and remove it from selected currencies

  const currencyItemClickHandler = (selectedCurrency) => {
    const currenciesSelected = selectedCurrencies.filter(
      (currency) => currency.name !== selectedCurrency.name
    );
    setSelectedCurrencies(currenciesSelected);
    currencies.map((currency, i) => {
      if (currency.name === selectedCurrency.name) {
        unCheck(i);
      }
    });
  };

  return (
    <SCurrencySelectContainer>
      <SCurrencySelectGrid>
        {selectedCurrencies.map((selectedCurrency) => {
          return (
            <CurrencySingleItem
              click={() => {
                currencyItemClickHandler(selectedCurrency);
              }}
              key={selectedCurrency.id}
              currencyName={selectedCurrency.name}
            />
          );
        })}
      </SCurrencySelectGrid>

      <SCurrencySelectGrid>
        {currencies.map((currency, i) => {
          const { name } = currency;

          return (
            <CurrencySingleSelect
              handleChange={(e) => {
                currencyChangeHandler(e, i);
              }}
              name={name}
              checked={checkboxValues[i]}
              key={i}
            />
          );
        })}
      </SCurrencySelectGrid>
    </SCurrencySelectContainer>
  );
};

export default CurrencySelect;
