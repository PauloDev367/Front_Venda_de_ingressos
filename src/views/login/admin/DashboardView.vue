<template>
  <UserLayout>
    <main>
      <div class="container">
        <div class="row">
          <div class="col-12 p-0 mb-4">
            <div class="row">
              <div class="col-12 col-md-4">
                <CardInfoComponent
                  icone="fa-solid fa-user-plus"
                  texto="32 novos usuário"
                />
              </div>
              <div class="col-12 col-md-4">
                <CardInfoComponent
                  icone="fa-solid fa-money-bill"
                  texto="1000 vendas nos ultimos 3 meses"
                />
              </div>
              <div class="col-12 col-md-4">
                <CardInfoComponent
                  icone="fa-solid fa-ticket"
                  texto="10 ingressos ativos"
                />
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <span>Ingressos mais vendidos</span>
            <BarraComponent />
          </div>
          <div class="col-12 col-md-6">
            <span>Nº de novos usuários nos ultimos 3 meses</span>
            <LinhaComponent />
          </div>
          <div class="col-12 col-md-4 mt-3">
            <span>Nº pedidos cancelados e aprovados</span>
            <PizzaComponent />
          </div>
          <div class="col-12 col-md-8 mt-5">
            <span>Últimos contatos</span>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  </UserLayout>
</template>

<script>
import BarraComponent from "@/components/graficos/BarraComponent.vue";
import LinhaComponent from "@/components/graficos/LinhaComponent.vue";
import PizzaComponent from "@/components/graficos/PizzaComponent.vue";
import UserLayout from "./../../UserLayout.vue";
import CardInfoComponent from "@/components/dashboard/CardInfoComponent.vue";

export default {
  name: "DashboardView",
  components: {
    BarraComponent,
    UserLayout,
    LinhaComponent,
    CardInfoComponent,
    PizzaComponent,
  },
};
</script>

<style>
.container {
  max-width: 90%;
}
main {
  padding: 60px 0;
}
</style>