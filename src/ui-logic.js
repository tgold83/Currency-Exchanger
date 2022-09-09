import {currencyExchange} from "./index.js";

// UI Logic

export function printError(response, money) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the currency exchange data for ${money} USD: 
  ${response}`;
}

export function printElements(response, money, convertType) { 
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
