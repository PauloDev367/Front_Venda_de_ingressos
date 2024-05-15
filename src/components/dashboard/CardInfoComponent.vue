<template>
  <div class="card-info">
    <i :class="icone"></i>
    {{ texto }}
  </div>
</template>


<script>
export default {
  name: "CardInfoComponent",
  props: {
    icone: { require: true, type: String },
    texto: { require: true, type: String },
  },
};
</script>

<style scoped>
.card-info{
  padding: 10px;
  border-radius: 5px;
  background-color: #e6e4e4;
}
</style>