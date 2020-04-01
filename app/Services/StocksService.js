import store from "../store.js";
import Stock from "../Models/Stock.js";

// @ts-ignore
let _stockApi = axios.create({
  baseURL:'https://financialmodelingprep.com/api/v3/stock/real-time-price/AAPL,FB,GOOG,AMZN,T,VZ,GM,F,NFLX,MSFT,EA',
  timeout: 15000
})

class ValuesService {
  getStocks(){
    _stockApi.get()
    .then(res => {
      console.log(res.data.companiesPriceList)
      let stocks = res.data.companiesPriceList.map (rawStockData => new Stock (rawStockData))
      store.commit('stocks', stocks)
      console.log(store.State)

    })
    .catch (err => console.error(err))
  }

  getDetails(stockTicker) {
    _stockApi.get(stockTicker)
    .then(res => {
      console.log("stockPrice", res.data.companiesPriceList.price)
      let stockPrice = res.data.data.companiesPriceList.price.map(rawPriceData => new Stock (rawPriceData))
      store.commit('stocks', stockPrice)
      })
      .catch(err => console.error(err))
    }

  constructor() {
    console.log("stock service works")
    this.getStocks()
  }

}

const service = new ValuesService();
export default service;
