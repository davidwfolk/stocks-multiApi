
import StocksController from "./Controllers/StocksController.js";

class App {
  stocksController = new StocksController();
}

window["app"] = new App();
