<template>
  <div
    class="modal fade"
    id="modalPagarIngresso"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalPagarIngressoLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <h4>Titulo do ingresso</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vel
              odio, consequatur laudantium reprehenderit voluptatum inventore
              sapiente ipsam natus tempora maxime corrupti, nihil repellat culpa
              a eius nam exercitationem aliquid!
            </p>
            <h6>
              <i class="fa-solid fa-ticket"></i>
              Total disponível: 100
            </h6>
            <h6>
              <i class="fa-solid fa-calendar-days"></i>
              Dia do evento: 01/01/2025
            </h6>
            <h6><i class="fa-solid fa-location-dot"></i> Local do do evento</h6>
            <h6><i class="fa-solid fa-money-bill"></i> R$ 00,00</h6>
            <hr />

            <h5 class="modal-title" id="modalPagarIngressoLabel">
              Escolha a opção de pagamento
            </h5>
          </div>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="opcoes-pagamento">
            <button
              class="btn-pagamento"
              :class="pagarCartao == true ? 'active' : ''"
              @click="escolherPagamento('card')"
            >
              <i class="fa-solid fa-credit-card"></i>
            </button>
            <button
              class="btn-pagamento"
              :class="pagarPix == true ? 'active' : ''"
              @click="escolherPagamento('pix')"
            >
              <i class="fa-brands fa-pix"></i>
            </button>
          </div>
          <hr />
          <PagarPixComponent v-if="pagarPix"></PagarPixComponent>
          <PagarCartaoComponent v-if="pagarCartao"></PagarCartaoComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PagarCartaoComponent from "./pagamentos/PagarCartaoComponent.vue";
import PagarPixComponent from "./pagamentos/PagarPixComponent.vue";

export default {
  name: "ModalComprarIngresso",
  components: {
    PagarPixComponent,
    PagarCartaoComponent,
  },
  props: {
    ingressoId: { required: true, type: Number },
  },
  data() {
    return {
      pagarPix: false,
      pagarCartao: false,
    };
  },
  methods: {
    escolherPagamento(value) {
      this.limparAtivos();
      value == "pix" ? (this.pagarPix = true) : (this.pagarCartao = true);
    },
    limparAtivos() {
      this.pagarCartao = false;
      this.pagarPix = false;
    },
  },
};
</script>

<style scoped>
.opcoes-pagamento .btn-pagamento {
  border: 2px solid var(--azul);
  font-size: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  background-color: transparent;
  color: var(--azul);
  transition: all 0.3s;
}
.opcoes-pagamento .btn-pagamento:nth-child(1) {
  margin-right: 10px;
}
.opcoes-pagamento .btn-pagamento.active,
.opcoes-pagamento .btn-pagamento:hover {
  background-color: var(--azul);
  color: #fff;
}
</style>