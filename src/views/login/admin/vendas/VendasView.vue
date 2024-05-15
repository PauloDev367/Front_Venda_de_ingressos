<template>
  <UserLayout>
    <main>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h2>Vendas</h2>
              </div>
              <div class="card-body overflow-x-scroll">
                <table class="table">
                  <thead class="thead thead-dark">
                    <tr>
                      <th>#</th>
                      <th>Nome usuário</th>
                      <th>E-mail usuário</th>
                      <th>Dia da compra</th>
                      <th>Status da compra</th>
                      <th>Quantidade comprada</th>
                      <th>Titulo do ingresso</th>
                      <th>Dia do evento</th>
                      <th>Local do evento</th>
                      <th>É uma promocação?</th>
                      <th>Preço de venda</th>
                      <th>Preço da promocação</th>
                      <th>Total pago</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TrInfosComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                    />
                    <TrInfosComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                    />
                    <TrInfosComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                    />
                    <TrInfosComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                    />
                    <TrInfosComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                    />
                    <TrInfosComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                    />
                    <TrInfosComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                    />
                    <TrInfosComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                    />
                    <TrInfosComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                    />
                    <TrInfosComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                    />
                    <TrInfosComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                    />
                    <TrInfosComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                    />
                    <TrInfosComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                    />
                    <TrInfosComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                    />
                    <TrInfosComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <InfosCompletasComponent
      v-if="!esconderMenuLateral"
      @fecharBarraLateral="fecharBarraLateral"
      :idIngresso="idDesc"
    />
  </UserLayout>
</template>

<script>
import TrInfosComponent from "@/components/vendas/TrInfosComponent.vue";
import UserLayout from "./../../../UserLayout.vue";
import InfosCompletasComponent from "@/components/ingressos/InfosCompletasComponent.vue";

export default {
  components: {
    UserLayout,
    TrInfosComponent,
    InfosCompletasComponent,
  },
  data() {
    return {
      idDesc: 0,
      esconderMenuLateral: true,
    };
  },
  name: "VendasView",
  methods: {
    verDescricaoCompleta(id) {
      this.idDesc = id;
      this.esconderMenuLateral = false;
    },
    fecharBarraLateral() {
      this.esconderMenuLateral = true;
    },
  },
};
</script>

<style scoped>
main {
  padding: 80px 0;
  min-height: 90vh;
}
.container {
  max-width: 90%;
}
</style>