<template>
  <tr>
    <td>
      1
      <button @click="descricaoCompleta" class="d-block text-success text-sm">
        <i class="fa-solid fa-circle-info"></i>
        Descrição completa
      </button>
    </td>
    <td>Nome</td>
    <td>email@email.com</td>
    <td>01/01/2024</td>
    <td><span class="badge badge-success">Aprovado</span></td>
    <td>1</td>
    <td>Titulo do ingresso fod...</td>
    <td>01/01/2024</td>
    <td>Local do evento</td>
    <td>Não</td>
    <td>R$ 80,00</td>
    <td>R$ 00,00</td>
    <td>R$ 80,00</td>
  </tr>
</template>

<script>
export default {
  name: "TrInfosComponent",
  emits: ["verDescricaoCompleta"],
  methods: {
    descricaoCompleta() {
      const idIngresso = Math.random();
      this.$emit("verDescricaoCompleta", idIngresso);
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  background-color: transparent;
  padding: 0;
}
button:hover {
  text-decoration: underline;
}
</style>