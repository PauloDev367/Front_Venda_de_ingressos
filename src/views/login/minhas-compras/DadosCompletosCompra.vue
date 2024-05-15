<template>
  <div class="dados-completos" v-if="ativado">
    <header>
      <button @click="fecharBarraLateral">
        <i class="fa-regular fa-circle-xmark"></i>
      </button>
    </header>
    <main>
      <h4>Titulo do ingresso</h4>
      <ul>
        <li>
          <strong>Id da compra: </strong>
          #1
        </li>
        <li>
          <strong>Nome do usuário: </strong>
          Nome da Silva
        </li>
        <li>
          <strong>E-mail do usuário: </strong>
          email@usuario.com.br
        </li>
        <li>
          <strong>Dia da compra: </strong>
          01/01/2024
        </li>
        <li>
          <strong>Status da compra: </strong>
          Aprovado
        </li>
        <li>
          <strong>Quantidade comprada: </strong>
          1
        </li>
        <li>
          <strong>Descrição do ingresso: </strong>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
          doloribus quam, illum ullam, atque repellat numquam cumque quo
          consequuntur est adipisci libero provident, modi nam pariatur aut
          maiores quibusdam necessitatibus.
        </li>
        <li>
          <strong>Dia do evento: </strong>
          02/01/2024
        </li>
        <li>
          <strong>Local do evento: </strong>
          Acre
        </li>
        <li>
          <strong>É uma promoção: </strong>
          Não
        </li>
        <li>
          <strong>Preço de venda: </strong>
          R$80,00
        </li>
        <li>
          <strong>Preço da promoção: </strong>
          Não
        </li>
        <li>
          <strong>Total pago: </strong>
          R$80,00
        </li>
        <li>
          <strong>CPF do usuário: </strong>
          111.111.111-11
        </li>
        <li>
          <strong>Telefone do usuário: </strong>
          (35) 98888-8888
        </li>
        <li>
          <strong>Aniversário do usuário: </strong>
          01/01/1999
        </li>
        <li>
          <strong>Nº de parcelas: </strong>
          1x R$ 80,00
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  name: "DadosCompletosCompra",
  emits: ['fecharMenuLateral'],
  props: {
    ativado: { required: false, type: Boolean },
  },
  methods: {
    fecharBarraLateral() {
      this.$emit("fecharMenuLateral");
    },
  },
};
</script>

<style scoped>
.dados-completos {
  position: fixed;
  top: 0;
  right: 0;
  width: 500px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fff;
  height: 100vh;
  z-index: 99;
  padding: 10px;
  overflow-y: scroll;
}
.dados-completos header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.dados-completos header button {
  background-color: transparent;
  border: none;
  font-size: 2rem;
}
.dados-completos main {
  padding-top: 20px;
}
.dados-completos main ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.dados-completos main ul li {
  padding: 10px 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
</style>