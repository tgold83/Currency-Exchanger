import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {CurrencyExchangeService} from './currency-exchange-service.js';
import {printElements, printError} from './ui-logic.js';

// Business Logic

export function currencyExchange(money, convertType) {
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