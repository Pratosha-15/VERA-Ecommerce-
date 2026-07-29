/* ==========================
   NOVACART - SCRIPT.JS
   Part 1
========================== */

// Loading Screen
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 800);
});

// Product Data
const products = [
{
id:1,
name:"Wireless Headphones",
price:2499,
discount:"20% OFF",
rating:4.8,
category:"Electronics",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
},
{
id:2,
name:"Premium Sneakers",
price:3999,
discount:"30% OFF",
rating:4.7,
category:"Fashion",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
},
{
id:3,
name:"Smart Watch",
price:5999,
discount:"15% OFF",
rating:4.9,
category:"Electronics",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
},
{
id:4,
name:"Luxury Sofa",
price:14999,
discount:"25% OFF",
rating:4.6,
category:"Furniture",
image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600"
},
{
id:5,
name:"Beauty Kit",
price:1299,
discount:"35% OFF",
rating:4.5,
category:"Beauty",
image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600"
},
{
id:6,
name:"Football",
price:899,
discount:"10% OFF",
rating:4.4,
category:"Sports",
image:"https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600"
},
{
id:7,
name:"Programming Book",
price:699,
discount:"18% OFF",
rating:4.8,
category:"Books",
image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600"
},
{
id:8,
name:"Toy Car",
price:499,
discount:"40% OFF",
rating:4.5,
category:"Toys",
image:"https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600"
}
];

// Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// Render Products
function renderProducts(containerId){

const container = document.getElementById(containerId);

if(!container) return;

container.innerHTML="";

products.forEach(product=>{

container.innerHTML += `
<div class="product-card reveal">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p class="price">₹${product.price}</p>

<p>${product.discount}</p>

<p>⭐ ${product.rating}</p>

<button onclick="addToCart(${product.id})">
Add To Cart
</button>

</div>
`;

});

}

renderProducts("productContainer");
renderProducts("dealsContainer");
renderProducts("recommendedContainer");
renderProducts("bestContainer");

// Cart
function addToCart(id){

const product = products.find(p=>p.id===id);

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

updateCart();

}

function updateCart(){

const cartCount=document.getElementById("cartCount");

const cartItems=document.getElementById("cartItems");

const total=document.getElementById("cartTotal");

cartCount.textContent=cart.length;

cartItems.innerHTML="";

let sum=0;

cart.forEach(item=>{

sum+=item.price;

cartItems.innerHTML+=`
<div class="cart-item">
<p>${item.name}</p>
<p>₹${item.price}</p>
</div>
`;

});

total.textContent=sum;

}

updateCart();
/* ==========================
   NOVACART - SCRIPT.JS
   Part 2
========================== */

// Wishlist
function toggleWishlist(id){

const product = products.find(p => p.id === id);

const exists = wishlist.find(item => item.id === id);

if(exists){

wishlist = wishlist.filter(item => item.id !== id);

}else{

wishlist.push(product);

}

localStorage.setItem("wishlist", JSON.stringify(wishlist));

document.getElementById("wishlistCount").textContent = wishlist.length;

}

document.getElementById("wishlistCount").textContent = wishlist.length;


// Hero Slider

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

slides.forEach(slide => slide.classList.remove("active"));

slides[index].classList.add("active");

}

function nextSlide(){

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

showSlide(currentSlide);

}

function prevSlide(){

currentSlide--;

if(currentSlide < 0){

currentSlide = slides.length - 1;

}

showSlide(currentSlide);

}

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if(nextBtn){

nextBtn.addEventListener("click", nextSlide);

}

if(prevBtn){

prevBtn.addEventListener("click", prevSlide);

}

setInterval(nextSlide,3000);


// Countdown Timer

let totalSeconds = 5 * 60 * 60;

function updateTimer(){

let hours = Math.floor(totalSeconds / 3600);

let minutes = Math.floor((totalSeconds % 3600)/60);

let seconds = totalSeconds % 60;

document.getElementById("hours").textContent =
String(hours).padStart(2,"0");

document.getElementById("minutes").textContent =
String(minutes).padStart(2,"0");

document.getElementById("seconds").textContent =
String(seconds).padStart(2,"0");

if(totalSeconds > 0){

totalSeconds--;

}

}

setInterval(updateTimer,1000);

updateTimer();


// Search Filter

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const value = this.value.toLowerCase();

document.querySelectorAll(".product-card").forEach(card=>{

card.style.display =
card.innerText.toLowerCase().includes(value)
? "block"
: "none";

});

});

}


// Dark Mode

const themeToggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){

document.body.classList.add("dark");

}

if(themeToggle){

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("dark");

localStorage.setItem(

"theme",

document.body.classList.contains("dark")
? "dark"
: "light"

);

});

}


// Mobile Menu

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navbar.classList.toggle("show");

});

}


// Cart Sidebar

const cartButton = document.getElementById("cartButton");

const cartSidebar = document.getElementById("cartSidebar");

const closeCart = document.getElementById("closeCart");

if(cartButton){

cartButton.onclick = ()=>{

cartSidebar.classList.add("active");

};

}

if(closeCart){

closeCart.onclick = ()=>{

cartSidebar.classList.remove("active");

};

}
/* ==========================
   NOVACART - SCRIPT.JS
   Part 3
========================== */

// Back To Top Button

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backTop.style.display = "block";

    }else{

        backTop.style.display = "none";

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



// Scroll Reveal Animation

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



// Active Navigation Highlight

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});



// Smooth Scrolling

navLinks.forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

        if(navbar.classList.contains("show")){

            navbar.classList.remove("show");

        }

    });

});



// Keyboard Accessibility

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        cartSidebar.classList.remove("active");

        if(navbar){

            navbar.classList.remove("show");

        }

    }

});



// Newsletter

const subscribeBtn = document.querySelector(".newsletter button");

if(subscribeBtn){

    subscribeBtn.addEventListener("click", () => {

        const email = document.querySelector(".newsletter input").value;

        if(email.trim() !== ""){

            alert("🎉 Thank you for subscribing!");

            document.querySelector(".newsletter input").value = "";

        }else{

            alert("Please enter your email address.");

        }

    });

}



// Shop Now Buttons

document.querySelectorAll(".hero-content button").forEach(button => {

    button.addEventListener("click", () => {

        document.getElementById("products").scrollIntoView({

            behavior:"smooth"

        });

    });

});



// Initialise

updateCart();

showSlide(currentSlide);

console.log("✅ NovaCart loaded successfully!");
