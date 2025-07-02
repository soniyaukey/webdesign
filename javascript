<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>ShopEase - Your Ultimate Online Store</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
  <style>
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: #4f46e5;
      border-radius: 10px;
      transition: background 0.3s ease;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #4338ca;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    .category-card {
      transition: all 0.3s ease;
    }
    .category-card:hover img {
      transform: scale(1.05);
    }
    .category-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.15);
    }
    .product-card {
      transition: all 0.3s ease;
      border-radius: 8px;
      overflow: hidden;
    }
    .product-card:hover {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.15);
      transform: translateY(-5px);
    }
    .product-card button {
      transition: all 0.2s ease;
    }
    .product-card button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.25);
    }
    .scroll-to-top {
      display: none;
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 99;
      transition: all 0.3s ease;
      opacity: 0.9;
    }
    .scroll-to-top:hover {
      opacity: 1;
      transform: translateY(-2px);
    }

    @keyframes slide-down {
      0% { opacity: 0; transform: translateY(-20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-slide-down {
      animation: slide-down 0.3s ease-out;
    }
  </style>
</head>
<body class="bg-gray-50">

<!-- Navbar -->
<nav class="bg-white shadow-md sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e6883ed9-425d-452b-964b-1c15b318bc69.png" alt="Logo" class="h-10">
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
          <a href="#" class="border-indigo-500 text-gray-900 px-1 pt-1 border-b-2 text-sm font-medium">Home</a>
          <a href="#products" class="text-gray-500 hover:text-gray-700 px-1 pt-1 border-b-2 text-sm font-medium">Products</a>
          <a href="#categories" class="text-gray-500 hover:text-gray-700 px-1 pt-1 border-b-2 text-sm font-medium">Categories</a>
          <a href="#about" class="text-gray-500 hover:text-gray-700 px-1 pt-1 border-b-2 text-sm font-medium">About Us</a>
          <a href="#contact" class="text-gray-500 hover:text-gray-700 px-1 pt-1 border-b-2 text-sm font-medium">Contact</a>
        </div>
      </div>
      <div class="hidden sm:flex sm:items-center">
        <div class="flex space-x-4 relative">
          <button class="bg-gray-100 p-2 rounded-full text-gray-700 hover:text-indigo-600"><i class="fas fa-search"></i></button>
          <button class="bg-gray-100 p-2 rounded-full text-gray-700 hover:text-indigo-600"><i class="fas fa-user"></i></button>
          <button class="bg-gray-100 p-2 rounded-full text-gray-700 hover:text-indigo-600 relative">
            <i class="fas fa-shopping-cart"></i>
            <span class="cart-count absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
          </button>
        </div>
      </div>
      <div class="-mr-2 flex items-center sm:hidden">
        <button id="mobile-menu-button" class="p-2 text-gray-400 hover:text-gray-500"><i class="fas fa-bars"></i></button>
      </div>
    </div>
  </div>
  <div class="hidden sm:hidden" id="mobile-menu">
    <div class="pt-2 pb-3 space-y-1">
      <a href="#" class="bg-indigo-50 text-indigo-700 block pl-3 pr-4 py-2 text-base font-medium">Home</a>
      <a href="#products" class="text-gray-600 block pl-3 pr-4 py-2 text-base font-medium">Products</a>
      <a href="#categories" class="text-gray-600 block pl-3 pr-4 py-2 text-base font-medium">Categories</a>
      <a href="#about" class="text-gray-600 block pl-3 pr-4 py-2 text-base font-medium">About Us</a>
      <a href="#contact" class="text-gray-600 block pl-3 pr-4 py-2 text-base font-medium">Contact</a>
    </div>
  </div>
</nav>

<!-- Hero -->
<div class="relative bg-white overflow-hidden">
  <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c6f7ebdd-3389-4ea9-961d-a2ee67007113.png" alt="Hero" class="w-full h-96 object-cover">
</div>

<!-- Categories -->
<section class="py-12 bg-white" id="categories">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-extrabold text-gray-900">Shop by Category</h2>
    </div>
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <!-- Repeat for each category -->
      <div class="category-card">
        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e094f328-aa77-4594-a434-2d4c39769d84.png" alt="Electronics" class="rounded shadow w-full h-60 object-cover">
        <h3 class="text-lg mt-4 font-semibold text-gray-700">Electronics</h3>
      </div>
      <!-- Add more categories as needed -->
    </div>
  </div>
</section>

<!-- Products -->
<section class="py-12 bg-gray-50" id="products">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-extrabold text-gray-900">Latest Products</h2>
    </div>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <!-- Product 1 -->
      <div class="product-card bg-white p-4" data-category="electronics">
        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1b9bf7c3-bfdd-4a0c-a106-cc00caab5d33.png" class="w-full h-60 object-cover rounded" alt="Headphones">
        <h3 class="mt-2 text-gray-700 font-semibold">Premium Headphones</h3>
        <p class="text-gray-900 font-bold">$199.99</p>
        <button class="add-to-cart mt-2 w-full bg-indigo-600 text-white py-2 px-4 rounded">Add to Cart</button>
      </div>
      <!-- Add more products -->
    </div>
  </div>
</section>

<!-- Scroll to Top -->
<button id="scrollToTop" class="scroll-to-top bg-indigo-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center">
  <i class="fas fa-arrow-up"></i>
</button>

<!-- JavaScript -->
<script>
  document.getElementById('mobile-menu-button').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('animate-slide-down');
  });

  window.onscroll = function () {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const pos = 300;
    if (document.body.scrollTop > pos || document.documentElement.scrollTop > pos) {
      scrollToTopBtn.style.display = 'flex';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  };

  document.getElementById('scrollToTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const cartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let count = parseInt(cartCount.textContent) || 0;

    cartButtons.forEach(button => {
      button.addEventListener('click', function () {
        count++;
        cartCount.textContent = count;
        const name = this.closest('.product-card').querySelector('h3').textContent;
        alert(`${name} added to cart!`);
      });
    });
  });
</script>

</body>
</html>
