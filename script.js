// ==========================================
// 30 PRODUCTS
// ==========================================

const products = [

    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 1999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
        description: "High-quality wireless headphones with clear sound and comfortable design."
    },

    {
        id: 2,
        name: "Smart Watch",
        category: "Electronics",
        price: 2499,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
        description: "Modern smartwatch with a stylish design for everyday use."
    },

    {
        id: 3,
        name: "Running Shoes",
        category: "Fashion",
        price: 1799,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
        description: "Comfortable running shoes suitable for exercise and daily use."
    },

    {
        id: 4,
        name: "Backpack",
        category: "Accessories",
        price: 999,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
        description: "Durable backpack suitable for college, travel and daily use."
    },

    {
        id: 5,
        name: "Sunglasses",
        category: "Fashion",
        price: 799,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
        description: "Stylish sunglasses with a modern frame."
    },

    {
        id: 6,
        name: "Laptop",
        category: "Electronics",
        price: 54999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
        description: "Powerful laptop suitable for students, programming and everyday work."
    },

    {
        id: 7,
        name: "Wireless Keyboard",
        category: "Electronics",
        price: 899,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
        description: "Compact wireless keyboard with comfortable keys."
    },

    {
        id: 8,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 599,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
        description: "Smooth and comfortable wireless mouse for everyday use."
    },

    {
        id: 9,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 1299,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
        description: "Portable Bluetooth speaker with powerful sound."
    },

    {
        id: 10,
        name: "Mobile Phone",
        category: "Electronics",
        price: 15999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
        description: "Modern smartphone with a bright display and powerful performance."
    },

    {
        id: 11,
        name: "Tablet",
        category: "Electronics",
        price: 12999,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600",
        description: "Lightweight tablet suitable for study, entertainment and browsing."
    },

    {
        id: 12,
        name: "Power Bank",
        category: "Electronics",
        price: 999,
        image: "https://images.unsplash.com/photo-1609592424866-1e7e3a6f7a7e?w=600",
        description: "Portable power bank for charging your devices."
    },

    {
        id: 13,
        name: "USB Cable",
        category: "Electronics",
        price: 299,
        image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600",
        description: "Durable charging and data transfer USB cable."
    },

    {
        id: 14,
        name: "Denim Jacket",
        category: "Fashion",
        price: 1999,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
        description: "Classic denim jacket with a comfortable fit."
    },

    {
        id: 15,
        name: "Cotton T-Shirt",
        category: "Fashion",
        price: 599,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
        description: "Comfortable cotton T-shirt for everyday wear."
    },

    {
        id: 16,
        name: "Hoodie",
        category: "Fashion",
        price: 1299,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
        description: "Warm and comfortable hoodie for casual wear."
    },

    {
        id: 17,
        name: "Casual Shirt",
        category: "Fashion",
        price: 899,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600",
        description: "Stylish casual shirt suitable for everyday occasions."
    },

    {
        id: 18,
        name: "Sports Shoes",
        category: "Fashion",
        price: 2299,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600",
        description: "Lightweight sports shoes designed for comfort."
    },

    {
        id: 19,
        name: "Handbag",
        category: "Accessories",
        price: 1499,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
        description: "Elegant handbag suitable for everyday use."
    },

    {
        id: 20,
        name: "Wallet",
        category: "Accessories",
        price: 499,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600",
        description: "Compact wallet with multiple card slots."
    },

    {
        id: 21,
        name: "Travel Bag",
        category: "Accessories",
        price: 1799,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
        description: "Spacious travel bag for short trips and journeys."
    },

    {
        id: 22,
        name: "Cap",
        category: "Accessories",
        price: 399,
        image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600",
        description: "Comfortable casual cap suitable for outdoor activities."
    },

    {
        id: 23,
        name: "Water Bottle",
        category: "Accessories",
        price: 499,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600",
        description: "Reusable water bottle for school, college and travel."
    },

    {
        id: 24,
        name: "Coffee Mug",
        category: "Home",
        price: 299,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600",
        description: "Simple and stylish coffee mug for everyday use."
    },

    {
        id: 25,
        name: "Desk Lamp",
        category: "Home",
        price: 799,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",
        description: "Modern desk lamp suitable for studying and working."
    },

    {
        id: 26,
        name: "Plant Pot",
        category: "Home",
        price: 349,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600",
        description: "Decorative plant pot for home and office spaces."
    },

    {
        id: 27,
        name: "Notebook",
        category: "Stationery",
        price: 199,
        image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5b?w=600",
        description: "Quality notebook suitable for notes and study."
    },

    {
        id: 28,
        name: "Pen Set",
        category: "Stationery",
        price: 149,
        image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=600",
        description: "Smooth writing pen set for students and professionals."
    },

    {
        id: 29,
        name: "Calculator",
        category: "Stationery",
        price: 399,
        image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600",
        description: "Useful calculator for school, college and office work."
    },

    {
        id: 30,
        name: "Study Table",
        category: "Home",
        price: 3999,
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600",
        description: "Simple study table suitable for students and home offices."
    }

];


// ==========================================
// CART
// ==========================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const app = document.getElementById("app");


// ==========================================
// ROUTING
// ==========================================

function router() {

    const hash = window.location.hash || "#home";

    if (hash === "#home") {
        showHome();
    }

    else if (hash === "#products") {
        showProducts();
    }

    else if (hash === "#about") {
        showAbout();
    }

    else if (hash === "#cart") {
        showCart();
    }

    else if (hash.startsWith("#product-")) {

        const id = Number(
            hash.replace("#product-", "")
        );

        showProductDetails(id);
    }

    else {
        showHome();
    }
}

window.addEventListener("hashchange", router);


// ==========================================
// HOME
// ==========================================

function showHome() {

    app.innerHTML = `

        <section class="hero">

            <h1>Welcome to ShopEasy</h1>

            <p>
                Find quality products at affordable prices.
            </p>

            <a href="#products"
               class="primary-button">
                Shop Now
            </a>

        </section>

    `;
}


// ==========================================
// PRODUCTS
// ==========================================

function showProducts() {

    app.innerHTML = `

        <section class="products-page">

            <h1 class="page-title">
                Our Products
            </h1>

            <div class="search-box">

                <input
                    type="text"
                    id="searchInput"
                    placeholder="Search products..."
                >

            </div>

            <div
                class="categories"
                id="categories">
            </div>

            <div
                class="product-grid"
                id="productGrid">
            </div>

        </section>

    `;

    createCategories();

    displayProducts(products);

    document
        .getElementById("searchInput")
        .addEventListener(
            "input",
            searchProducts
        );
}


// ==========================================
// CATEGORIES
// ==========================================

function createCategories() {

    const categories = [
        "All",
        ...new Set(
            products.map(
                product => product.category
            )
        )
    ];

    const container =
        document.getElementById("categories");

    categories.forEach(category => {

        const button =
            document.createElement("button");

        button.textContent = category;

        button.className =
            "category-button";

        if (category === "All") {
            button.classList.add("active");
        }

        button.addEventListener(
            "click",
            function () {

                document
                    .querySelectorAll(
                        ".category-button"
                    )
                    .forEach(btn =>
                        btn.classList.remove(
                            "active"
                        )
                    );

                button.classList.add("active");

                if (category === "All") {

                    displayProducts(products);

                } else {

                    const filtered =
                        products.filter(
                            product =>
                                product.category
                                === category
                        );

                    displayProducts(filtered);
                }
            }
        );

        container.appendChild(button);

    });
}


// ==========================================
// DISPLAY PRODUCTS
// ==========================================

function displayProducts(productList) {

    const grid =
        document.getElementById("productGrid");

    grid.innerHTML = "";

    if (productList.length === 0) {

        grid.innerHTML = `

            <div class="empty">

                <h2>No products found</h2>

                <p>
                    Try another search.
                </p>

            </div>

        `;

        return;
    }

    productList.forEach(product => {

        const card =
            document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                <p class="category">
                    ${product.category}
                </p>

                <p class="price">
                    ₹${product.price.toLocaleString("en-IN")}
                </p>

                <div class="product-buttons">

                    <button
                        class="view-button"
                        onclick="
                            location.hash =
                            '#product-${product.id}'
                        "
                    >
                        View
                    </button>

                    <button
                        class="add-button"
                        onclick="
                            addToCart(${product.id})
                        "
                    >
                        Add to Cart
                    </button>

                </div>

            </div>

        `;

        grid.appendChild(card);

    });
}


// ==========================================
// SEARCH
// ==========================================

function searchProducts(event) {

    const search =
        event.target.value
            .toLowerCase()
            .trim();

    const filtered =
        products.filter(product =>

            product.name
                .toLowerCase()
                .includes(search)

            ||

            product.category
                .toLowerCase()
                .includes(search)
        );

    displayProducts(filtered);
}


// ==========================================
// PRODUCT DETAILS
// ==========================================

function showProductDetails(id) {

    const product =
        products.find(
            product => product.id === id
        );

    if (!product) {

        showHome();

        return;
    }

    app.innerHTML = `

        <section class="details">

            <div>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>

            <div class="details-info">

                <h1>
                    ${product.name}
                </h1>

                <strong>
                    ${product.category}
                </strong>

                <h2>
                    ₹${product.price.toLocaleString("en-IN")}
                </h2>

                <p>
                    ${product.description}
                </p>

                <button
                    class="primary-button"
                    onclick="
                        addToCart(${product.id})
                    "
                >
                    Add to Cart
                </button>

                <a href="#products">
                    ← Back to Products
                </a>

            </div>

        </section>

    `;
}


// ==========================================
// ABOUT
// ==========================================

function showAbout() {

    app.innerHTML = `

        <section class="about">

            <h1>
                About ShopEasy
            </h1>

            <p>
                ShopEasy is a modern e-commerce
                product catalog created as a
                web development capstone project.
            </p>

            <br>

            <p>
                The application demonstrates
                client-side routing, product
                searching, category filtering,
                product details and shopping
                cart functionality.
            </p>

            <br>

            <p>
                The website is responsive and
                designed for both desktop and
                mobile devices.
            </p>

        </section>

    `;
}


// ==========================================
// ADD TO CART
// ==========================================

function addToCart(id) {

    const product =
        products.find(
            product => product.id === id
        );

    if (!product) {
        return;
    }

    cart.push(product);

    saveCart();

    updateCartCount();

    alert(
        product.name +
        " added to cart!"
    );
}


// ==========================================
// SAVE CART
// ==========================================

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}


// ==========================================
// CART COUNT
// ==========================================

function updateCartCount() {

    const cartCount =
        document.getElementById("cartCount");

    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}


// ==========================================
// SHOW CART
// ==========================================

function showCart() {

    app.innerHTML = `

        <section class="cart-page">

            <h1 class="page-title">
                Shopping Cart
            </h1>

            <div id="cartItems"></div>

        </section>

    `;

    const cartItems =
        document.getElementById("cartItems");

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty">

                <h2>
                    Your cart is empty
                </h2>

                <br>

                <a
                    href="#products"
                    class="primary-button"
                >
                    Browse Products
                </a>

            </div>

        `;

        return;
    }

    let total = 0;

    cart.forEach((product, index) => {

        total += product.price;

        cartItems.innerHTML += `

            <div class="cart-item">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div class="cart-item-info">

                    <h3>
                        ${product.name}
                    </h3>

                    <p>
                        ₹${product.price.toLocaleString("en-IN")}
                    </p>

                </div>

                <button
                    class="remove-button"
                    onclick="
                        removeFromCart(${index})
                    "
                >
                    Remove
                </button>

            </div>

        `;
    });

    cartItems.innerHTML += `

        <div class="total">

            Total:
            ₹${total.toLocaleString("en-IN")}

        </div>

    `;
}


// ==========================================
// REMOVE FROM CART
// ==========================================

function removeFromCart(index) {

    cart.splice(index, 1);

    saveCart();

    updateCartCount();

    showCart();
}


// ==========================================
// CART BUTTON
// ==========================================

document
    .getElementById("cartButton")
    .addEventListener(
        "click",
        function () {

            location.hash = "#cart";

        }
    );


// ==========================================
// START
// ==========================================

updateCartCount();

router();
