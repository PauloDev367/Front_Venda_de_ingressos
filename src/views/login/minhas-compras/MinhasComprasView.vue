<template>
  <UserLayout>
    <main>
      <div class="container">
        <CadastroFinalizadoAlertComponent />
        <div class="row">
          <div class="col-12">
            <h2>Minhas compras</h2>
            <div class="area-compras">
              <CardCompra
                @carregarMaisInformacoes="carregarTodasInformacoes"
              ></CardCompra>
              <CardCompra
                @carregarMaisInformacoes="carregarTodasInformacoes"
              ></CardCompra>
              <CardCompra
                @carregarMaisInformacoes="carregarTodasInformacoes"
              ></CardCompra>
              <CardCompra
                @carregarMaisInformacoes="carregarTodasInformacoes"
              ></CardCompra>
              <CardCompra
                @carregarMaisInformacoes="carregarTodasInformacoes"
              ></CardCompra>
            </div>
            <div class="text-center">
              <button class="btn btn-success">
                Carregar mais
                <i class="fa-solid fa-arrows-rotate"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <DadosCompletosCompra
      @fecharMenuLateral="fecharInfosExtras"
      :ativado="mostrarInformacoesExtras"
    />
  </UserLayout>
</template>



<script>
import CadastroFinalizadoAlertComponent from "@/components/CadastroFinalizadoAlertComponent.vue";
import UserLayout from "./../../UserLayout.vue";
import CardCompra from "./CardCompra.vue";
import DadosCompletosCompra from "./DadosCompletosCompra.vue";

export default {
  components: {
    UserLayout,
    CadastroFinalizadoAlertComponent,
    CardCompra,
    DadosCompletosCompra,
  },
  data() {
    return {
      mostrarInformacoesExtras: false,
    };
  },
  methods: {
    fecharInfosExtras() {
      this.mostrarInformacoesExtras = false;
    },
    carregarTodasInformacoes() {
      this.mostrarInformacoesExtras = true;
    },
  },
  name: "MinhasComprasView",
};
</script>

<style scoped>
main {
  padding: 60px 0;
  min-height: 90vh;
}
.card h2 {
  font-size: 1.5rem;
}
</style>