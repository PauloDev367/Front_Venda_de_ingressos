<template>
  <form action="">
    <h2>Pagar com cartão</h2>
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
          <label>Número do cartão</label>
          <input type="text" class="form-control" placeholder="Número" />
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="form-group">
          <label>Bandeira</label>
          <input type="text" class="form-control" placeholder="Bandeira" />
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="form-group">
          <label>Mês de vencimento</label>
          <select class="form-control" name="mesVencimento" id="mesVencimento">
            <option selected="">01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
            <option>06</option>
            <option>07</option>
            <option>08</option>
            <option>09</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="form-group">
          <label for="">Ano de vencimento</label>
          <select class="form-control" name="anoVencimento" id="anoVencimento">
            <option>2023</option>
            <option>2024</option>
            <option selected="">2025</option>
            <option>2026</option>
            <option>2027</option>
            <option>2028</option>
            <option>2029</option>
            <option>2030</option>
            <option>2031</option>
            <option>2032</option>
            <option>2033</option>
            <option>2034</option>
            <option>2035</option>
          </select>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <label>Código de segurança (cvv)</label>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="CVV" />
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="form-group">
          <label>Opções de parcelamento</label>
          <select class="form-control" name="anoVencimento" id="anoVencimento">
            <option selected disabled>Opções de parcelamento</option>
          </select>
        </div>
      </div>
    </div>
    <button class="btn btn-info">Pagar</button>
  </form>
</template>


<script>
export default {
  name: "PagarCartaoComponent",
};
</script>