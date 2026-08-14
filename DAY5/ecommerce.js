const productsContainer = document.getElementById("products-container");

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        products.forEach(product => {

            const div = document.createElement("div");

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

            // ADD button
            addItemBtn.addEventListener("click", function () {

                quantity++;

                addItemBtn.innerText = "Added: " + quantity;

            });

            // + button
            incrementBtn.addEventListener("click", function () {

                quantity++;

                addItemBtn.innerText = "Added: " + quantity;

            });

            // - button
            decrementBtn.addEventListener("click", function () {

                if (quantity > 0) {

                    quantity--;

                    if (quantity === 0) {
                        addItemBtn.innerText = "ADD";
                    }
                    else {
                        addItemBtn.innerText = "Added: " + quantity;
                    }

                }

            });

            // Add elements to product card
            div.appendChild(img);
            div.appendChild(title);
            div.appendChild(price);
            div.appendChild(incrementBtn);
            div.appendChild(decrementBtn);
            div.appendChild(addItemBtn);

            // Add product card to container
            productsContainer.appendChild(div);

        });

    })
    .catch(error => {

        console.log("Error:", error);

    });