<template>
  <div class="filtros">
    <div class="buscar mb-3">
      <div class="row align-items-end">
        <div class="col-12 col-md-4 mb-0">
          <div class="form-group mb-0">
            <label>Buscar e-mail</label>
            <input
              type="text"
              class="form-control"
              placeholder="usuario@email..."
            />
          </div>
        </div>
        <div class="col-12 col-md-3 mb-0">
          <button class="btn btn-info">
            Buscar <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "FiltrosDePesquisaComponent",
};
</script>

<style scoped>
h3 {
  font-size: 1rem;
}
</style>