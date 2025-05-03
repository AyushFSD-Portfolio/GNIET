// Product Database
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    category: "electronics",
    description: "Premium wireless headphones with noise cancellation and 20-hour battery life."
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    category: "electronics",
    description: "Track your fitness, receive notifications, and more with this sleek smartwatch."
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    category: "electronics",
    description: "Portable Bluetooth speaker with 360° sound and 12-hour playtime."
  },
  {
    id: 4,
    name: "Denim Jacket",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    category: "fashion",
    description: "Classic denim jacket with a modern fit. Perfect for any casual outfit."
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    category: "fashion",
    description: "Lightweight running shoes with responsive cushioning for maximum comfort."
  },
  {
    id: 6,
    name: "Summer Dress",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    category: "fashion",
    description: "Floral summer dress made from breathable fabric for hot days."
  },
  {
    id: 7,
    name: "Table Lamp",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    category: "home",
    description: "Modern table lamp with adjustable brightness for your bedroom or office."
  },
  {
    id: 8,
    name: "Throw Pillows",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1592789705501-f9ae4278a9c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    category: "home",
    description: "Set of 2 decorative throw pillows to add style to any room."
  },
  {
    id: 9,
    name: "Coffee Maker",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1575792548336-0b27afb0a6c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    category: "home",
    description: "Programmable coffee maker that brews your perfect cup every morning."
  },
  {
    id: 10,
    name: "Laptop Backpack",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    category: "fashion",
    description: "Water-resistant backpack with dedicated laptop compartment and USB charging port."
  },
  {
    id: 11,
    name: "Portable SSD",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    category: "electronics",
    description: "500GB high-speed portable SSD with USB-C connectivity for quick file transfers."
  },
  {
    id: 12,
    name: "Wireless Earbuds",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    category: "electronics",
    description: "True wireless earbuds with touch controls and 24-hour battery life with charging case."
  },
  {
    id: 13,
    name: "Leather Wallet",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1585221454166-590226a10311?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    category: "fashion",
    description: "Genuine leather wallet with RFID protection and multiple card slots."
  },
  {
    id: 14,
    name: "Smart Doorbell",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1612649492644-77384e9fd816?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    category: "electronics",
    description: "HD video doorbell with motion detection and two-way audio communication."
  },
  {
    id: 15,
    name: "Essential Oil Diffuser",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    category: "home",
    description: "Ultrasonic aroma diffuser with 7 color LED lights and automatic shut-off."
  },
  {
    id: 16,
    name: "Knit Sweater",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    category: "fashion",
    description: "Soft knit sweater in a relaxed fit, perfect for layering in cooler weather."
  },
  {
    id: 17,
    name: "Bamboo Cutting Board",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1604567874199-e8e7243d7ff2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    category: "home",
    description: "Durable bamboo cutting board with juice grooves and handles for easy use."
  },
  {
    id: 18,
    name: "Polaroid Camera",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    category: "electronics",
    description: "Instant film camera that prints photos on the spot for immediate memories."
  }
];

// DOM Elements
const productsContainer = document.getElementById('productsContainer');
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const clearCartBtn = document.getElementById('clearCartBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const menuBtn = document.getElementById('menuBtn');
const menuItems = document.getElementById('menuItems');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display Products
function displayProducts(category = 'all') {
  productsContainer.innerHTML = '';
  
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);
  
  filteredProducts.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <div class="product-img">
        <img src="${product.image}" alt="${product.name}">
        <span class="product-category">${product.category}</span>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      </div>
    `;
    productsContainer.appendChild(productElement);
  });
  
  // Add event listeners to the Add to Cart buttons
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      addToCart(id);
    });
  });
}

// Filter Products
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
    
    const category = btn.dataset.filter;
    displayProducts(category);
  });
});

// Add to Cart
function addToCart(id) {
  const product = products.find(product => product.id === id);
  const existingItem = cart.find(item => item.id === id);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }
  
  updateCart();
  showToast(`${product.name} added to cart!`);
  
  // Save to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Remove from Cart
function removeFromCart(id) {
  const index = cart.findIndex(item => item.id === id);
  
  if (index !== -1) {
    const product = cart[index];
    showToast(`${product.name} removed from cart!`, true);
    
    cart.splice(index, 1);
    updateCart();
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

// Update Cart Quantity
function updateQuantity(id, change) {
  const item = cart.find(item => item.id === id);
  
  if (item) {
    item.quantity += change;
    
    if (item.quantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    updateCart();
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

// Update Cart Display
function updateCart() {
  // Update cart count
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalItems;
  
  // Update cart items
  cartItems.innerHTML = '';
  
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
  } else {
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <img class="cart-item-img" src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <h3 class="cart-item-title">${item.name}</h3>
          <p class="cart-item-price">$${item.price.toFixed(2)}</p>
          <div class="cart-item-quantity">
            <button class="quantity-btn decrease" data-id="${item.id}">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn increase" data-id="${item.id}">+</button>
          </div>
        </div>
        <button class="remove-item" data-id="${item.id}">Remove</button>
      `;
      cartItems.appendChild(cartItem);
    });
  }
  
  // Add event listeners to quantity and remove buttons
  document.querySelectorAll('.decrease').forEach(button => {
    button.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      updateQuantity(id, -1);
    });
  });
  
  document.querySelectorAll('.increase').forEach(button => {
    button.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      updateQuantity(id, 1);
    });
  });
  
  document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      removeFromCart(id);
    });
  });
  
  // Update cart total
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Cart Toggle
cartIcon.addEventListener('click', () => {
  cartSidebar.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closeCart.addEventListener('click', () => {
  cartSidebar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
});

overlay.addEventListener('click', () => {
  cartSidebar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
});

// Clear Cart
clearCartBtn.addEventListener('click', () => {
  cart = [];
  updateCart();
  localStorage.removeItem('cart');
  showToast('Cart cleared successfully!', true);
});

// Checkout
checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    showToast('Your cart is empty!', true);
    return;
  }
  
  showToast('Thank you for your purchase!');
  cart = [];
  updateCart();
  localStorage.removeItem('cart');
  
  // Close cart sidebar after checkout
  cartSidebar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
});

// Toast Notification
function showToast(message, isError = false) {
  toastMessage.textContent = message;
  
  if (isError) {
    toast.classList.add('error');
  } else {
    toast.classList.remove('error');
  }
  
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Mobile Menu Toggle
menuBtn.addEventListener('click', () => {
  menuItems.classList.toggle('active');
  overlay.classList.toggle('active');
});

// Close menu when clicking a link on mobile
menuItems.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      menuItems.classList.remove('active');
      overlay.classList.remove('active');
    }
  });
});

// Form Submissions
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  showToast('Message sent successfully!');
  contactForm.reset();
});

const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  showToast('Subscribed to newsletter!');
  newsletterForm.reset();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  displayProducts();
  updateCart();
});



 // Carousel Images
 const carouselImages = [
  'https://www.shutterstock.com/image-photo/spring-summer-fashion-high-model-260nw-2464715499.jpg',  // Fashion model with elegant clothing
  'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VtbWVyfGVufDB8fDB8fHww',  // Summer collection
  'https://www.menswearr.com/cdn/shop/articles/business-professional-dress-code.webp?v=1704762039'   // Professional business attire
];

// Set background images for slides
const slides = document.querySelectorAll('.hero-slide');
slides.forEach((slide, index) => {
  slide.style.backgroundImage = `url('${carouselImages[index]}')`;
});

// Carousel functionality
const carouselDots = document.querySelectorAll('.carousel-dot');
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');
let currentSlide = 0;
let autoSlideInterval;

// Function to show a specific slide
function showSlide(slideIndex) {
  // Hide all slides
  slides.forEach(slide => {
      slide.classList.remove('active');
  });
  
  // Remove active class from all dots
  carouselDots.forEach(dot => {
      dot.classList.remove('active');
  });
  
  // Show the selected slide and activate its dot
  slides[slideIndex].classList.add('active');
  carouselDots[slideIndex].classList.add('active');
  
  // Update current slide
  currentSlide = slideIndex;
}

// Function to show the next slide
function nextSlideFunc() {
  let nextIndex = currentSlide + 1;
  if (nextIndex >= slides.length) {
      nextIndex = 0;
  }
  showSlide(nextIndex);
}

// Function to show the previous slide
function prevSlideFunc() {
  let prevIndex = currentSlide - 1;
  if (prevIndex < 0) {
      prevIndex = slides.length - 1;
  }
  showSlide(prevIndex);
}

// Add event listeners to dots
carouselDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
      showSlide(index);
      resetAutoSlide(); // Reset the auto-slide timer when manually changing slides
  });
});

// Add event listeners to arrows
prevSlide.addEventListener('click', () => {
  prevSlideFunc();
  resetAutoSlide();
});

nextSlide.addEventListener('click', () => {
  nextSlideFunc();
  resetAutoSlide();
});

// Function to start auto sliding
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlideFunc, 5000); // Change slide every 5 seconds
}

// Function to reset auto sliding
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Start auto sliding when the page loads
startAutoSlide();
