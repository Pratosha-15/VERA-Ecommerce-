/* =========================
   NovaCart Premium E-Commerce
   Main Stylesheet
========================= */


:root{

    --primary:#2563eb;
    --secondary:#7c3aed;
    --accent:#f59e0b;

    --bg:#ffffff;
    --card:#f8fafc;
    --text:#111827;
    --muted:#64748b;

    --shadow:0 10px 30px rgba(0,0,0,.08);

    --radius:20px;

}



.dark{

    --bg:#0f172a;
    --card:#1e293b;
    --text:#f8fafc;
    --muted:#cbd5e1;

}




*{

    margin:0;
    padding:0;
    box-sizing:border-box;
    scroll-behavior:smooth;

}



body{

    font-family:'Poppins',sans-serif;

    background:var(--bg);

    color:var(--text);

    transition:.3s;

}





/* Loader */


.loader{

    position:fixed;

    inset:0;

    background:var(--bg);

    display:flex;

    justify-content:center;

    align-items:center;

    z-index:9999;

}



.loader div{

    width:50px;

    height:50px;

    border:5px solid #ddd;

    border-top-color:var(--primary);

    border-radius:50%;

    animation:spin 1s linear infinite;

}


@keyframes spin{

    to{

        transform:rotate(360deg);

    }

}






/* HEADER */


.header{

    position:sticky;

    top:0;

    z-index:1000;

    display:flex;

    align-items:center;

    justify-content:space-between;

    padding:18px 6%;

    background:rgba(255,255,255,.8);

    backdrop-filter:blur(15px);

    box-shadow:var(--shadow);

}



.dark .header{

    background:rgba(15,23,42,.8);

}



.logo{

    font-size:32px;

    font-weight:800;

}



.logo span{

    color:var(--primary);

}





.search-container{

    display:flex;

    width:35%;

    background:var(--card);

    border-radius:30px;

    overflow:hidden;

}



.search-container input{

    flex:1;

    padding:14px 20px;

    border:none;

    outline:none;

    background:transparent;

    color:var(--text);

}



.search-container button{

    width:50px;

    border:none;

    background:var(--primary);

    color:white;

}





.navbar{

    display:flex;

    gap:25px;

}



.navbar a{

    text-decoration:none;

    color:var(--text);

    font-weight:500;

    position:relative;

}



.navbar a.active,
.navbar a:hover{

    color:var(--primary);

}



.navbar a.active::after{

    content:"";

    position:absolute;

    bottom:-8px;

    left:0;

    width:100%;

    height:3px;

    background:var(--primary);

}





.header-actions{

    display:flex;

    gap:15px;

    align-items:center;

}



.header-actions button{

    border:none;

    background:none;

    color:var(--text);

    cursor:pointer;

    font-size:18px;

    position:relative;

}



.header-actions span{

    position:absolute;

    top:-12px;

    right:-12px;

    background:var(--primary);

    color:white;

    border-radius:50%;

    font-size:11px;

    padding:3px 6px;

}



.login-btn{

    background:var(--primary)!important;

    color:white!important;

    padding:10px 25px;

    border-radius:30px;

}



.menu-btn{

    display:none;

}







/* HERO */


.hero{

    height:85vh;

    position:relative;

    overflow:hidden;

}



.slide{

    display:none;

    height:100%;

    position:relative;

}



.slide.active{

    display:block;

    animation:fade 1s;

}



.slide img{

    width:100%;

    height:100%;

    object-fit:cover;

}



.hero-content{

    position:absolute;

    top:50%;

    left:8%;

    transform:translateY(-50%);

    color:white;

    max-width:600px;

}



.hero-content h1{

    font-size:55px;

    margin-bottom:20px;

}



.hero-content p{

    font-size:20px;
