export default {
    component: () => import(/* webpackChunkName: "HomeView" */ '@/modules/home/views/HomeView.vue'),
    children:[
        {
            path: "/", // Default route
            name: "tabla-ordenes",
            component: () => import(/* webpackChunkName: "TablaOrdenesView" */ '@/modules/home/views/TablaOrdenesView.vue'),
        },
        {
            path: "detalle-orden",
            name: "detalle-orden",
            component: () => import(/* webpackChunkName: "DetalleOrdenView" */ '@/modules/home/views/DetalleOrdenView.vue'),
        },
    ]
}