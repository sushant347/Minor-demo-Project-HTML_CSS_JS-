# UrbanWave 🌊 | E-Commerce Frontend

![Project Status](https://img.shields.io/badge/Status-Active-brightgreen)  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

**UrbanWave** is a stylish, responsive, and feature-rich frontend for an online fashion retailer. It allows users to browse clothes, footwear, and accessories, manage a shopping cart, and simulate a checkout process. The project focuses on a smooth user experience with custom animations and local storage persistence.

## 🚀 Live Demo
> **(https://sushant347.github.io/Minor-demo-Project-HTML_CSS_JS-/index.html)** 
---

## ✨ Key Features

* **Responsive Design:** Fully optimized for desktops, tablets, and mobile devices using CSS Grid and Flexbox.
* **Dynamic Shopping Cart:**
    * Add/Remove items.
    * Adjust quantities.
    * Real-time total calculation (Subtotal, Shipping, Discounts).
    * **Data Persistence:** Cart items are saved in `localStorage`, so data isn't lost on refresh.
* **Interactive UI Components:**
    * **Product Modal:** Quick-view popup with size/color selection and image zoom.
    * **Search with Suggestions:** Auto-complete search bar for products and categories.
    * **Animations:** Custom CSS animations including "falling cloth" effect when adding to cart and toast notifications.
* **Category Pages:** Dedicated pages for Clothes, Footwear, Accessories, and Bags.
* **Checkout Simulation:**
    * Mock payment gateway integration including **eSewa**, **Khalti**, and Bank Transfer.
* **Contact Form:** Includes JavaScript validation for names, phone numbers (Nepal format), and emails.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3
* **Scripting:** Vanilla JavaScript (ES6+)
* **Icons:** FontAwesome 6.5.0
* **Assets:** Hosted via GitHub for reliable loading.

---

## 📂 Project Structure

```text
UrbanWave/
├── index.html          # Homepage with Hero section and Featured Products
├── about.html          # Team details and Brand story
├── products.html       # General products listing
├── clothes.html        # Clothing category
├── footwear.html       # Footwear category
├── accessories.html    # Accessories category
├── bags.html           # Bags category
├── cart.html           # Shopping cart and Checkout logic
├── wishlist.html       # User wishlist
├── Contact Final.html  # Contact form with Google Maps embed
├── info.html           # Additional information
├── style.css           # Global styles (if applicable)
├── script.js           # Global logic (Cart, Search, Modals)
└── images/             # Project assets