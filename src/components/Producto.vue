<template>
    <section class="sproducto">
        <article class="producto">
            <div class="imgproducto">
                <img v-bind:src="productos.img" alt="">
            </div>
            <div class="informacionproducto">
                <h3 v-html="productos.nombre"></h3>
                <p v-html="productos.descripcion"></p>
                <p>Sección: <span v-html="productos.seccion"></span></p>  
                <p>Categoria: <span v-html="productos.categoria"></span></p>     
                <p>Stock: <span v-html="productos.cantidad"></span></p>         
                <h3>Precio: <span v-html="productos.precio"></span></h3>
                <div class="botonesproducto">
                    <a class="comprar" href="/comprar"><p>Comprar Producto</p></a>
                </div>
            </div>
        </article>
    </section>
</template>

<script>
export default {
  data() {
    return {
      productos: {},
    };
  },
  created(){
    fetch('https://62e2d99e3891dd9ba8f0f315.mockapi.io/producto/' + this.$route.params.id)
    .then((response) => response.json())
    .then((data) => (this.productos = data))
    .catch((error) => {
      console.log(error);
    });
  },
};
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
.producto {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
}
.imgproducto {
    width: 350px;
    margin: 0 10px;
}
.imgproducto img {
    width: 100%;
}
.informacionproducto {
    width: 500px;
    margin: 20px 10px;
}
.informacionproducto h3 {
    font-size: 32px;
    text-align: center;
    color: var(--gris);
    margin-bottom: 20px;
}
.informacionproducto p {
    font-size: 19px;
    text-align: justify;
    margin-bottom: 20px;
}
.seleccion {
    display: flex;
    justify-content: center;
}
.informacionproducto select {
    width: 70%;
    padding: 8px 0;
    font-size: 15px;
    border: none;
    -webkit-box-shadow: -1px 2px 5px 0px rgba(0,0,0,0.44);
    -moz-box-shadow: -1px 2px 5px 0px rgba(0,0,0,0.44);
    box-shadow: -1px 2px 5px 0px rgba(0,0,0,0.44);
    outline: none;
}
.informacionproducto option {
    font-size: 16px;
    text-align: center;
}
@media (max-width: 889px) {
    .informacionproducto select {
        width: 100%;
    } 
}
.botonesproducto {
    margin: 30px auto;
    width: 70%
}
@media (max-width: 768px) {
    .botonesproducto {
        width: 100%;
    }    
}
.botonesproducto a {
    text-decoration: none;
}
.agregar p{
    color: #B22727;
    border-radius: 12px;
    border: 2px solid #B22727;
    text-align: center;
    padding: 8px 0;
    
}
.comprar p{
    background-color: #B22727;
    border-radius: 12px;
    color: var(--blanco);
    border: 2px solid #B22727;
    text-align: center;
    padding: 8px 0;
    
}
</style>