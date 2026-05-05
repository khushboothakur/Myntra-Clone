const allProducts = [
  // MEN
  {
    id: 1, category: 'men', brand: 'H&M',
    name: 'Slim Fit Cotton T-Shirt',
    price: 599, originalPrice: 1499, discount: 60,
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop',
    badge: 'Bestseller'
  },
  {
    id: 2, category: 'men', brand: 'Levi\'s',
    name: '511 Slim Fit Jeans',
    price: 2399, originalPrice: 3999, discount: 40,
    img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&auto=format&fit=crop',
    badge: 'Top Pick'
  },
  {
    id: 3, category: 'men', brand: 'Nike',
    name: 'Dri-FIT Training Tee',
    price: 1299, originalPrice: 2199, discount: 41,
    img: 'https://images.unsplash.com/photo-1622590513393-94abb1b5c6e4?w=400&auto=format&fit=crop',
    badge: null
  },
  {
    id: 4, category: 'men', brand: 'Van Heusen',
    name: 'Formal Slim Fit Shirt',
    price: 1099, originalPrice: 2299, discount: 52,
    img: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400&auto=format&fit=crop',
    badge: 'New'
  },
  {
    id: 5, category: 'men', brand: 'Puma',
    name: 'Track Jogger Pants',
    price: 1599, originalPrice: 2999, discount: 47,
    img: 'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=400&auto=format&fit=crop',
    badge: null
  },
  {
    id: 6, category: 'men', brand: 'Arrow',
    name: 'Classic Polo T-Shirt',
    price: 899, originalPrice: 1799, discount: 50,
    img: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&auto=format&fit=crop',
    badge: '50% Off'
  },
 
  // WOMEN
  {
    id: 7, category: 'women', brand: 'Zara',
    name: 'Floral Wrap Midi Dress',
    price: 2199, originalPrice: 4499, discount: 51,
    img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&auto=format&fit=crop',
    badge: 'Trending'
  },
  {
    id: 8, category: 'women', brand: 'W',
    name: 'Ethnic Kurti Set',
    price: 1499, originalPrice: 2999, discount: 50,
    img: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&auto=format&fit=crop',
    badge: 'New'
  },
  {
    id: 9, category: 'women', brand: 'Mango',
    name: 'High Waist Wide Leg Pants',
    price: 2799, originalPrice: 5499, discount: 49,
    img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&auto=format&fit=crop',
    badge: null
  },
  {
    id: 10, category: 'women', brand: 'Global Desi',
    name: 'Printed Maxi Skirt',
    price: 1299, originalPrice: 2499, discount: 48,
    img: 'https://images.unsplash.com/photo-1496217590455-aa63a8550c23?w=400&auto=format&fit=crop',
    badge: 'Bestseller'
  },
  {
    id: 11, category: 'women', brand: 'H&M',
    name: 'Ribbed Knit Crop Top',
    price: 799, originalPrice: 1799, discount: 56,
    img: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&auto=format&fit=crop',
    badge: null
  },
  {
    id: 12, category: 'women', brand: 'Biba',
    name: 'Anarkali Churidar Suit',
    price: 1899, originalPrice: 3999, discount: 53,
    img: 'https://images.unsplash.com/photo-1511631117838-b9ad2e71d2b3?w=400&auto=format&fit=crop',
    badge: 'Sale'
  },
 
  // FOOTWEAR
  {
    id: 13, category: 'footwear', brand: 'Nike',
    name: 'Air Max 270 Sneakers',
    price: 6499, originalPrice: 9999, discount: 35,
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop',
    badge: 'Top Pick'
  },
  {
    id: 14, category: 'footwear', brand: 'Adidas',
    name: 'Stan Smith White Shoes',
    price: 5999, originalPrice: 8999, discount: 33,
    img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&auto=format&fit=crop',
    badge: 'Classic'
  },
  {
    id: 15, category: 'footwear', brand: 'Steve Madden',
    name: 'Block Heel Sandals',
    price: 2499, originalPrice: 4999, discount: 50,
    img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&auto=format&fit=crop',
    badge: 'New'
  },
  {
    id: 16, category: 'footwear', brand: 'Puma',
    name: 'RS-X Running Shoes',
    price: 4299, originalPrice: 7499, discount: 43,
    img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&auto=format&fit=crop',
    badge: null
  },
 
  // ACCESSORIES
  {
    id: 17, category: 'accessories', brand: 'Fossil',
    name: 'Analog Leather Watch',
    price: 4999, originalPrice: 9999, discount: 50,
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop',
    badge: 'Bestseller'
  },
  {
    id: 18, category: 'accessories', brand: 'Baggit',
    name: 'Sling Crossbody Bag',
    price: 1299, originalPrice: 2999, discount: 57,
    img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&auto=format&fit=crop',
    badge: 'Sale'
  },
  {
    id: 19, category: 'accessories', brand: 'Ray-Ban',
    name: 'Wayfarer Sunglasses',
    price: 3999, originalPrice: 6999, discount: 43,
    img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&auto=format&fit=crop',
    badge: null
  },
  {
    id: 20, category: 'accessories', brand: 'Accessorize',
    name: 'Layered Necklace Set',
    price: 599, originalPrice: 1299, discount: 54,
    img: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&auto=format&fit=crop',
    badge: 'Hot Deal'
  }
];
 
// =========================================================
// STATE
// =========================================================
let cart = [];
let wishlist = [];
let currentFilter = 'all';
let currentSort = 'default';
let visibleCount = 8;
let filteredProducts = [...allProducts];
 
// =========================================================
// INIT
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initCountdown();
  renderProducts();
  initFilterButtons();
  initSortSelect();
  initCartModal();
  initLoadMore();
  initSearch();
});
 
// =========================================================
// SLIDER
// =========================================================
let currentSlide = 0;
let slideInterval;
 
function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
 
  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
 
  prevBtn.addEventListener('click', () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  });
  nextBtn.addEventListener('click', () => {
    goToSlide((currentSlide + 1) % slides.length);
  });
 
  slideInterval = setInterval(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, 5000);
}
 
function goToSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  clearInterval(slideInterval);
  slideInterval = setInterval(() => goToSlide((currentSlide + 1) % slides.length), 5000);
}
 
// =========================================================
// COUNTDOWN TIMER
// =========================================================
function initCountdown() {
  // 5 hours 32 minutes from now
  const endTime = new Date().getTime() + (5 * 60 * 60 + 32 * 60) * 1000;
 
  function updateTimer() {
    const now = new Date().getTime();
    const diff = endTime - now;
 
    if (diff <= 0) {
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
      return;
    }
 
    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
 
    document.getElementById('hours').textContent = String(h).padStart(2, '0');
    document.getElementById('minutes').textContent = String(m).padStart(2, '0');
    document.getElementById('seconds').textContent = String(s).padStart(2, '0');
  }
 
  updateTimer();
  setInterval(updateTimer, 1000);
}
 
// =========================================================
// PRODUCTS RENDER
// =========================================================
function getFilteredSorted() {
  let products = currentFilter === 'all'
    ? [...allProducts]
    : allProducts.filter(p => p.category === currentFilter);
 
  // Search filter
  const query = document.getElementById('searchInput')?.value.toLowerCase().trim();
  if (query) {
    products = products.filter(p =>
      p.brand.toLowerCase().includes(query) ||
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
  }
 
  if (currentSort === 'price-low') products.sort((a, b) => a.price - b.price);
  else if (currentSort === 'price-high') products.sort((a, b) => b.price - a.price);
  else if (currentSort === 'discount') products.sort((a, b) => b.discount - a.discount);
 
  return products;
}
 
function renderProducts() {
  filteredProducts = getFilteredSorted();
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';
 
  const toShow = filteredProducts.slice(0, visibleCount);
 
  if (toShow.length === 0) {
    grid.innerHTML = '<p style="color:var(--muted);grid-column:1/-1;text-align:center;padding:40px;">No products found.</p>';
    document.getElementById('loadMoreBtn').style.display = 'none';
    return;
  }
 
  toShow.forEach((product, i) => {
    const card = createProductCard(product, i);
    grid.appendChild(card);
  });
 
  // Show/hide load more
  document.getElementById('loadMoreBtn').style.display =
    visibleCount >= filteredProducts.length ? 'none' : 'block';
}
 
function createProductCard(product, animIndex) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.style.animationDelay = `${animIndex * 0.06}s`;
 
  const isWishlisted = wishlist.some(w => w.id === product.id);
 
  card.innerHTML = `
    <div class="product-img-wrap">
      ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
      <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${product.id}" title="Add to Wishlist">
        <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
      </button>
      <img src="${product.img}" alt="${product.brand} ${product.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&auto=format&fit=crop'" />
    </div>
    <div class="product-info">
      <div class="product-brand">${product.brand}</div>
      <div class="product-name">${product.name}</div>
      <div class="product-price">
        <span class="price-current">₹${product.price.toLocaleString('en-IN')}</span>
        <span class="price-original">₹${product.originalPrice.toLocaleString('en-IN')}</span>
        <span class="price-discount">(${product.discount}% off)</span>
      </div>
    </div>
    <button class="add-to-cart-btn" data-id="${product.id}">ADD TO BAG</button>
  `;
 
  // Wishlist toggle
  card.querySelector('.wishlist-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleWishlist(product, e.currentTarget);
  });
 
  // Add to cart
  card.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    addToCart(product);
  });
 
  return card;
}
 
// =========================================================
// FILTERS & SORT
// =========================================================
function initFilterButtons() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      visibleCount = 8;
      renderProducts();
    });
  });
}
 
function initSortSelect() {
  document.getElementById('sortSelect').addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderProducts();
  });
}
 
// =========================================================
// LOAD MORE
// =========================================================
function initLoadMore() {
  document.getElementById('loadMoreBtn').addEventListener('click', () => {
    visibleCount += 4;
    renderProducts();
  });
}
 
// =========================================================
// SEARCH
// =========================================================
function initSearch() {
  const input = document.getElementById('searchInput');
  let debounceTimer;
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      currentFilter = 'all';
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
      visibleCount = 8;
      renderProducts();
    }, 300);
  });
}
 
// =========================================================
// CART
// =========================================================
function initCartModal() {
  document.getElementById('cartBtn').addEventListener('click', () => {
    document.getElementById('cartOverlay').classList.add('open');
    renderCart();
  });
  document.getElementById('closeCart').addEventListener('click', () => {
    document.getElementById('cartOverlay').classList.remove('open');
  });
  document.getElementById('cartOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('cartOverlay')) {
      document.getElementById('cartOverlay').classList.remove('open');
    }
  });
}
 
function addToCart(product) {
  const existing = cart.find(c => c.id === product.id);
  if (existing) {
    showToast(`${product.brand} is already in your bag!`);
    return;
  }
  cart.push({ ...product });
  updateCartBadge();
  showToast(`✓ Added to Bag — ${product.brand} ${product.name}`);
}
 
function removeFromCart(productId) {
  cart = cart.filter(c => c.id !== productId);
  updateCartBadge();
  renderCart();
}
 
function updateCartBadge() {
  document.getElementById('cartCount').textContent = cart.length;
}
 
function renderCart() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
 
  if (cart.length === 0) {
    container.innerHTML = `<div class="empty-state"><i class="fas fa-shopping-bag"></i><p>Your bag is empty</p></div>`;
    footer.style.display = 'none';
    return;
  }
 
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=200&auto=format&fit=crop'"/>
      <div class="cart-item-info">
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i></button>
    </div>
  `).join('');
 
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById('cartTotal').textContent = `₹${total.toLocaleString('en-IN')}`;
  footer.style.display = 'block';
}
 
// =========================================================
// WISHLIST
// =========================================================
function toggleWishlist(product, btn) {
  const idx = wishlist.findIndex(w => w.id === product.id);
 
  if (idx === -1) {
    wishlist.push(product);
    btn.classList.add('active');
    btn.innerHTML = '<i class="fas fa-heart"></i>';
    showToast(`❤️ Added to Wishlist — ${product.brand}`);
  } else {
    wishlist.splice(idx, 1);
    btn.classList.remove('active');
    btn.innerHTML = '<i class="far fa-heart"></i>';
    showToast(`Removed from Wishlist`);
  }
  updateWishlistBadge();
}
 
function updateWishlistBadge() {
  document.getElementById('wishlistCount').textContent = wishlist.length;
}
 
// =========================================================
// TOAST NOTIFICATION
// =========================================================
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}
 
// =========================================================
// SCROLL TO PRODUCTS
// =========================================================
function scrollToProducts() {
  document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth' });
}
 
// =========================================================
// NAV ACTIVE HIGHLIGHT ON SCROLL
// =========================================================
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 60) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
  } else {
    navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
  }
});
 