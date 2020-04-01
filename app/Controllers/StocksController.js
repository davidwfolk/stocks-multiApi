import StockService from "../Services/StocksService.js";
import store from "../store.js";
import Stock from "../Models/Stock.js";

//Private
function _draw() {
  let stocks = store.State.stocks;
  console.log(stocks);
  let template = ''
  stocks.forEach(stock => {
    template += `<button class="btn btn-primary m-2 text-capitalize text-center" onclick="app.stocksController.getDetails('${stock.symbol}')">${stock.symbol}</button>`
  })
  document.getElementById("stock-symbol").innerHTML = template
  console.log(stocks);
}

function _drawDetails() {
  let stockTicker = store.State.activeStocks;
  let template = ''
  // stockTicker.forEach(stockPrice => template += stockPrice.Template)
  document.getElementById("stock-details").innerHTML = store.State.activeStocks
  console.log(store.State)
}

//Public
export default class StocksController {
  constructor() {
    store.subscribe("stocks", _draw);
    store.subscribe("stocks", _drawDetails)
  }
}
