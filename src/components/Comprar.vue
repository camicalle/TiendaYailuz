<template>
    <section class="sform">
        <article class="form">
            <div class="divformulario">
                <h2 class="titulof">Datos Personales</h2>
                <form action="#" class="formulario" @submit.prevent="datospersonales">
                    <input type="text" placeholder="Primer Nombre" v-model="cliente.nombre1">
                    <input type="text" placeholder="Segundo Nombre" v-model="cliente.nombre2">
                    <input type="text" placeholder="Primer Apellido" v-model="cliente.apellido1">
                    <input type="text" placeholder="Segundo Apellido" v-model="cliente.apellido2">
                    <input type="email" placeholder="Correo electronico" v-model="cliente.correo">
                    <input type="tel" placeholder="Telefono" v-model="cliente.telefono">
                    <input type="text" placeholder="Direccion" v-model="cliente.direccion">
                    <a href="#">
                        <div class="contactar">
                            <input type="submit" value="Seguir">
                        </div>
                    </a>
                </form>
            </div>
        </article>
    </section>
</template>

<script>
export default {
    data() {
    return {
      cliente: {
        nombre1: "",
        nombre2: "",
        apellido1: "",
        apellido2: "",
        correo: "",        
        telefono: "",
        direccion: "",
                
      },
    };
  },
  methods: {
    datospersonales(event) {
      fetch('https://62e2d99e3891dd9ba8f0f315.mockapi.io/cliente/', {
        method: "POST",
        headers: {
          "content-type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(this.cliente),
      })
      .then((response) => response.json())
      .then((data) => {       
        this.$router.push("/cantidad");
      });
    },
  },
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
.sform {
    width: 100%;
    display: flex;
    justify-content: center;    
    background-image: url(../../src/assets/formulario.jpg);
    background-size: cover;
    background-position: center center;
}
.form {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 400px;
    margin: 20px;
    -webkit-box-shadow: -1px 2px 5px 0px rgba(0,0,0,0.44);
    -moz-box-shadow: -1px 2px 5px 0px rgba(0,0,0,0.44);
    box-shadow: -1px 2px 5px 0px rgba(0,0,0,0.44);
}
.divformulario {
    padding: 40px;
    background-color: var(--blanco);
    opacity: 0.9;
}
.divformulario h2 {
    text-align: center;
    font-size: 28px;  
}
.formulario {
    padding: 20px 0;
    text-align: center;
}
.formulario input {
    margin: 31px 0;
    border: none;
    outline: none;
    border-bottom: 2px solid var(--color4);
    width: 90%;    
    padding-bottom: 10px;
}
.contactar input{
    background-color: var(--color4);
    text-align: center;
    width: 90%;
    margin: 0 auto;
    padding: 10px 0;
    color: var(--blanco);
}
.contactar input:hover {
    background-color: var(--color3);
    cursor: pointer;
    color: var(--color1);
}
.formulario a{
    
    text-decoration: none;  
}
.formulario h3 {  
    font-size: 21px;    
    color: var(--negro);
}
::placeholder {
    font-size: 16px;
}
.formulario input:hover {
    border-bottom: 2px solid var(--color2);
}
</style>