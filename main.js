//let http = new XMLHttpRequest();

//http.open('get', 'products.json', true);
 
//http.send();

//http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let products = jSON.PARSE(this.responseText)
    }
    let output ="";

    for(let item of products){
        output += ''
    .product
    }
//}

// Generate HTML for displaying cart items
function generateCartItemHTML(product) {
    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <span>${product.price}</span>
        <button onclick="removeFromCart(${product.id})">Remove</button>
      </div>
    `;
  }
  
  // Display cart items on the webpage
  function displayCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";
  
    cart.forEach((product) => {
      const cartItemHTML = generateCartItemHTML(product);
      cartContainer.innerHTML += cartItemHTML;
    });
  
    const cartTotal = document.getElementById("cart-total");
    cartTotal.innerHTML = `Total: $${calculateCartTotal()}`;
  }
  