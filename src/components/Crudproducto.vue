<template>
    <div class="divinput">
        <a href="/crearproducto">Crear Producto</a>
        <a href="/crud">Volver</a>
    </div>
     <div class="divtabla">
        <table style="width: 90%;">
            <thead>
                <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>URL Imagen</th>
                <th>Descripción</th>
                <th>Sección</th>
                <th>Categoria</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Acciones</th>
                </tr>
            </thead>

            <tr v-for="producto in productos" :key="producto.id">
                <td>{{ producto.id }}</td>
                <td>{{ producto.nombre }}</td>
                <td>{{ producto.img }}</td>
                <td>{{ producto.descripcion }}</td>
                <td>{{ producto.seccion }}</td>
                <td>{{ producto.categoria }}</td>
                <td>{{ producto.cantidad }}</td>
                <td>{{ producto.precio }}</td>
                <td>
                <div>
                    <input class="editar" type="button" @click.prevent="actualizar(producto.id)" value="Editar">
                    <input type="button" @click.prevent="borrar(producto.id)" value="Borrar">
                </div>
                </td>
            </tr>
            </table>
     </div>
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
        borrar(id) {
            if(window.confirm("Eliminar el elemento")) {
                fetch("https://62e2d99e3891dd9ba8f0f315.mockapi.io/producto/" + id, {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json; charset=utf-8",
                    },
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);        
                    location.reload()
                });
            }
        },
        actualizar(id){
            this.$router.push('/actualizarproducto/' + id);
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
.divinput {
    display: block;
    margin: 20px;
}
.divinput a {
    margin: 50px;
    background-color: var(--color2);
    text-decoration: none;
    padding: 9px;
    border-radius: 15px;
    color: var(--blanco);
}
.divtabla {
   display: flex;
   justify-content: center;
}
table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}
th, td {
    padding: 10px;
}
th {
    text-align: left;
}
</style>