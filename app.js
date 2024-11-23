var form = document.getElementById("addProductForm");
var productData = document.getElementById('productTableBody');
// Array of my prducts data
var products = [
    { name: "Fishbowl Inventory", quantity: "ML", price: 3000 },
    { name: "ASAP Systems", quantity: "SML", price: 3000 },
    { name: "Zoho Inventory", quantity: "SML", price: 1000 },
    { name: "Veeqo", quantity: "SM", price: 1000 },
    { name: "ZapERP", quantity: "SML", price: 2000 },
    { name: "Fishbowl Inventory", quantity: "ML", price: 3000 },
    { name: "ASAP Systems", quantity: "SML", price: 3000 },
    { name: "Zoho Inventory", quantity: "SML", price: 1000 },
    { name: "Veeqo", quantity: "SM", price: 1000 },
    { name: "ZapERP", quantity: "SML", price: 2000 },
    { name: "Fishbowl Inventory", quantity: "ML", price: 3000 },
    { name: "ASAP Systems", quantity: "SML", price: 3000 },
    { name: "Zoho Inventory", quantity: "SML", price: 1000 },
    { name: "Veeqo", quantity: "SM", price: 1000 },
    { name: "ZapERP", quantity: "SML", price: 2000 },
];
function displayProducts() {
    products.forEach(function (product) { return addProductRow(product); });
}
function addProductRow(product) {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.textContent = product.name;
    var companySizeCell = document.createElement("td");
    companySizeCell.textContent = product.quantity;
    var priceCell = document.createElement("td");
    priceCell.innerHTML = "<strong id=\"money\">".concat(product.price.toString(), "$</strong>");
    // Add cells to the row
    row.appendChild(nameCell);
    row.appendChild(companySizeCell);
    row.appendChild(priceCell);
    // Append the row to the table body
    productData.appendChild(row);
}
// Event listener for the form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh
    // Get the values from input fields
    var nameInput = document.getElementById("productName");
    var companySizeInput = document.getElementById("companySize");
    var priceInput = document.getElementById("productPrice");
    // Create a new product object
    var newProduct = {
        name: nameInput.value,
        quantity: companySizeInput.value,
        price: Number(priceInput.value),
    };
    // Add the product to the array (optional)
    products.push(newProduct);
    // Add the product row to the table
    addProductRow(newProduct);
    // Clear the form fields after adding the product
    form.reset();
});
window.onload = displayProducts;
// Function to display products in table
// function displayProducts(product: Product) {
//   const tableBody = document.getElementById("productTableBody") as HTMLTableSectionElement;
//   products.forEach((product) => {
//     const row = document.createElement("tr");
//     const nameCell = document.createElement("td");
//     nameCell.textContent = product.name;
//     const quantityCell = document.createElement("td");
//     quantityCell.textContent = product.quantity;
//     const priceCell = document.createElement("td");
//     priceCell.innerHTML = `<strong id="money">${product.price}$</strong>`;
//     row.appendChild(nameCell);
//     row.appendChild(quantityCell);
//     row.appendChild(priceCell);
//     tableBody.appendChild(row);
//   });
// }
// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // Prevent page refresh
//   // Get the values from input fields
//   const nameInput = document.getElementById("productName") as HTMLInputElement;
//   const companySizeInput = document.getElementById("companySize") as HTMLInputElement;
//   const priceInput = document.getElementById("productPrice") as HTMLInputElement;
//   // Create a new product object
//   const newProduct: Product = {
//     name: nameInput.value,
//     quantity: companySizeInput.value,
//     price: Number(priceInput.value),
//   };
//   // Add the product to the array (optional)
//   products.push(newProduct);
//   // Add the product row to the table
//   displayProducts(newProduct);
//   // Clear the form fields after adding the product
//   form.reset();
// });
