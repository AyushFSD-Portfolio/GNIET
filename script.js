// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  // Navigation and menu
  const menuBtn = document.getElementById('menuBtn');
  const menuItems = document.getElementById('menuItems');
  const cartIcon = document.getElementById('cartIcon');
  const cartSidebar = document.getElementById('cartSidebar');
  const closeCart = document.getElementById('closeCart');
  const overlay = document.getElementById('overlay');
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  const cartCount = document.getElementById('cartCount');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const clearCartBtn = document.getElementById('clearCartBtn');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  const contactForm = document.getElementById('contactForm');
  const productsContainer = document.getElementById('productsContainer');
  
  // Hero Carousel Elements
  const carouselSlides = document.querySelectorAll('.hero-slide');
  const carouselDots = document.querySelectorAll('.carousel-dot');
  const prevSlideBtn = document.getElementById('prevSlide');
  const nextSlideBtn = document.getElementById('nextSlide');
  
  // Product Data (sample)
  const products = [
      {
          id: 1,
          name: 'Classic Blue Shirt',
          price: 59.99,
          category: 'clothing',
          image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
      },
      {
          id: 2,
          name: 'Premium Watch',
          price: 149.99,
          category: 'accessories',
          image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80'
      },
      {
          id: 3,
          name: 'Elegant Dress',
          price: 89.99,
          category: 'clothing',
          image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80'
      },
      {
          id: 4,
          name: 'Leather Wallet',
          price: 39.99,
          category: 'accessories',
          image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80'
      },
      {
          id: 5,
          name: 'Designer Sneakers',
          price: 129.99,
          category: 'footwear',
          image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
      },
      {
          id: 6,
          name: 'Slim Fit Jeans',
          price: 69.99,
          category: 'clothing',
          image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
      },
      {
          id: 7,
          name: 'Leather Belt',
          price: 34.99,
          category: 'accessories',
          image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
      },
      {
          id: 8,
          name: 'Formal Shoes',
          price: 99.99,
          category: 'footwear',
          image: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80'
      },
      {
          id: 9,
          name: 'Casual T-Shirt',
          price: 29.99,
          category: 'clothing',
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80'
      },
      {
          id: 10,
          name: 'Designer Sunglasses',
          price: 89.99,
          category: 'accessories',
          image: 'https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/64ca3d89ed0a7d98274693e9/610ikkd5k1l.jpg'
      },
      {
          id: 11,
          name: 'Running Shoes',
          price: 79.99,
          category: 'footwear',
          image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
      },
      {
          id: 12,
          name: 'Wool Sweater',
          price: 69.99,
          category: 'clothing',
          image: 'https://5.imimg.com/data5/IU/ER/KK/SELLER-19377622/ladies-sweater-500x500.jpg'
      }
  ];
  
  // Cart Array
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Pagination and Filtering Variables
  let currentPage = 1;
  const productsPerPage = 6;
  let currentFilter = 'all';
  
  // Mobile Menu Toggle
  if (menuBtn) {
      menuBtn.addEventListener('click', () => {
          menuItems.classList.toggle('active');
      });
  }
  
  // Cart Toggle
  if (cartIcon) {
      cartIcon.addEventListener('click', () => {
          cartSidebar.classList.add('active');
          overlay.classList.add('active');
      });
  }
  
  if (closeCart) {
      closeCart.addEventListener('click', () => {
          cartSidebar.classList.remove('active');
          overlay.classList.remove('active');
      });
  }
  
  if (overlay) {
      overlay.addEventListener('click', () => {
          cartSidebar.classList.remove('active');
          overlay.classList.remove('active');
      });
  }
  
  // Initialize Products and Pagination
  function initializeProducts() {
      loadProducts();
      updateFilterButtons();
  }
  
  // Filter products by category
  function filterProducts(category) {
      currentFilter = category;
      currentPage = 1; // Reset to first page when changing categories
      loadProducts();
      updateFilterButtons();
  }
  
  // Update filter button active state
  function updateFilterButtons() {
      document.querySelectorAll('.filter-btn').forEach(btn => {
          btn.classList.remove('active');
          if (btn.getAttribute('data-filter') === currentFilter) {
              btn.classList.add('active');
          }
      });
  }
  
  // Get filtered products
  function getFilteredProducts() {
      if (currentFilter === 'all') {
          return products;
      } else {
          return products.filter(product => product.category === currentFilter);
      }
  }
  
  // Load products with pagination
  function loadProducts() {
      const filteredProducts = getFilteredProducts();
      const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
      
      // Calculate products for current page
      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      const currentProducts = filteredProducts.slice(startIndex, endIndex);
      
      // Clear products container
      productsContainer.innerHTML = '';
      
      // If no products match the filter
      if (currentProducts.length === 0) {
          productsContainer.innerHTML = '<div class="no-products">No products found in this category.</div>';
          return;
      }
      
      // Add products
      currentProducts.forEach(product => {
          const productEl = createProductElement(product);
          productsContainer.appendChild(productEl);
      });
      
      // Add pagination controls
      createPaginationControls(totalPages);
  }
  
  // Create product element
  function createProductElement(product) {
      const productEl = document.createElement('div');
      productEl.className = 'product';
      productEl.innerHTML = `
          <div class="product-img">
              <img src="${product.image}" alt="${product.name}">
              <div class="product-category">${product.category}</div>
          </div>
          <div class="product-info">
              <h3>${product.name}</h3>
              <div class="product-price">$${product.price.toFixed(2)}</div>
              <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
          </div>
      `;
      
      // Add to cart button event
      const addToCartBtn = productEl.querySelector('.add-to-cart');
      addToCartBtn.addEventListener('click', () => {
          addToCart(product);
      });
      
      return productEl;
  }
  
  // Create pagination controls
  function createPaginationControls(totalPages) {
      // Only create pagination if there are multiple pages
      if (totalPages <= 1) {
          return;
      }
      
      const paginationEl = document.createElement('div');
      paginationEl.className = 'pagination';
      
      // Previous button
      const prevBtn = document.createElement('button');
      prevBtn.className = 'page-btn prev-page';
      prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
      prevBtn.disabled = currentPage === 1;
      prevBtn.addEventListener('click', () => {
          if (currentPage > 1) {
              currentPage--;
              loadProducts();
          }
      });
      paginationEl.appendChild(prevBtn);
      
      // Page buttons (show max 5 pages with ellipsis)
      const maxVisiblePages = 5;
      const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
      const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      
      if (startPage > 1) {
          // First page button
          const firstPageBtn = document.createElement('button');
          firstPageBtn.className = 'page-btn';
          firstPageBtn.textContent = '1';
          firstPageBtn.addEventListener('click', () => {
              currentPage = 1;
              loadProducts();
          });
          paginationEl.appendChild(firstPageBtn);
          
          // Ellipsis if needed
          if (startPage > 2) {
              const ellipsis = document.createElement('span');
              ellipsis.className = 'ellipsis';
              ellipsis.textContent = '...';
              paginationEl.appendChild(ellipsis);
          }
      }
      
      // Page number buttons
      for (let i = startPage; i <= endPage; i++) {
          const pageBtn = document.createElement('button');
          pageBtn.className = 'page-btn' + (i === currentPage ? ' active' : '');
          pageBtn.textContent = i;
          pageBtn.addEventListener('click', () => {
              currentPage = i;
              loadProducts();
          });
          paginationEl.appendChild(pageBtn);
      }
      
      if (endPage < totalPages) {
          // Ellipsis if needed
          if (endPage < totalPages - 1) {
              const ellipsis = document.createElement('span');
              ellipsis.className = 'ellipsis';
              ellipsis.textContent = '...';
              paginationEl.appendChild(ellipsis);
          }
          
          // Last page button
          const lastPageBtn = document.createElement('button');
          lastPageBtn.className = 'page-btn';
          lastPageBtn.textContent = totalPages;
          lastPageBtn.addEventListener('click', () => {
              currentPage = totalPages;
              loadProducts();
          });
          paginationEl.appendChild(lastPageBtn);
      }
      
      // Next button
      const nextBtn = document.createElement('button');
      nextBtn.className = 'page-btn next-page';
      nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
      nextBtn.disabled = currentPage === totalPages;
      nextBtn.addEventListener('click', () => {
          if (currentPage < totalPages) {
              currentPage++;
              loadProducts();
          }
      });
      paginationEl.appendChild(nextBtn);
      
      productsContainer.appendChild(paginationEl);
  }
  
  // Add filter button event listeners
  document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
          const filter = btn.getAttribute('data-filter');
          filterProducts(filter);
      });
  });
  
  // Cart Functions
  function addToCart(product) {
      const existingItem = cart.find(item => item.id === product.id);
      
      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              quantity: 1
          });
      }
      
      updateCart();
      showToast(`${product.name} added to cart`);
      saveCartToLocalStorage();
  }
  
  function updateCart() {
      if (!cartItems) return;
      
      cartItems.innerHTML = '';
      
      if (cart.length === 0) {
          cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
          cartCount.textContent = '0';
          cartTotal.textContent = '$0.00';
          return;
      }
      
      let totalPrice = 0;
      let totalItems = 0;
      
      cart.forEach(item => {
          const itemEl = document.createElement('div');
          itemEl.className = 'cart-item';
          
          const itemPrice = item.price * item.quantity;
          totalPrice += itemPrice;
          totalItems += item.quantity;
          
          itemEl.innerHTML = `
              <img src="${item.image}" alt="${item.name}" class="cart-item-img">
              <div class="cart-item-info">
                  <h3 class="cart-item-title">${item.name}</h3>
                  <div class="cart-item-price">$${itemPrice.toFixed(2)}</div>
                  <div class="cart-item-quantity">
                      <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                      <span>${item.quantity}</span>
                      <button class="quantity-btn increase" data-id="${item.id}">+</button>
                  </div>
              </div>
              <button class="remove-item" data-id="${item.id}">Remove</button>
          `;
          
          cartItems.appendChild(itemEl);
          
          // Add quantity change event listeners
          const decreaseBtn = itemEl.querySelector('.decrease');
          const increaseBtn = itemEl.querySelector('.increase');
          const removeBtn = itemEl.querySelector('.remove-item');
          
          decreaseBtn.addEventListener('click', () => {
              decreaseQuantity(item.id);
          });
          
          increaseBtn.addEventListener('click', () => {
              increaseQuantity(item.id);
          });
          
          removeBtn.addEventListener('click', () => {
              removeFromCart(item.id);
          });
      });
      
      cartCount.textContent = totalItems;
      cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
  }
  
  function decreaseQuantity(id) {
      const item = cart.find(item => item.id === id);
      
      if (item.quantity > 1) {
          item.quantity--;
      } else {
          removeFromCart(id);
          return;
      }
      
      updateCart();
      saveCartToLocalStorage();
  }
  
  function increaseQuantity(id) {
      const item = cart.find(item => item.id === id);
      item.quantity++;
      
      updateCart();
      saveCartToLocalStorage();
  }
  
  function removeFromCart(id) {
      cart = cart.filter(item => item.id !== id);
      
      updateCart();
      saveCartToLocalStorage();
  }
  
  function clearCart() {
      cart = [];
      
      updateCart();
      saveCartToLocalStorage();
      showToast('Cart cleared');
  }
  
  function saveCartToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Toast notification
  function showToast(message, isError = false) {
      if (!toast || !toastMessage) return;
      
      toastMessage.textContent = message;
      toast.className = 'toast' + (isError ? ' error' : '');
      toast.classList.add('show');
      
      setTimeout(() => {
          toast.classList.remove('show');
      }, 3000);
  }
  
  // Checkout
  function checkout() {
      if (cart.length === 0) {
          showToast('Your cart is empty', true);
          return;
      }
      
      showToast('Checkout functionality would be implemented here');
      // In a real application, this would redirect to checkout page
  }
  
  // Contact form submission
  if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
          e.preventDefault();
          showToast('Message sent successfully! We\'ll get back to you soon.');
          contactForm.reset();
      });
  }
  
  // Hero Carousel Functions
  let currentSlide = 0;
  const totalSlides = carouselSlides.length;
  
  // Set initial slide background images
  carouselSlides.forEach((slide, index) => {
      // Using sample images for demonstration
      const imageUrls = [
          'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
      ];
      
      slide.style.backgroundImage = `url('${imageUrls[index % imageUrls.length]}')`;
  });
  
  function goToSlide(slideIndex) {
      if (slideIndex < 0) {
          slideIndex = totalSlides - 1;
      } else if (slideIndex >= totalSlides) {
          slideIndex = 0;
      }
      
      carouselSlides.forEach((slide, index) => {
          slide.classList.remove('active');
          if (index === slideIndex) {
              slide.classList.add('active');
          }
      });
      
      carouselDots.forEach((dot, index) => {
          dot.classList.remove('active');
          if (index === slideIndex) {
              dot.classList.add('active');
          }
      });
      
      currentSlide = slideIndex;
  }
  
  function nextSlide() {
      goToSlide(currentSlide + 1);
  }
  
  function prevSlide() {
      goToSlide(currentSlide - 1);
  }
  
  // Hero Carousel Event Listeners
  if (prevSlideBtn) {
      prevSlideBtn.addEventListener('click', prevSlide);
  }
  
  if (nextSlideBtn) {
      nextSlideBtn.addEventListener('click', nextSlide);
  }
  
  carouselDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          goToSlide(index);
      });
  });
  
  // Auto slide change
  let slideInterval = setInterval(nextSlide, 5000);
  
  // Pause carousel on hover
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
      heroSection.addEventListener('mouseenter', () => {
          clearInterval(slideInterval);
      });
      
      heroSection.addEventListener('mouseleave', () => {
          slideInterval = setInterval(nextSlide, 5000);
      });
  }
  
  // Cart event listeners
  if (clearCartBtn) {
      clearCartBtn.addEventListener('click', clearCart);
  }
  
  if (checkoutBtn) {
      checkoutBtn.addEventListener('click', checkout);
  }
  
  // Initialize
  initializeProducts();
  updateCart();
  
  // Set first slide active
  if (carouselSlides.length > 0) {
      goToSlide(0);
  }
});