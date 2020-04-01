export default class Stock {
    constructor(data) {
        this.symbol = data.symbol
        this.price = data.price
    }

    get Template() {
        return /*html*/ `
    <div class="col-12">
  <!--   <img src="${this.img}" alt=""> -->
        <h5 class="text-capitalize">${this.symbol}</h5>
        <h5 class="text-capitalize">${this.price}</h5>
 <!--   <p>Weight: ${this.weight}</p> -->
        <button class="btn btn-block btn-danger" onclick="app.pokemonController.buyStock()">Buy!</button>
    </div>
        `
    }
    }