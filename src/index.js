import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchangeService from './currency-exchange-service.js';

// Business Logic

function currencyExchange(money) {
  CurrencyExchangeService.currencyExchange(money)
    .then(function(response) {
      if (response.bikes) {
        printElements(response, money);
      } else {
        printError(response, money);
      }
    });
}

// UI Logic

function printError(error, money) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the stolen bike data for ${money}: ${error}`;
}

function printElements(response) { 
  // bikes[1] + response.bikes[1]);

  // let bikeArray = response.bikes;
  // for (let i = 0; i < bikeArray.length; i ++) {
  //   let bike = document.createElement("p");
  //   bike.innerText = bikeArray[i]["frame_model"];
  //   document.querySelector('#showResponse').append(bike); 
  // }  
}

function handleFormSubmission(event) {
  event.preventDefault();
  // const money = document.querySelector('#money').value;
  // // document.querySelector('#money').value = null;
  // stolenBike(money);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});
