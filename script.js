/**
 * Adds a product to the shopping cart and stores it in localStorage.
 * @param {HTMLElement} button - The button element clicked.
 */
function addToCart(button) {
  const productCard = button.closest('.product-card');
  const name = productCard.querySelector('.product-name').textContent.trim();
  const priceText = productCard.querySelector('.price').textContent.trim();
  const price = parseInt(priceText.replace(/[^0-9]/g, ''));
  const imgElement = productCard.querySelector('.product-image__img') || productCard.querySelector('img');
  const image = imgElement ? imgElement.src : '';

  // Add falling cloth animation
  const clothIcon = document.createElement('i');
  clothIcon.className = 'fas fa-tshirt falling-cloth';
  button.appendChild(clothIcon);
  button.classList.add('animating');
  setTimeout(() => {
    clothIcon.remove();
    button.classList.remove('animating');
  }, 800);

  // Retrieve existing cart or initialize a new one
  const cart = JSON.parse(localStorage.getItem('urbanwaveCart')) || [];
  
  // Check if the item already exists in the cart
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, image, quantity: 1, size: 'M', color: 'Default' });
  }

  // Save updated cart back to localStorage
  localStorage.setItem('urbanwaveCart', JSON.stringify(cart));
  
  showToast(`${name} added to cart!`);
}

/**
 * Displays a temporary toast notification for cart actions.
 * @param {string} message - The message to display.
 */
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  if (toast) {
    toast.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; gap: 20px;">
        <span>${message}</span>
        <a href="cart.html" style="background: white; color: #4CAF50; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 0.9rem; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">View Cart</a>
      </div>
    `;
    toast.style.display = 'block';
    
    // Reset animation to allow re-triggering
    toast.style.animation = 'none';
    toast.offsetHeight; // Trigger reflow
    toast.style.animation = null;

    setTimeout(() => {
      toast.style.display = 'none';
    }, 4000);
  }
}

function toggleWishlist(icon) {
  icon.classList.toggle('fas'); // Solid heart
  icon.classList.toggle('far'); // Regular heart
  
  const isAdded = icon.classList.contains('fas');
  const productCard = icon.closest('.product-card');
  const nameEl = productCard.querySelector('.product-name') || productCard.querySelector('h4');
  const name = nameEl ? nameEl.textContent.trim() : '';
  
  // Get other details for storage
  const priceText = productCard.querySelector('.price').textContent.trim();
  const price = parseInt(priceText.replace(/[^0-9]/g, ''));
  const imgElement = productCard.querySelector('.product-image__img') || productCard.querySelector('img');
  const image = imgElement ? imgElement.src : '';

  let wishlist = JSON.parse(localStorage.getItem('urbanwaveWishlist') || '[]');

  if (isAdded) {
    if (!wishlist.find(item => item.name === name)) {
      wishlist.push({ name, price, image });
    }
  } else {
    wishlist = wishlist.filter(item => item.name !== name);
  }

  localStorage.setItem('urbanwaveWishlist', JSON.stringify(wishlist));
  
  const wishlistToast = document.getElementById('wishlist-toast');
  if (wishlistToast) {
    wishlistToast.textContent = isAdded ? `${name} added to wishlist!` : `${name} removed from wishlist!`;
    wishlistToast.style.display = 'block';
    
    // Reset animation to allow re-triggering
    wishlistToast.style.animation = 'none';
    wishlistToast.offsetHeight; // Trigger reflow
    wishlistToast.style.animation = null;

    setTimeout(() => {
      wishlistToast.style.display = 'none';
    }, 2500);
  }
}

function togglePayment(button) {
  const productCard = button.closest('.product-card');
  const paymentRoll = productCard.querySelector('.payment-roll');
  paymentRoll.classList.toggle('active');
}

function selectPayment(method) {
  alert(`Proceeding with ${method} payment...`);
}

function buyNow(button) {
  const productCard = button.closest('.product-card');
  const name = productCard.querySelector('.product-name').textContent.trim();
  const priceText = productCard.querySelector('.price').textContent.trim();
  const price = parseInt(priceText.replace(/[^0-9]/g, ''));
  const imgElement = productCard.querySelector('.product-image__img') || productCard.querySelector('img');
  const image = imgElement ? imgElement.src : '';

  const cart = JSON.parse(localStorage.getItem('urbanwaveCart')) || [];
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, image, quantity: 1, size: 'M', color: 'Default' });
  }

  localStorage.setItem('urbanwaveCart', JSON.stringify(cart));
  window.location.href = 'cart.html?checkout=true&buyNow=true';
}

/**
 * Syncs the heart icons with the data in localStorage on page load.
 */
function updateWishlistIcons() {
  const wishlist = JSON.parse(localStorage.getItem('urbanwaveWishlist') || '[]');
  document.querySelectorAll('.wishlist').forEach(icon => {
    const productCard = icon.closest('.product-card');
    const nameEl = productCard.querySelector('.product-name') || productCard.querySelector('h4');
    const name = nameEl ? nameEl.textContent.trim() : '';
    if (wishlist.some(item => item.name === name)) {
      icon.classList.replace('far', 'fas');
    } else {
      icon.classList.replace('fas', 'far');
    }
  });
}
document.addEventListener('DOMContentLoaded', updateWishlistIcons);