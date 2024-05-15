<template>
  =
  <div
    class="modal fade"
    id="modalNovoAdmin"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalNovoAdminLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalNovoAdminLabel">
            Cadastrar no administrador
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="">
            <h2>Criar um nova conta</h2>
            <div class="form-group">
              <label>Nome:</label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>E-mail</label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>Senha:</label>
              <input type="password" class="form-control" />
            </div>
            <div class="form-group">
              <label>Confirmar senha:</label>
              <input type="password" class="form-control" />
            </div>
            <div class="text-right">
              <button class="btn btn-info">
                Cadastrar
                <i class="fa-regular fa-square-plus"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalAdicionarNovoAdmin",
};
</script>

<style scoped>
</style>