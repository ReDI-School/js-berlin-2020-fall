let allItems = [];

function addItem() {
    let input = document.getElementById('myInput');
    allItems.push(input.value);
    input.value = "";
    
    let displayDiv = document.getElementById('displayText');
    displayDiv.textContent = allItems;
}