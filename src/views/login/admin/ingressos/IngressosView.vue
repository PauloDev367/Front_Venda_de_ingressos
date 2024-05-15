<template>
  <UserLayout>
    <main>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <button
              class="btn btn-info"
              data-toggle="modal"
              data-target="#modalCadastrarIngresso"
            >
              <i class="fa-regular fa-square-plus"></i>
              Adicionar
            </button>
          </div>
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h2>Ingressos do cadastrados</h2>
              </div>
              <div class="card-body overflow-x-scroll">
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th>#</th>
                      <th>Titulo</th>
                      <th>Quantidade vendido</th>
                      <th>Ativo</th>
                      <th>Local do evento</th>
                      <th>Dia do evento</th>
                      <th>Preço unitário</th>
                      <th>Promoção</th>
                      <th>Preço promoção</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TrIngressoComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                      @vaiEditarOIngresso="editarIngresso"
                    />
                    <TrIngressoComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                      @vaiEditarOIngresso="editarIngresso"
                    />
                    <TrIngressoComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                      @vaiEditarOIngresso="editarIngresso"
                    />
                    <TrIngressoComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                      @vaiEditarOIngresso="editarIngresso"
                    />
                    <TrIngressoComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                      @vaiEditarOIngresso="editarIngresso"
                    />
                    <TrIngressoComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                      @vaiEditarOIngresso="editarIngresso"
                    />
                    <TrIngressoComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                      @vaiEditarOIngresso="editarIngresso"
                    />
                    <TrIngressoComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                      @vaiEditarOIngresso="editarIngresso"
                    />
                    <TrIngressoComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                      @vaiEditarOIngresso="editarIngresso"
                    />
                    <TrIngressoComponent
                      @verDescricaoCompleta="verDescricaoCompleta"
                      @vaiEditarOIngresso="editarIngresso"
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <ModalEditarIngressoComponent :idIngresso="idIngressoEditar" />
    <InfosCompletasComponent
      v-if="mostrarInfosExtras"
      @fecharBarraLateral="fecharBarraLateral"
      :idIngresso="idIngressoInfos"
    />
    <ModalCriarIngressoComponent />
  </UserLayout>
</template>

<script>
import TrIngressoComponent from "@/components/ingressos/TrIngressoComponent.vue";
import UserLayout from "./../../../UserLayout.vue";
import ModalEditarIngressoComponent from "@/components/ingressos/ModalEditarIngressoComponent.vue";
import InfosCompletasComponent from "@/components/ingressos/InfosCompletasComponent.vue";
import ModalCriarIngressoComponent from "@/components/ingressos/ModalCriarIngressoComponent.vue";

export default {
  components: {
    UserLayout,
    TrIngressoComponent,
    ModalEditarIngressoComponent,
    InfosCompletasComponent,
    ModalCriarIngressoComponent,
  },
  name: "IngressosView",
  data() {
    return {
      idIngressoEditar: 0,
      idIngressoInfos: 0,
      mostrarInfosExtras: false,
    };
  },
  methods: {
    editarIngresso(id) {
      this.idIngressoEditar = id;
    },
    fecharBarraLateral() {
      this.mostrarInfosExtras = false;
    },
    verDescricaoCompleta(id) {
      this.idIngressoInfos = id;
      this.mostrarInfosExtras = true;
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