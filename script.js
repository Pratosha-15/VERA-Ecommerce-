
// PRODUCT DATA

const products = [

{
id:1,
name:"Premium Smart Watch",
price:4999,
category:"Electronics",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
},

{
id:2,
name:"Luxury Sneakers",
price:2999,
category:"Fashion",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
},

{
id:3,
name:"Wireless Headphones",
price:3999,
category:"Electronics",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
},

{
id:4,
name:"Designer Handbag",
price:2499,
category:"Fashion",
image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
},

{
id:5,
name:"Modern Chair",
price:5999,
category:"Home",
image:"https://images.unsplash.com/photo-1503602642458-232111445657"
},

{
id:6,
name:"Beauty Kit",
price:1999,
category:"Beauty",
image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348"
}

];





// STORAGE

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];





// LOAD PRODUCTS

function displayProducts(id){

let container=document.getElementById(id);

container.innerHTML="";


products.forEach(product=>{


container.innerHTML += `

<div class="product-card">


<i class="fa-solid fa-heart wishlist"
onclick="addWishlist(${product.id})"></i>


<img src="${product.image}">


<h3>${product.name}</h3>


<p>₹${product.price}</p>


<button onclick="addCart(${product.id})">
Add To Cart
</button>


</div>

`;


});


}



displayProducts("featuredProducts");
displayProducts("bestProducts");
displayProducts("recommendedProducts");








// CART FUNCTIONS


function addCart(id){


let product=products.find(p=>p.id===id);


cart.push(product);


localStorage.setItem("cart",JSON.stringify(cart));


updateCart();


showToast("Added to cart");

}




function updateCart(){


document.getElementById("cartCount").innerText=cart.length;


let items=document.getElementById("cartItems");


items.innerHTML="";


let total=0;


cart.forEach((item,index)=>{


total+=item.price;


items.innerHTML+=`

<div class="cart-item">

<span>
${item.name}
</span>


<span>
₹${item.price}
</span>

</div>

`;


});


document.getElementById("cartTotal").innerText=total;


}


updateCart();







// WISHLIST


function addWishlist(id){


let product=products.find(p=>p.id===id);


wishlist.push(product);


localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);


document.getElementById("wishCount").innerText=wishlist.length;


showToast("Added to wishlist");


}



document.getElementById("wishCount").innerText=wishlist.length;







// CART SIDEBAR


cartBtn.onclick=()=>{

cartSidebar.classList.add("active");

}


closeCart.onclick=()=>{

cartSidebar.classList.remove("active");

}






// WISHLIST SIDEBAR


wishlistBtn.onclick=()=>{

wishlistSidebar.classList.add("active");

}


closeWishlist.onclick=()=>{

wishlistSidebar.classList.remove("active");

}








// DARK MODE


themeToggle.onclick=()=>{


document.body.classList.toggle("dark");


let mode=document.body.classList.contains("dark");


localStorage.setItem(
"darkMode",
mode
);


}





if(localStorage.getItem("darkMode")=="true"){

document.body.classList.add("dark");

}







// MOBILE MENU


menuBtn.onclick=()=>{


document.querySelector(".navbar")
.classList.toggle("active");


}







// SEARCH


searchBtn.onclick=()=>{


document.querySelector(".search-box")
.style.display="block";


}


searchInput.addEventListener(
"keyup",
()=>{


let value=searchInput.value.toLowerCase();


document.querySelectorAll(".product-card")
.forEach(card=>{


card.style.display=
card.innerText.toLowerCase()
.includes(value)
?
"block"
:
"none";


});


});







// HERO SLIDER


let slides=document.querySelectorAll(".hero-slide");

let current=0;


function showSlide(index){

slides.forEach(
slide=>slide.classList.remove("active")
);


slides[index].classList.add("active");


}



nextSlide.onclick=()=>{


current++;


if(current>=slides.length)
current=0;


showSlide(current);


}



prevSlide.onclick=()=>{


current--;


if(current<0)
current=slides.length-1;


showSlide(current);


}




setInterval(()=>{


current++;


if(current>=slides.length)
current=0;


showSlide(current);


},5000);







// FLASH SALE TIMER


let seconds=45;

let timer=setInterval(()=>{


seconds--;


if(seconds<0)
seconds=59;


document.getElementById("seconds")
.innerText=seconds;


},1000);








// TOAST


function showToast(message){


let toast=document.getElementById("toast");


toast.innerText=message;


toast.style.display="block";


setTimeout(()=>{


toast.style.display="none";


},2000);


}








// BACK TO TOP


window.addEventListener(
"scroll",
()=>{


if(window.scrollY>300)

backTop.style.display="block";


else

backTop.style.display="none";


});


backTop.onclick=()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


}







// CHECKOUT


checkoutBtn.onclick=()=>{


if(cart.length===0){

showToast("Cart is empty");

}

else{

showToast("Order placed successfully");


cart=[];


localStorage.removeItem("cart");


updateCart();


}


   }
