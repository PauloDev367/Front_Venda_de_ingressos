<template>
  <div class="alert alert-danger" v-if="!contaFinalizada">
    <span>
      Para ter acesso a todos os recursos da plataforma,
      <strong>
        <a href="#" class="text-danger">
          finalize seu cadastro
          <i class="fa-solid fa-arrow-up-right-from-square"></i>.
        </a>
      </strong>
    </span>
  </div>
</template>



<script>
export default {
  name: "CadastroFinalizadoAlertComponent",
  data(){
    return {
      contaFinalizada: false
    }
  },
  created(){
    this.contaFoiFinalizada();
  },
  methods:{
    contaFoiFinalizada(){
      this.contaFinalizada = false;
    }
  }
};
</script>

<style scoped>
main {
  padding: 60px 0;
}
</style>