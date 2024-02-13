(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

	


	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();


})()

// Shopping cart
document.addEventListener("DOMContentLoaded", function() {
    // Initialize cart items array
    let cartItems = [];

    // Function to update the cart UI
    function updateCartUI() {
        let cartContainer = document.getElementById("cart-items");
        // Clear previous items
        cartContainer.innerHTML = "";
        // Loop through each item in the cart and create HTML elements to display them
        cartItems.forEach(function(item) {
            let itemElement = document.createElement("li");
            itemElement.textContent = `${item.name} - $${item.price}`;
            cartContainer.appendChild(itemElement);
        });
    }

    // Function to handle click event on add to cart buttons
    function handleAddToCart(event) {
        // Retrieve data attributes from the clicked button
        const id = event.target.dataset.id;
        const name = event.target.dataset.name;
        const price = parseFloat(event.target.dataset.price);

        // Create a new cart item object
        const newItem = {
            id: id,
            name: name,
            price: price
        };

        // Add the item to the cart
        cartItems.push(newItem);

        // Update the cart UI
        updateCartUI();
    }

    // Add event listeners to all add to cart buttons
    let addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", handleAddToCart);
    });
});






document.addEventListener("DOMContentLoaded", function() {
    // Initialize cart items array
    let cartItems = [];

    // Function to update the cart UI
    function updateCartUI() {
        let cartContainer = document.getElementById("cart-items");
        // Clear previous items
        cartContainer.innerHTML = "";
        // Loop through each item in the cart and create HTML elements to display them
        cartItems.forEach(function(item) {
            let itemElement = document.createElement("li");
            itemElement.textContent = `${item.name} - $${item.price}`;
            cartContainer.appendChild(itemElement);
        });
    }

    // Function to handle click event on add to cart button
    function handleAddToCart(event) {
        // Retrieve data attributes from the clicked button
        const id = event.target.dataset.id;
        const name = event.target.dataset.name;
        const price = parseFloat(event.target.dataset.price);

        // Create a new cart item object
        const newItem = {
            id: id,
            name: name,
            price: price
        };

        // Add the item to the cart
        cartItems.push(newItem);

        // Update the cart UI
        updateCartUI();
    }

    // Add event listener to the specific add to cart button
    let addToCartButton = document.querySelector(".add-to-cart-btn");
    addToCartButton.addEventListener("click", handleAddToCart);
});

