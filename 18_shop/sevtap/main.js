const items = [
  { name: "Socks", price: 0.99, amount: 0 },
  { name: "Hat", price: 3.99, amount: 0 },
  { name: "Soho", price: 10, amount: 0 }
];
const itemsList = document.getElementById("items");
const total = document.getElementById("total");
const searchItems = document.getElementById("search-items");

populateList(items, itemsList);
populateSum(items, total);

function populateList(products = [], productList) {
  productList.innerHTML = products
    .map((product, i) => {
      return `<li>
                <label for="item${i}">${product.name},${product.price}</label>
                <input type="number" data-index=${i} id="item${i}" value="${product.amount}" min="0"/>
              </li>`;
    })
    .join("");
}

itemsList.addEventListener("input", changeAmount);

function changeAmount(e) {
  const el = e.target;
  const index = el.dataset.index;
  const amount = el.value;
  if (amount === "") return;

  items[index].amount = parseInt(amount);

  // console.table(items);
  populateSum(items, total);
}

function populateSum(products = [], total) {
  total.innerHTML = products
    .map((product) => {
      return product.price * product.amount;
    })
    .reduce((acc, value) => {
      return acc + value;
    })
    .toFixed(2);
}

searchItems.addEventListener("submit", search);

function search(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;

  const selectedItems = items.filter((item) => {
    const pattern = new RegExp(text, "gi");
    return pattern.test(item.name);
  });
  // console.table(selectedItems);
  populateList(selectedItems, itemsList);
}

