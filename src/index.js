import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchangeService from './currency-exchange-service.js';

// Business Logic

function currencyExchange(money, convertType) {
  CurrencyExchangeService.currencyExchange()
    .then(function(response) {
      if (response.result === "success" && response.conversion_rates[convertType]) {
        printElements(response, money, convertType);
      } else if (response.result === "success") {
        printError("Error: The currency in question doesn't exist.", money);
      } else {
        printError(response, money);
      }
    });
}

// UI Logic

function printError(response, money) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the currency exchange data for ${money} USD: 
  ${response}`;
}

function printElements(response, money, convertType) { 
  document.querySelector('#showResponse').innerText = `The exchange rate for ${money} USD is ${(response.conversion_rates[convertType] * money).toFixed(2)} ${convertType}.`; 
}

function handleFormSubmission(event) {
  event.preventDefault();
  const money = document.querySelector('#money').value;
  const convertType = document.querySelector('#convertMoney').value;
  currencyExchange(money, convertType);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});
