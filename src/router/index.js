import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/login/LoginView.vue';
import CadastrarView from '../views/login/CadastrarView.vue';
import MeusDadosView from '../views/login/meus-dados/MeusDadosView.vue';
import MinhasComprasView from '../views/login/minhas-compras/MinhasComprasView.vue';
import DashboardView from '../views/login/admin/DashboardView.vue';
import IngressosView from '../views/login/admin/ingressos/IngressosView.vue';
import UsuariosView from '../views/login/admin/usuarios/UsuariosView.vue';
import VendasView from '../views/login/admin/vendas/VendasView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/cadastrar',
    name: 'cadastrar',
    component: CadastrarView
  },
  {
    path: "",
    children: [
      {
        path: "/meus-dados",
        name: "meus-dados",
        component: MeusDadosView
      },
      {
        path: "/minhas-compras",
        name: "minhas-compras",
        component: MinhasComprasView
      },
      {
        path: "/admin",
        children: [
          {
            path: "dashboard",
            component: DashboardView
          },
          {
            path: "ingressos",
            component: IngressosView
          },
          {
            path: "usuarios",
            component: UsuariosView
          },
          {
            path: "vendas",
            component: VendasView
          }
        ]
      }
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
