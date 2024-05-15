<template>
  <div
    class="modal fade"
    id="modalEditarIngresso"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalEditarIngressoLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalEditarIngressoLabel">
            Editar ingresso
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
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label>Foto do ingresso:</label>
                  <input type="file" class="form-control p-0 border" />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label>Titulo:</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label>Local do evento:</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="form-group">
                  <label>Quantidade para vender:</label>
                  <input type="number" class="form-control" />
                </div>
              </div>

              <div class="col-12 col-md-4">
                <div class="form-group">
                  <label>Dia do evento:</label>
                  <input type="date" class="form-control" />
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="form-group">
                  <label>Preço de venda:</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-12 col-md-2">
                <div class="form-group">
                  <span>Promoção?</span>
                  <div class="checkbox-wrapper-3">
                    <input
                      type="checkbox"
                      id="cbx-4"
                      @change="precoPromocao"
                    />
                    <label for="cbx-4" class="toggle">
                      <span></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label>Preço da promoção:</label>
                  <input
                    type="text"
                    class="form-control"
                    :disabled="!ehPromocao"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label>Descrição:</label>
                  <textarea rows="5" class="form-control"></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">
            Excluir
            <i class="fa-solid fa-trash"></i>
          </button>
          <button type="button" class="btn btn-info">
            Atualizar
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalEditarIngressoComponent",
  data() {
    return {
      ehPromocao: false,
    };
  },
  methods: {
    precoPromocao() {
      this.ehPromocao = !this.ehPromocao;
    },
  },
  props: {
    idIngresso: { required: true, type: Number },
  },
};
</script>

<style scoped>
</style>