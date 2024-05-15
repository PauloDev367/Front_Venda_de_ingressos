<template>
  <form action="">
    <h2>Pagar com PIX</h2>
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="form-group">
          <label>Total a pagar</label>
          <input
            type="text"
            readonly
            class="form-control"
            placeholder="R$ 80,00"
          />
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="form-group">
          <label>Quantidade da compra</label>
          <input type="number" class="form-control" placeholder="Quantidade" />
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Nome" />
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="CPF" />
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="E-mail" />
        </div>
      </div>
    </div>
    <button class="btn btn-info">Pagar</button>
  </form>
</template>


<script>
export default {
  name: "PagarPixComponent",
};
</script>