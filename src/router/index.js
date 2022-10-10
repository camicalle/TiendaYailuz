import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'principal',
    component: () => import('../components/Principal')
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import('../components/Productos')
  },
  {
    path: '/producto/:id',
    name: 'producto',
    component: () => import('../components/Producto')
  },
  {
    path: '/comprar',
    name: 'comprar',
    component: () => import('../components/Comprar')
  },
  {
    path: '/cantidad',
    name: 'cantidad',
    component: () => import('../components/Cantidad')
  },
  {
    path: '/pagoexitoso',
    name: 'pagoexitoso',
    component: () => import('../components/PagoExitoso')
  },
  {
    path: '/contactanos',
    name: 'contactanos',
    component: () => import('../components/Contactanos')
  },

  {
    path: '/principaladmin',
    name: 'principaladmin',
    component: () => import('../components/Principaladmin')
  },
  {
    path: '/crud',
    name: 'crud',
    component: () => import('../components/Crud')
  },


  {
    path: '/crudproducto',
    name: 'crudproducto',
    component: () => import('../components/Crudproducto')
  },
  {
    path: '/crearproducto',
    name: 'crearproducto',
    component: () => import('../components/Crearproducto')
  },
  {
    path: '/actualizarproducto/:id',
    name: 'actualizarproducto',
    component: () => import('../components/Actualizarproducto')
  },


  {
    path: '/crudcliente',
    name: 'crudcliente',
    component: () => import('../components/Crudcliente')
  },
  {
    path: '/crearcliente',
    name: 'crearcliente',
    component: () => import('../components/Crearcliente')
  },
  {
    path: '/actualizarcliente/:id',
    name: 'actualizarcliente',
    component: () => import('../components/Actualizarcliente')
  },


  {
    path: '/crudproveedor',
    name: 'crudproveedor',
    component: () => import('../components/Crudproveedor')
  },
  {
    path: '/crearproveedor',
    name: 'crearproveedor',
    component: () => import('../components/Crearproveedor')
  },
  {
    path: '/actualizarproveedor/:id',
    name: 'actualizarproveedor',
    component: () => import('../components/Actualizarproveedor')
  },


  {
    path: '/crudcompra',
    name: 'crudcompra',
    component: () => import('../components/Crudcompra')
  },
  {
    path: '/crearcompra',
    name: 'crearcompra',
    component: () => import('../components/Crearcompra')
  },
  {
    path: '/actualizarcompra/:id',
    name: 'actualizarcompra',
    component: () => import('../components/Actualizarcompra')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
