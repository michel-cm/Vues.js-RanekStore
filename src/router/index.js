import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProdutoItem from "../views/ProdutoItem.vue";
import LoginView from "../views/LoginView.vue";
import UsuarioView from "../views/Usuario/UsuarioView.vue";
import UsuarioProdutos from "../views/Usuario/UsuarioProdutos.vue";
import UsuarioVendas from "../views/Usuario/UsuarioVendas.vue";
import UsuarioCompras from "../views/Usuario/UsuarioCompras.vue";
import UsuarioEditar from "../views/Usuario/UsuarioEditar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/produto/:id",
    name: "produto",
    component: ProdutoItem,
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/usuario",
    component: UsuarioView,
    children: [
      {
        path: "",
        name: "usuario",
        component: UsuarioProdutos,
      },
      {
        path: "compras",
        name: "compras",
        component: UsuarioCompras,
      },
      {
        path: "vendas",
        name: "vendas",
        component: UsuarioVendas,
      },
      {
        path: "editar",
        name: "usuario-editar",
        component: UsuarioEditar,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
