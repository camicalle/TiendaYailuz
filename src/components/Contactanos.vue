<template>
    <section class="principal">
        <article class="principalcontenido">
            <h2>Contactanos desde nuestras redes sociales</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consectetur, excepturi illo tempore corporis vel aspernatur, ut ad itaque quod ab nulla maxime explicabo praesentium libero inventore atque? Sed est fugit reprehenderit ad, suscipit, ullam explicabo nesciunt qui voluptas, vel voluptatibus dolorum ut! Deleniti velit quaerat dolore earum esse eius accusantium. Cumque pariatur asperiores atque esse aut. Quia magnam libero vero saepe voluptatum? Commodi sapiente esse distinctio libero unde hic iste magnam, labore incidunt suscipit iure beatae, ducimus ipsa itaque quidem? Incidunt laborum doloribus inventore nobis quis, rem praesentium quae, consequatur pariatur voluptas natus, labore harum ipsa provident! Nostrum, nobis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cupiditate quo facilis culpa delectus eligendi aut nesciunt ipsa nostrum est.
            </p>
            <div class="cardscontenido">
                <div class="imagenesprincipal">
                    <img src="../../src/assets/redessociales.jpg" alt="">
                </div>
            </div>
        </article>
    </section>
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
.principalcontenido h2{
    margin-bottom: 10px;
    margin-top: 20px;
    padding: 0 10px;
    font-size: 50px;
    color: var(--gris);
    text-align: center;
}
.principalcontenido p {
    font-size: 23px;
    text-align: justify;
    padding: 20px 30px;
}
.cardscontenido {
    width: 100%; 
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.imagenesprincipal {    
    padding: 0 10px;
}
.imagenesprincipal img{
    width: 100%;
    border-radius: 5px;
}

.articuloscaba {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
}
.articulocaba {
    width: 300px;
    margin: 10px 20px;
    -webkit-box-shadow: -1px 2px 5px 0px rgba(0,0,0,0.44);
    -moz-box-shadow: -1px 2px 5px 0px rgba(0,0,0,0.44);
    box-shadow: -1px 2px 5px 0px rgba(0,0,0,0.44);
    text-align: center;
}
.articulocaba img{
    width: 100%;
}
.articulocaba h3 {
    font-size: 25px;
    color: var(--gris);
    padding: 10px 5px;
}
.articulocaba a {
    text-decoration: none;
    margin: 0 auto;
    font-size: 20px;
    color: var(--blanco);
    padding: 5px 20px 10px 20px;
    background-color: var(--color4);
    letter-spacing: 2px;
} 
</style>