# 🛒 FakeStore E-Commerce

A responsive e-commerce website built with **Vanilla JavaScript**, **HTML5**, **CSS3**, and the **Fake Store API**.

This project was built to practice working with REST APIs, asynchronous JavaScript, DOM manipulation, LocalStorage, and building a complete multi-page e-commerce flow without using any JavaScript framework.

---

## 🚀 Live Demo

🔗 **Coming Soon**

---

## 📸 Preview

> Screenshots will be added soon.

---

## ✨ Features

### 🏠 Home Page
- Hero section with call-to-action
- Product categories
- Featured products
- Navigation to the products page

### 🛍️ Products Page
- Display all products from the API
- Filter products by category
- Responsive product grid
- Product detail navigation

### 📦 Product Details
- Product image
- Product title
- Product category
- Product price
- Product description
- Product rating and review count
- Add product to cart

### 🛒 Shopping Cart
- Display cart products
- Increase product quantity
- Decrease product quantity
- Remove products
- Automatic subtotal calculation
- Automatic total calculation
- Persistent cart using LocalStorage
- Dynamic cart item counter in the navbar

### 🔐 Login
- Frontend login form
- Basic form validation
- Login state stored in LocalStorage
- Protected checkout flow

> **Note:** Authentication in this project is only a frontend demonstration and is not intended for production use.

### 💳 Checkout
- Checkout form
- Customer information
- Order summary
- Automatic order total
- Order submission flow

### ✅ Order Success
- Order confirmation page
- Clear success message
- Return to shopping

### 📱 Responsive Design
The website is designed to work across:

- Desktop
- Tablet
- Mobile

---

## 🛠️ Technologies

| Technology | Usage |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and responsive design |
| JavaScript (ES6+) | Application logic |
| Fetch API | API requests |
| Async / Await | Asynchronous operations |
| REST API | Product data |
| LocalStorage | Cart and login persistence |
| ES Modules | JavaScript code organization |
| Git | Version control |
| GitHub | Project hosting |

---

## 🔌 API

This project uses the **Fake Store API** to retrieve product information.

The API provides:

- Product information
- Product images
- Categories
- Prices
- Ratings
- Descriptions

API:

https://fakestoreapi.com

---

## 📁 Project Structure

```text
fake-store/
│
├── index.html
│
├── pages/
│   ├── products.html
│   ├── product.html
│   ├── cart.html
│   ├── login.html
│   ├── checkout.html
│   └── success.html
│
├── css/
│   ├── style.css
│   ├── navbar.css
│   ├── home.css
│   ├── products.css
│   ├── product.css
│   ├── cart.css
│   ├── login.css
│   └── checkout.css
│
├── js/
│   ├── api.js
│   ├── navbar.js
│   ├── home.js
│   ├── products.js
│   ├── product.js
│   ├── cart.js
│   ├── cart-page.js
│   ├── login.js
│   └── checkout.js
│
└── assets/
    ├── images/
    └── icons/