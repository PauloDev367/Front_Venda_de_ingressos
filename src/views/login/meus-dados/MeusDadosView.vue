<template>
  <UserLayout>
    <main>
      <div class="container">
        <CadastroFinalizadoAlertComponent />
        <div class="row">
          <div class="col-12">
            <div class="infos-gerais">
              <img
                src="https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg"
                alt="Foto de perfil"
                class="foto-perfil"
              />
              <div class="nome-email">
                <h3>Nome do usuário</h3>
                <h4>email_conta@email.com.br</h4>
                <h5>
                  Status:
                  <span class="text-danger">Cadastro não finalizado</span>
                </h5>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h2>Atualizar foto de perfil</h2>
              </div>
              <div class="card-body">
                <form action="" enctype="multipart/form-data">
                  <div class="form-group">
                    <label>Nova foto de perfil:</label>
                    <input type="file" class="form-control p-0" />
                  </div>
                  <div class="text-right">
                    <button class="btn btn-info">
                      Atualizar <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h2>Atualizar dados da conta</h2>
              </div>
              <div class="card-body">
                <form action="">
                  <div class="row">
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>Nome:</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>E-mail:</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>CPF:</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>Número de telefone:</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-md-4">
                      <div class="form-group">
                        <label>Data de aniversário:</label>
                        <input type="date" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>Endereço:</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-md-2">
                      <div class="form-group">
                        <label>Número:</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>Bairro:</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>Código postal:</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>Cidade:</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>Estado:</label>
                        <select name="" id="" class="form-control">
                          <option value="AC">Acre</option>
                          <option value="AL">Alagoas</option>
                          <option value="AP">Amapá</option>
                          <option value="AM">Amazonas</option>
                          <option value="BA">Bahia</option>
                          <option value="CE">Ceará</option>
                          <option value="DF">Distrito Federal</option>
                          <option value="ES">Espírito Santo</option>
                          <option value="GO">Goiás</option>
                          <option value="MA">Maranhão</option>
                          <option value="MT">Mato Grosso</option>
                          <option value="MS">Mato Grosso do Sul</option>
                          <option value="MG">Minas Gerais</option>
                          <option value="PA">Pará</option>
                          <option value="PB">Paraíba</option>
                          <option value="PR">Paraná</option>
                          <option value="PE">Pernambuco</option>
                          <option value="PI">Piauí</option>
                          <option value="RJ">Rio de Janeiro</option>
                          <option value="RN">Rio Grande do Norte</option>
                          <option value="RS">Rio Grande do Sul</option>
                          <option value="RO">Rondônia</option>
                          <option value="RR">Roraima</option>
                          <option value="SC">Santa Catarina</option>
                          <option value="SP">São Paulo</option>
                          <option value="SE">Sergipe</option>
                          <option value="TO">Tocantins</option>
                          <option value="EX">Estrangeiro</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <button class="btn btn-info">
                      Atualizar <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h2>Atualizar senha</h2>
              </div>
              <div class="card-body">
                <form action="">
                  <div class="form-group">
                    <label>Nova senha:</label>
                    <input type="password" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label>Confirmar nova senha:</label>
                    <input type="password" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label>Senha antiga:</label>
                    <input type="password" class="form-control" />
                  </div>
                  <div class="text-right">
                    <button class="btn btn-info">
                      Atualizar <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </UserLayout>
</template>



<script>
import CadastroFinalizadoAlertComponent from "@/components/CadastroFinalizadoAlertComponent.vue";
import UserLayout from "./../../UserLayout.vue";

export default {
  components: {
    UserLayout,
    CadastroFinalizadoAlertComponent,
  },
  name: "MeusDadosView",
};
</script>

<style scoped>
main {
  padding: 60px 0;
}

.infos-gerais {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-bottom: 10px;
}
.infos-gerais .foto-perfil {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
.infos-gerais .nome-email {
  margin-left: 15px;
}
.infos-gerais .nome-email h3,
.infos-gerais .nome-email h4,
.infos-gerais .nome-email h5 {
  margin-bottom: 2px;
}

.infos-gerais .nome-email h3 {
  font-size: 1.5rem;
}

.infos-gerais .nome-email h4 {
  font-size: 1.3rem;
}

.infos-gerais .nome-email h5 {
  font-size: 0.9rem;
}

.infos-gerais .nome-email h5 span {
  font-weight: bold;
}
.card {
  margin: 10px 0;
}
.card h2 {
  font-size: 1.5rem;
}
</style>