<template>
  <UserLayout>
    <main>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <form action="">
              <h2>Criar um nova conta</h2>
              <div class="form-group">
                <label>Nome:</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>E-mail</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>Senha:</label>
                <input type="password" class="form-control" />
              </div>
              <div class="form-group">
                <label>Confirmar senha:</label>
                <input type="password" class="form-control" />
              </div>
              <button class="btn btn-info btn-block">Login</button>
              <a href="/login" class="d-block mt-2">Já tem uma conta?</a>
            </form>
          </div>
        </div>
      </div>
    </main>
  </UserLayout>
</template>



<script>
import UserLayout from "./../UserLayout.vue";

export default {
  components: {
    UserLayout,
  },
  name: "CadastrarView",
};
</script>

<style scoped>
main {
  padding: 80px 0;
  min-height: 90vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
}

main .container,
main .container .row {
  display: flex;
  justify-content: center;
  align-content: center;
}
main form {
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fff;
  border-radius: 5px;
  width: 600px;
  margin: 0 auto;
}

main form h2 {
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.1rem;
}
</style>