document.addEventListener("DOMContentLoaded", function () {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalSpan = document.getElementById("cart-total");

  // Function to get cart items from localStorage
  function getCartItems() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }

  // Function to render cart items
  function renderCart() {
    const cartItems = getCartItems();
    cartItemsContainer.innerHTML = ""; // Clear previous content
    let total = 0;

    if (cartItems.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
      cartTotalSpan.textContent = "0.00";
      return;
    }

    cartItems.forEach((item, index) => {
      const product = getProductDetails(item.name);
      total += product.price;

      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");
      itemDiv.innerHTML = `
        <p><strong>${product.name}</strong> - $${product.price.toFixed(2)}</p>
        <button class="remove-from-cart" data-index="${index}">Remove</button>
      `;
      cartItemsContainer.appendChild(itemDiv);
    });

    cartTotalSpan.textContent = total.toFixed(2);
  }

  // Function to remove item from cart
  function removeFromCart(index) {
    let cartItems = getCartItems();
    cartItems.splice(index, 1); // Remove item at index
    localStorage.setItem("cart", JSON.stringify(cartItems));
    renderCart();
  }

  // Function to simulate product details fetching (Replace with real API/database in real application)
  function getProductDetails(productName) {
    const products = {
      "echo-mini-1": {
        name: "EchoSphere Smart Speaker",
        price: 99.99,
      },
      "echo-mini-2": { name: "EchoSphere Mini", price: 49.99 },
      "echo-mini-3": { name: "EchoSphere Pro", price: 149.99 },
    };
    return products[productName] || { name: productName, price: 0 };
  }

  // Event listener for removing items from cart
  cartItemsContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-from-cart")) {
      const index = event.target.dataset.index;
      removeFromCart(index);
    }
  });

  renderCart(); // Initial render on page load
});
