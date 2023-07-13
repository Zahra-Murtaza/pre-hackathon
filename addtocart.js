document.addEventListener('DOMContentLoaded', function() {
    const cartItems = [];
    const cartList = document.getElementById('cart-items');
    const totalText = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkout-btn');
  
    // Add event listener to all "Add to Cart" buttons
    const addToCartButtons = document.getElementsByClassName('add-to-cart-btn');
    for (let i = 0; i < addToCartButtons.length; i++) {
      addToCartButtons[i].addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const price = parseFloat(this.getAttribute('data-price'));
  
        // Add item to cart
        cartItems.push({ name, price });
  
        // Update cart UI
        const item = document.createElement('li');
        item.textContent = `${name} - $${price}`;
        cartList.appendChild(item);
  
        // Update total
        const total = cartItems.reduce((acc, curr) => acc + curr.price, 0);
        totalText.textContent = `Total: $${total.toFixed(2)}`;
      });
    }
  
    // Checkout button event listener
    checkoutBtn.addEventListener('click', function() {
      alert('Thank you for your purchase!');
      // Clear cart
      cartItems.length = 0;
      cartList.innerHTML = '';
      totalText.textContent = 'Total: $0';
    });
  });
  