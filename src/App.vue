<template>
  <header>
        <a href="/">
            <h1>Tienda Yailuz</h1>
        </a>
        <nav class="enlaces">
            <a class="enlace" href="/">Inicio</a>
            <a class="enlace" href="/productos">Productos</a>
            <a class="enlace" href="/contactanos">Contactanos</a>
            <a class="iconos" href="#"><img src="../src/assets/carrito-de-compras.gif" alt=""></a>
            <a class="iconos" href="/principaladmin"><img src="../src/assets/usuario.gif" alt=""></a>
        </nav>
    </header>
  <router-view/>
    <footer>
        <div class="iconos2">
            <a class="red" href="">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
                <p>Facebook</p>
            </a>
            <a class="red" href="">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                  </svg>
                <p>Instagram</p>
            </a>
            <a class="red" href="">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-messenger" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                    <path d="M8 13l3 -2l2 2l3 -2" />
                  </svg>
                <p>Messenger</p>
            </a>
            <a class="red" href="">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                  </svg>
                <p>Whatsapp</p>
            </a>
        </div>
        <p>&copy; Derechos Reservados a Yailuz</p>
    </footer>
</template>

<style>
:root {
    --color1: #212121;
    --color2: #0D7377;
    --color3: #CCF3EE;
    --color4: #99C4C8;    
    --blanco: #FFFFFF;
    --negro: #000000;
    --gris: #444444;
}
*,body {
    margin: 0;
    padding: 0;
}
header {
    background-color: var(--color2);
    padding: 20px 5px 0 5px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-bottom: 10px;
}
header a {
    text-decoration: none;
    line-height: 60px;
}
h1 {
    color: var(--blanco);
    font-size: 35px; 
    line-height: 52px;
    letter-spacing: 3px;
    text-align: center;
}
.enlaces {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.enlace {
    color: var(--blanco);
    padding: 0 15px;
    font-size: 19px;
    letter-spacing: 1px;
}
.iconos {    
    padding: 10px 10px 0 10px;
}
.iconos img {
    width: 45px;
    border-radius: 50%;
}
footer {
    margin-top: 10px;    
    background-color: var(--color2);
}
footer p {
    text-align: center;
    color: var(--blanco);
    font-size: 21px;
    letter-spacing: 4px;
    padding: 15px 5px;
}
.iconos2 {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border-bottom: 5px solid var(--blanco);
}
.iconos2 a{
    padding: 20px;
    text-decoration: none;
}
.red {
    display: flex;
}
</style>
