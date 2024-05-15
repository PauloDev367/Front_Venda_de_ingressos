<template>
  <div class="card-ingresso">
    <div class="header">
      <img
        src="https://www.aen.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2023-02/img_2646_1.jpg"
        alt="Foto ingresso"
      />
    </div>
    <div class="content">
      <h3>Titulo do ingresso</h3>
      <h6>
        <i class="fa-solid fa-ticket"></i>
        Total disponível: 100
      </h6>
      <h6>
        <i class="fa-solid fa-calendar-days"></i>
        Dia do evento: 01/01/2025
      </h6>
      <h6><i class="fa-solid fa-location-dot"></i> Local do do evento</h6>
      <a
        href="#"
        @click="emmitEvent"
        data-toggle="modal"
        data-target="#modalPagarIngresso"
      >
        <i class="fa-solid fa-money-bill"></i> R$ 00,00/cada
      </a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardIngressoComponent",
  emits: ["clickingModal"],
  methods: {
    emmitEvent() {
      const id = 1;
      this.$emit("clickingModal", id);
    },
  },
});
</script>

<style scoped>
.card-ingresso {
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 10px;
  border-radius: 5px;
}
.card-ingresso img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.card-ingresso .content {
  padding-top: 10px;
  text-align: center;
}
.card-ingresso .content a {
  display: inline-block;
  background-color: #82cd47;
  width: 100%;
  color: #fff;
  text-align: center;
  padding: 10px;
  text-decoration: none;
}
</style>