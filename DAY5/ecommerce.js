const productsContainer = document.getElementById("products-container");
const cartCount = document.getElementById("cart-count");

// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count
function updateCartCount() {
    let totalQuantity = 0;

    cart.forEach(item => {
        totalQuantity += item.quantity;
    });

    cartCount.innerText = totalQuantity;
}

// Save cart
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// Add product to cart
function addToCart(product) {

    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart();
}

// Fetch products
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())

    .then(products => {

        products.forEach(product => {

            const div = document.createElement("div");
            div.className = "product-card";

            // Product Image
            const img = document.createElement("img");

            img.src = product.image;
            img.alt = product.title;

            // Product Name
            const title = document.createElement("h2");

            title.innerText = product.title;

            // Product Price
            const price = document.createElement("h3");

            price.innerText = "$" + product.price;

            // Increment Button
            const incrementBtn = document.createElement("button");

            incrementBtn.innerText = "+";

            // Decrement Button
            const decrementBtn = document.createElement("button");

            decrementBtn.innerText = "-";

            // Add Button
            const addItemBtn = document.createElement("button");

            addItemBtn.innerText = "ADD";

            // Quantity
            let quantity = 0;

            // ADD
            addItemBtn.addEventListener("click", function () {

                quantity++;

                addItemBtn.innerText = "Added: " + quantity;

                addToCart(product);

            });

            // +
            incrementBtn.addEventListener("click", function () {

                quantity++;

                addItemBtn.innerText = "Added: " + quantity;

                addToCart(product);

            });

            // -
            decrementBtn.addEventListener("click", function () {

                if (quantity > 0) {

                    quantity--;

                    // Remove one item from cart
                    const existingProduct =
                        cart.find(item => item.id === product.id);

                    if (existingProduct) {

                        existingProduct.quantity--;

                        if (existingProduct.quantity === 0) {

                            cart = cart.filter(
                                item => item.id !== product.id
                            );

                        }

                        saveCart();
                    }

                    if (quantity === 0) {
                        addItemBtn.innerText = "ADD";
                    } else {
                        addItemBtn.innerText = "Added: " + quantity;
                    }
                }

            });

            // Add elements
            div.appendChild(img);
            div.appendChild(title);
            div.appendChild(price);
            div.appendChild(incrementBtn);
            div.appendChild(decrementBtn);
            div.appendChild(addItemBtn);

            productsContainer.appendChild(div);

        });

    })

    .catch(error => {

        console.log("Error:", error);

    });


// Initial cart count
updateCartCount();