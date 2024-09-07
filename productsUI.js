const products = [
    { id: 1, name: "Refrigerator", price: 1500, category: "Appliances" },
    { id: 2, name: "Smartphone", price: 900, category: "Electronics" },
    { id: 3, name: "Microwave", price: 300, category: "Appliances" },
    { id: 4, name: "Laptop", price: 2000, category: "Electronics" },
    { id: 5, name: "Washing Machine", price: 1200, category: "Appliances" },
    { id: 6, name: "Vacuum Cleaner", price: 800, category: "Appliances" },
    { id: 7, name: "Air Conditioner", price: 2500, category: "Appliances" }
];

function fetchAndDisplayProducts() {
    // Clear the table body first
    const tableBody = document.querySelector("#productsTable tbody");
    tableBody.innerHTML = '';

    // Populate the table with product data
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>
        `;
        tableBody.appendChild(row);
    });
}
