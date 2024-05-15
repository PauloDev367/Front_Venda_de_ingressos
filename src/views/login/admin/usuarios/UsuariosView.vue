<template>
  <UserLayout>
    <main>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-12 col-md-2">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="usuarioAdmi"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="usuarioAdmi">
                    Usuários administradores
                  </label>
                </div>
              </div>
              <div class="col-12 col-md-2">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="usuarioClien"
                    value="option1"
                  />
                  <label class="form-check-label" for="usuarioClien">
                    Usuários clientes
                  </label>
                </div>
              </div>
              <div class="col-12 col-md-1 ml-auto">
                <button
                  class="btn btn-info"
                  data-toggle="modal"
                  data-target="#modalNovoAdmin"
                >
                  Adicionar
                  <i class="fa-regular fa-square-plus"></i>
                </button>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h2>Usuários do sistemas</h2>
              </div>
              <div class="card-body overflow-x-scroll">
                <FiltrosDePesquisaComponent></FiltrosDePesquisaComponent>
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th>#</th>
                      <th>Nome</th>
                      <th>E-mail</th>
                      <th>Perfil (role)</th>
                      <th>Data de cadastro</th>
                      <th>CPF</th>
                      <th>Número de telefone</th>
                      <th>Aniversário</th>
                      <th>Registro completo</th>
                      <th>Endereço</th>
                      <th>Número</th>
                      <th>Bairro</th>
                      <th>Código de área</th>
                      <th>Cidade</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TrUsuarioComponent />
                    <TrUsuarioComponent />
                    <TrUsuarioComponent />
                    <TrUsuarioComponent />
                    <TrUsuarioComponent />
                    <TrUsuarioComponent />
                    <TrUsuarioComponent />
                    <TrUsuarioComponent />
                    <TrUsuarioComponent />
                    <TrUsuarioComponent />
                    <TrUsuarioComponent />
                    <TrUsuarioComponent />
                    <TrUsuarioComponent />
                    <TrUsuarioComponent />
                    <TrUsuarioComponent />
                    <TrUsuarioComponent />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <ModalAdicionarNovoAdmin />
  </UserLayout>
</template>

<script>
import TrUsuarioComponent from "@/components/usuario/TrUsuarioComponent.vue";
import UserLayout from "./../../../UserLayout.vue";
import FiltrosDePesquisaComponent from "@/components/usuario/FiltrosDePesquisaComponent.vue";
import ModalAdicionarNovoAdmin from "@/components/usuario/ModalAdicionarNovoAdmin.vue";

export default {
  name: "UsuariosView",
  components: {
    UserLayout,
    TrUsuarioComponent,
    FiltrosDePesquisaComponent,
    ModalAdicionarNovoAdmin,
  },
};
</script>

<style scoped>
.container {
  max-width: 90%;
}
main {
  min-height: 90vh;
}
</style>