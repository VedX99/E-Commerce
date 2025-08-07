
    // Display Cart Items on Cart Page
    if (document.getElementById("cart-items")) {
        const cartItemsContainer = document.getElementById("cart-items");
        cartItemsContainer.innerHTML = "";

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        } else {
            cart.forEach(item => {
                const itemElement = document.createElement("div");
                itemElement.classList.add("cart-item");
                itemElement.innerHTML = `
                    <p><strong>${item.name}</strong> - $${item.price} x ${item.quantity}</p>
                    <button class="remove-item" data-name="${item.name}">Remove</button>
                `;
                cartItemsContainer.appendChild(itemElement);
            });
        }
    }
    
    // Remove Item from Cart
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-item")) {
            const name = event.target.dataset.name;
            const itemIndex = cart.findIndex(item => item.name === name);
            
            if (itemIndex > -1) {
                cart.splice(itemIndex, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                location.reload();
            }
        }
    });

    // Mobile Navigation Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    
    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }
