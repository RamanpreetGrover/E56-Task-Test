const products = [
    { id: 1, name: "Refrigerator", price: 1500, category: "Appliances" },
    { id: 2, name: "Smartphone", price: 900, category: "Electronics" },
    { id: 3, name: "Microwave", price: 300, category: "Appliances" },
    { id: 4, name: "Laptop", price: 2000, category: "Electronics" },
    { id: 5, name: "Washing Machine", price: 1200, category: "Appliances" },
    { id: 6, name: "Vacuum Cleaner", price: 800, category: "Appliances" },
    { id: 7, name: "Air Conditioner", price: 2500, category: "Appliances" }
];

async function fetchProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products); // Simulating a successful API response after 1 second
        }, 1000);
    });
}

async function processProducts() {
    try {
        const fetchedProducts = await fetchProducts();

        const filtered = fetchedProducts.filter(p => p.price > 1000 && p.category === "Appliances");
        console.log("Filtered:", filtered);

        const mapped = fetchedProducts.map(p => [p.name, p.category]);
        console.log("Mapped:", mapped);

        const reduced = fetchedProducts.reduce((acc, p) => {
            acc[p.id] = { name: p.name, price: p.price, category: p.category };
            return acc;
        }, {});
        console.log("Reduced:", reduced);

        const copySpread = [
            ...fetchedProducts.filter(p => p.price <= 1000),
            ...fetchedProducts.filter(p => p.price > 1000)
        ];
        console.log("Copy Spread:", copySpread);

        const discountMap = fetchedProducts.map(p => ({
            ...p,
            hasDiscount: p.price > 2000
        }));
        console.log("Discount Map:", discountMap);

    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

processProducts();
