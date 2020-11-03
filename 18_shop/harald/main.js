let products = [
    { name: 'Socks', price: 3.99, amount: 0 },
    { name: 'Hat', price: 29.99, amount: 0 },
    { name: 'Juice', price: 0.99, amount: 0 },
    { name: 'Shirt', price: 6.99, amount: 0 },
    { name: 'Ties', price: 9.99, amount: 0 }
      // feel free to add your own :)
  ];
  
  let shopElement = document.getElementById("shop");
  let priceElement = document.getElementById("totalPrice");
  let searchElement = document.getElementById("search");
  
  searchElement.oninput = render
  
  function renderProduct(product) {
    let productElement = document.createElement("div");
    productElement.textContent = product.name + ": " + product.price;
    
    let inputElement = document.createElement("input");
    inputElement.type = "number";
    inputElement.value = product.amount;
    inputElement.min = 0;
    inputElement.oninput = function() {
      // console.log("input changed, new amount: " + inputElement.value);
      product.amount = Number(inputElement.value);
      renderTotalCost();
    };
    productElement.appendChild(inputElement);
    
    shopElement.appendChild(productElement);  }  
  
  
  function render() {
    
    shopElement.textContent = "";
    
    for (let i = 0; i < products.length; i++) {  
      let searchTerm = searchElement.value;
      let productName = products[i].name;
      if (productName.startsWith(searchTerm)) {
        renderProduct(products[i]);
      }
    }
  }
  render();
  
  function renderTotalCost() {
    let sum = 0;
  
    let fee = 5.99;
    
    for (let i = 0; i < products.length; i++) {
      let price = products[i].price;
      let amount = products[i].amount;
      let totalPrice = price * amount;
      sum += totalPrice;
    }
  
    if (sum > 0 && sum < 40) {
      sum += fee;
    }
    
    priceElement.textContent = "Total price: " + sum.toFixed(2);  
  }
  
  renderTotalCost();