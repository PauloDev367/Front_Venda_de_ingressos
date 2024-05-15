<template>
  <div class="card-compra">
    <div class="card">
      <div class="card-header">
        <h3>11 de março</h3>
      </div>
      <div class="card-body">
        <div class="main-infos">
          <img
            src="https://www.aen.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2023-02/img_2646_1.jpg"
            alt="Foto ingresso"
          />
          <div class="descri">
            <h5 class="status active">Status</h5>
            <h4>Titulo do ingresso</h4>
            <h6>Total pago: R$ 80,00</h6>
            <h6>Quantidade comprada: 1</h6>
          </div>
        </div>
        <button class="btn btn-info" @click="verMaisInfos">
          Mais informações <i class="fa-solid fa-circle-info"></i>
        </button>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "CardCompra",
  emits: ["carregarMaisInformacoes"],
  methods:{
    verMaisInfos(){
      const cardId = 1;
      this.$emit("carregarMaisInformacoes", cardId);
    }
  }
};
</script>

<style scoped>
.card-compra {
  margin-bottom: 10px;
}
.card-compra img{
  width: 150px;
  margin-right: 20px;
}
.card-compra h3{
  font-size: 1rem;
  margin-bottom: 0;
}
.card-compra .main-infos{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.card-compra .main-infos .descri .status{
  font-size: 1.2rem;
  display: inline-block;
  padding: 5px;
}
.card-compra .main-infos .descri .status.active{
  color: #7DCE13;
  font-weight: bold;
}
.card-compra .main-infos .descri .status.cancelled{
  color: #FF1E00;
  font-weight: bold;
}
.card-compra .main-infos .descri h4{
  font-size: 1.3rem;
}
.card-compra .card-body{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>