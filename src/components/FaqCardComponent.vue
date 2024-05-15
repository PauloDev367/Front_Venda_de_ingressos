<template>
  <p>
    <button
      type="button"
      data-toggle="collapse"
      data-target="#collapseExample"
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      <span>Titulo da pergunta</span>
      <i class="fa-solid fa-caret-right"></i>
    </button>
  </p>
  <div class="collapse mb-3" id="collapseExample">
    <div class="card card-body">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
      richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
      anderson cred nesciunt sapiente ea proident.
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqCardComponent",
};
</script>

<style scoped>
button {
  display: flex;
  justify-content: space-between;
  align-content: flex-end;
  width: 100%;
  padding: 10px;
  border: 1px solid #000;
  background-color: transparent;
}
</style>