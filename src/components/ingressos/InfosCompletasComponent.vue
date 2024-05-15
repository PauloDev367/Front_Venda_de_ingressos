<template>
  <div class="infos-completas">
    <header>
      <button @click="this.$emit('fecharBarraLateral')">
        <i class="fa-regular fa-circle-xmark"></i>
      </button>
    </header>
    <main>
      <ul>
        <li>
          <img
            src="https://www.aen.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2023-02/img_2646_1.jpg"
            alt="Foto do ingresso"
            class="foto-ingresso"
          />
        </li>
        <li><strong>Id:</strong> {{ idIngresso }}</li>
        <li><strong>Quantidade para vender:</strong> 100</li>
        <li>
          <strong>Título:</strong>
          Titulo do ingresso muito foda e completo
        </li>
        <li><strong>Ativo:</strong> Sim</li>
        <li><strong>Dia do evento:</strong> 01/01/2024</li>
        <li><strong>Local do evento:</strong> Rua muito foda, nº 123</li>
        <li><strong>Preço unitário:</strong> R$ 20,00</li>
        <li><strong>Preço de promoção? </strong> Não</li>
        <li><strong>Data de criação:</strong> 01/01/2024</li>
        <li><strong>Data da última atualização:</strong> 02/01/2024</li>
        <li>
          <strong>Quantidade vendida:</strong>
          84
        </li>
        <li>
          <strong>Descrição:</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            quae quam voluptatum laborum architecto temporibus dignissimos, rem
            consequatur at perferendis minus in quidem nostrum inventore nihil
            amet esse ad libero!
          </p>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  name: "InfosCompletasComponent",
  emits: ["fecharBarraLateral"],
  props: {
    idIngresso: { required: true, type: Number },
  },
};
</script>

<style scoped>
.infos-completas {
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

.infos-completas header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.infos-completas header button {
  background-color: transparent;
  border: none;
  font-size: 2rem;
}
.infos-completas main {
  padding-top: 20px;
}
.infos-completas main ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.infos-completas main ul li {
  padding: 10px 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.infos-completas img.foto-ingresso {
  width: 100%;
}
</style>