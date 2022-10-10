<template>
    <section class="caballeros">
        <article class="principalcontenido">
            <h2>Productos</h2>
        </article>
    </section>
    <section class="caballeros">
        <div class="articuloscaba">
            <article class="articulocaba" v-for="producto in productos" :key="producto.id">
                <img v-bind:src="producto.img" alt="">
                <h3>{{producto.nombre}}</h3>
                <input type="button" value="Examinar" @click.prevent="verproducto(producto.id)">
            </article>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            productos: [],
        };
    },
    created() {
        fetch("https://62e2d99e3891dd9ba8f0f315.mockapi.io/producto")
        .then((response) => response.json())
        .then((data)=> (this.productos = data))
        .catch((error) => {
            console.log(error);
        })
    },
    methods: {
        verproducto(id){
            this.$router.push('/producto/' + id);
        },
    }
    
}
</script>

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
.articulocaba input {
    text-decoration: none;
    margin: 0 auto;
    font-size: 20px;
    color: var(--blanco);
    padding: 5px 20px 10px 20px;
    background-color: var(--color4);
    letter-spacing: 2px;
    border: none;
} 
.articulocaba input:hover {
    cursor: pointer;
} 
</style>

