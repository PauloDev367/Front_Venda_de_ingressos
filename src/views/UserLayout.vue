<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <a class="navbar-brand" href="/">Logo</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/#promos">Promoções</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#todos-ingressos">Ingressos</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Área admin
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/admin/dashboard">Dashboard</a>
              <a class="dropdown-item" href="/admin/ingressos">Ingressos</a>
              <a class="dropdown-item" href="/admin/usuarios">Usuários</a>
              <a class="dropdown-item" href="/admin/vendas">Vendas</a>
            </div>
          </li>
          <li class="">
            <div class="dropdown" v-if="logado">
              <button
                class="dropdown-toggle"
                type="button"
                id="dropAccountInfo"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa-solid fa-user"></i>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropAccountInfo">
                <a class="dropdown-item" href="/minhas-compras"
                  >Minhas compras</a
                >
                <a class="dropdown-item" href="/meus-dados">Dados da conta</a>
                <a class="dropdown-item" href="#">Sair</a>
              </div>
            </div>
            <h6 v-if="!logado" class="nav-link">
              <a href="/login">Login</a> | <a href="#">Criar conta</a>
            </h6>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <slot></slot>

  <FooterComponent></FooterComponent>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "UserLayout",
  data() {
    return {
      logado: true,
    };
  },
  components: {
    FooterComponent,
  },
};
</script>

<style scoped>
button.dropdown-toggle {
  background-color: transparent;
  border: none;
  color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
#top-info {
  padding: 10px;
  position: relative;
  z-index: 99;
}
.navbar .nav-link {
  color: #fff !important;
}
.navbar {
  z-index: 10;
  background-color: var(--preto);
  position: sticky;
  top: 0;
  left: 0;
}
#top-info .infos {
  display: flex;
  justify-content: flex-end;
  align-content: center;
}
#top-info .infos h1,
h6 {
  margin: 0;
}
#top-info .infos h1 {
  font-size: 1.1rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  #top-info .infos h6,
  #top-info .infos h1 {
    font-size: 0.7rem;
  }
}
</style>