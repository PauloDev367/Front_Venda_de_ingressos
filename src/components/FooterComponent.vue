<template>
  <footer>
    <p>
      Desenvolvido por
      <strong><a href="#">Perseus Tech</a></strong>
    </p>
  </footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterComponent",
});
</script>

<style scoped>
footer {
  padding: 10px;
  background-color: var(--preto);
  color: #fff;
  text-align: center;
}
footer a {
  color: #fff;
}

p {
  margin: 0;
}
</style>