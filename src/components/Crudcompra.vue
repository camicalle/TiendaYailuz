<template>
    <div class="divinput">
        <a href="/crearcompra">Crear Compra</a>
        <a href="/crud">Volver</a>
    </div>
     <div class="divtabla">
        <table style="width: 90%;">
            <thead>
                <tr>
                <th>ID</th>
                <th>ID Cliente</th>
                <th>Fecha</th>
                <th>Forma de Pago</th>
                <th>Cantidad</th>
                <th>Estado</th>
                <th>Acciones</th>
                </tr>
            </thead>

            <tr v-for="compra in compras" :key="compra.id">
                <td>{{ compra.id }}</td>
                <td>{{ compra.idcliente }}</td>
                <td>{{ compra.fecha }}</td>
                <td>{{ compra.forma_pago }}</td>
                <td>{{ compra.cantidad }}</td>
                <td>{{ compra.estado }}</td>
                <td>
                <div>
                    <input class="editar" type="button" @click.prevent="actualizar(compra.id)" value="Editar">
                    <input type="button" @click.prevent="borrar(compra.id)" value="Borrar">
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
            compras: [],
        };
    },
    created() {
        fetch("https://62e2d99e3891dd9ba8f0f315.mockapi.io/compra")
        .then((response) => response.json())
        .then((data)=> (this.compras = data))
        .catch((error) => {
            console.log(error);
        })
    },
    methods: {
        borrar(id) {
            if(window.confirm("Eliminar el elemento")) {
                fetch("https://62e2d99e3891dd9ba8f0f315.mockapi.io/compra/" + id, {
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
            this.$router.push('/actualizarcompra/' + id);
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