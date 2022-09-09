import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchangeService from './currency-exchange-service.js';

// Business Logic

function currencyExchange(money, convertType) {
  CurrencyExchangeService.currencyExchange()
    .then(function(response) {
      if (response.result === "success") {
        printElements(response, money, convertType);
      } else {
        printError(error, money);
      }
    });
}

// UI Logic

function printError(error, money) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the currency exchange data for ${money}: ${error}`;
}

function printElements(response, money, convertType) { 
  let convertType = 
  document.querySelector('#showResponse').innerText = `The exchange rate for ${money}USD is ${response.conversion_rates.USD}.
  `; 
}

function handleFormSubmission(event) {
  event.preventDefault();
  const money = document.querySelector('#money').value;
  const convertType = document.querySelector('#convertType').innerText;
  currencyExchange(money, convertType);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});
