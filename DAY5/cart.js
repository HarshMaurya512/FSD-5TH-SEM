const cartContainer =
    document.getElementById("cart-container");

const totalPrice =
    document.getElementById("total-price");

const checkoutBtn =
    document.getElementById("checkout-btn");


// Get cart
let cart =
    JSON.parse(localStorage.getItem("cart")) || [];


// Save cart
function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}


// Display cart
function displayCart() {

    cartContainer.innerHTML = "";

    let total = 0;


    // Empty cart
    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <div class="empty-cart">

                <h2>🛒 Your cart is empty</h2>

                <p>Add some products to your cart.</p>

                <a href="index.html">
                    Start Shopping
                </a>

            </div>
        `;

        totalPrice.innerText = "0.00";

        return;
    }


    cart.forEach(item => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        const cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.title}"
            >

            <div class="item-info">

                <h3>
                    ${item.title}
                </h3>

                <p>
                    Price:
                    $${item.price}
                </p>

                <div class="quantity">

                    <button
                        onclick="decreaseQuantity(${item.id})">
                        -
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="increaseQuantity(${item.id})">
                        +
                    </button>

                </div>

            </div>


            <div class="item-right">

                <h3>
                    $${itemTotal.toFixed(2)}
                </h3>

                <button
                    class="remove-btn"
                    onclick="removeItem(${item.id})">
                    🗑️ Remove
                </button>

            </div>

        `;


        cartContainer.appendChild(cartItem);

    });


    totalPrice.innerText =
        total.toFixed(2);

}


// Increase quantity
function increaseQuantity(id) {

    const product =
        cart.find(item => item.id === id);

    if (product) {

        product.quantity++;

        saveCart();

        displayCart();

    }

}


// Decrease quantity
function decreaseQuantity(id) {

    const product =
        cart.find(item => item.id === id);

    if (product) {

        product.quantity--;

        if (product.quantity <= 0) {

            cart =
                cart.filter(item => item.id !== id);

        }

        saveCart();

        displayCart();

    }

}


// Remove product
function removeItem(id) {

    cart =
        cart.filter(item => item.id !== id);

    saveCart();

    displayCart();

}


// Checkout
checkoutBtn.addEventListener(
    "click",
    function () {

        if (cart.length === 0) {

            alert("Your cart is empty!");

            return;

        }

        alert(
            "🎉 Order placed successfully!"
        );

        cart = [];

        saveCart();

        displayCart();

    }
);


// Load cart
displayCart();