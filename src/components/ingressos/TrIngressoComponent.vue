<template>
  <tr>
    <td>
      <span>1</span>
      <div>
        <button @click="descricaoCompleta" class="d-block text-success text-sm">
          <i class="fa-solid fa-circle-info"></i>
          Descrição completa
        </button>
        <button
          href="#"
          class="d-block text-info text-sm"
          data-toggle="modal"
          data-target="#modalEditarIngresso"
          @click="editar"
        >
          <i class="fa-solid fa-pen-to-square"></i>
          Editar
        </button>
      </div>
    </td>
    <td>Titulo do ingresso muito fod ...</td>
    <td>
      <span class="badge badge-info">85/100</span>
    </td>
    <td>
      <div class="checkbox-wrapper-3">
        <input type="checkbox" id="cbx-3" checked />
        <label for="cbx-3" class="toggle">
          <span></span>
        </label>
      </div>
    </td>
    <td>Local do evento</td>
    <td>01/01/2024 15:00</td>
    <td>R$ 20,00</td>
    <td><span class="badge badge-danger">Não</span></td>
    <td><span class="badge badge-danger">Não</span></td>
  </tr>
</template>

<script>
export default {
  name: "TrIngressoComponent",
  emits: ["vaiEditarOIngresso", "verDescricaoCompleta"],
  methods: {
    editar() {
      const idIngresso = Math.random();
      this.$emit("vaiEditarOIngresso", idIngresso);
    },
    descricaoCompleta() {
      const idIngresso = Math.random();
      this.$emit("verDescricaoCompleta", idIngresso);
    },
  },
};
</script>

<style scoped>
button {
  background-color: transparent;
  border: none;
  padding: 0;
}
button:hover {
  text-decoration: underline;
}
</style>