<template>
    <div class="divinput">
        <a href="/crearproveedor">Crear Proveedor</a>
        <a href="/crud">Volver</a>
    </div>
     <div class="divtabla">
        <table style="width: 90%;">
            <thead>
                <tr>
                <th>ID</th>
                <th>Nif</th>
                <th>Nombre</th>
                <th>Acciones</th>
                </tr>
            </thead>

            <tr v-for="proveedor in proveedores" :key="proveedor.id">
                <td>{{ proveedor.id }}</td>
                <td>{{ proveedor.nif }}</td>
                <td>{{ proveedor.nombre }}</td>
                <td>
                <div>
                    <input class="editar" type="button" @click.prevent="actualizar(proveedor.id)" value="Editar">
                    <input type="button" @click.prevent="borrar(proveedor.id)" value="Borrar">
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
            proveedores: [],
        };
    },
    created() {
        fetch("https://62e2d99e3891dd9ba8f0f315.mockapi.io/proveedor")
        .then((response) => response.json())
        .then((data)=> (this.proveedores = data))
        .catch((error) => {
            console.log(error);
        })
    },
    methods: {
        borrar(id) {
            if(window.confirm("Eliminar el elemento")) {
                fetch("https://62e2d99e3891dd9ba8f0f315.mockapi.io/proveedor/" + id, {
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
            this.$router.push('/actualizarproveedor/' + id);
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