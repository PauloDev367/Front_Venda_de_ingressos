<template>
  <UserLayout>
    <section>
      <MenuHomeComponent></MenuHomeComponent>
    </section>

    <section id="promos">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2>Ingressos em promoção</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ex
              saepe repellendus suscipit fuga distinctio ducimus, quos vitae
              quia vero eius asperiores officia? Modi similique nobis culpa
              nostrum veniam quod.
            </p>
          </div>

          <div class="col-12">
            <div class="area-ingressos">
              <carousel
                v-bind="settings"
                :breakpoints="breakpoints"
                autoplay="4000"
                :wrap-around="true"
              >
                <slide :key="1">
                  <CardIngressoComponent @clickingModal="changeIngressoId">
                  </CardIngressoComponent>
                </slide>
                <slide :key="2">
                  <CardIngressoComponent @clickingModal="changeIngressoId">
                  </CardIngressoComponent>
                </slide>
                <slide :key="3">
                  <CardIngressoComponent @clickingModal="changeIngressoId">
                  </CardIngressoComponent>
                </slide>
                <slide :key="4">
                  <CardIngressoComponent @clickingModal="changeIngressoId">
                  </CardIngressoComponent>
                </slide>
                <slide :key="5">
                  <CardIngressoComponent @clickingModal="changeIngressoId">
                  </CardIngressoComponent>
                </slide>
                <template #addons>
                  <navigation />
                  <pagination />
                </template>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="chamada">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>Garanta aqui o ingresso para o seu próximo show!</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
              minima corporis alias magnam perferendis temporibus odio
              perspiciatis veniam tempora quod repudiandae, atque amet inventore
              placeat optio voluptatem culpa consequuntur. Voluptas! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Cum minima
              corporis alias magnam perferendis temporibus odio perspiciatis
              veniam tempora quod repudiandae, atque amet inventore placeat
              optio voluptatem culpa consequuntur. Voluptas!
            </p>
            <div class="cta">
              <a href="#">Ver ingressos</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="todos-ingressos">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2>Outros ingressos à venda</h2>
          </div>
          <div class="col-12">
            <div class="area-carousel">
              <CardIngressoComponent @clickingModal="changeIngressoId">
              </CardIngressoComponent>
              <CardIngressoComponent @clickingModal="changeIngressoId">
              </CardIngressoComponent>
              <CardIngressoComponent @clickingModal="changeIngressoId">
              </CardIngressoComponent>
              <CardIngressoComponent @clickingModal="changeIngressoId">
              </CardIngressoComponent>
              <CardIngressoComponent @clickingModal="changeIngressoId">
              </CardIngressoComponent>
              <CardIngressoComponent @clickingModal="changeIngressoId">
              </CardIngressoComponent>
            </div>
            <div class="text-center mt-3">
              <div class="cta">
                <a href="#">Carregar mais</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contato">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2>Conheça a empresa</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam expedita laborum maiores, possimus provident saepe
              blanditiis tenetur debitis magnam reiciendis! Ducimus cupiditate
              aperiam distinctio, aut quibusdam quo impedit et dicta!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam expedita laborum maiores, possimus provident saepe
              blanditiis tenetur debitis magnam reiciendis! Ducimus cupiditate
              aperiam distinctio, aut quibusdam quo impedit et dicta! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
              expedita laborum maiores, possimus provident saepe blanditiis
              tenetur debitis magnam reiciendis! Ducimus cupiditate aperiam
              distinctio, aut quibusdam quo impedit et dicta!
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="faq">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>Perguntas frequentes</h2>
            <FaqCardComponent />
            <FaqCardComponent />
            <FaqCardComponent />
          </div>
        </div>
      </div>
    </section>

    <ModalComprarIngresso :ingressoId="ingressoId"></ModalComprarIngresso>
  </UserLayout>
</template>

<script>
import MenuHomeComponent from "@/components/MenuHomeComponent.vue";
import CardIngressoComponent from "@/components/CardIngressoComponent.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
import ModalComprarIngresso from "@/components/ModalComprarIngresso.vue";
import FaqCardComponent from "@/components/FaqCardComponent.vue";
import UserLayout from "./UserLayout.vue";

export default {
  name: "HomeView",
  components: {
    UserLayout,
    MenuHomeComponent,
    CardIngressoComponent,
    Carousel,
    Slide,
    Pagination,
    Navigation,
    ModalComprarIngresso,
    FaqCardComponent,
  },
  methods: {
    changeIngressoId(idIngresso) {
      this.ingressoId = idIngresso;
    },
  },
  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        700: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 3,
          snapAlign: "start",
        },
      },
      ingressoId: 0,
    };
  },
};
</script>

<style scoped>
.area-ingressos .card-ingresso {
  width: 100%;
  margin: 5px;
}
#chamada {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("@/assets/images/complementares/1.jpg");
  background-position: center;
  background-size: cover;
  color: #fff;
  text-align: center;
}

#todos-ingressos .area-carousel {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}
#todos-ingressos .area-carousel .card-ingresso {
  width: 30%;
  margin: 10px;
}
@media (max-width: 992px) {
  #todos-ingressos .area-carousel .card-ingresso {
    width: 45%;
  }
}
@media (max-width: 576px) {
  #todos-ingressos .area-carousel .card-ingresso {
    width: 100%;
  }
}
#contato {
  background-color: var(--preto);
  color: #fff;
}

#contato button {
  display: inline-block;
  background-color: #82cd47;
  color: #fff;
  text-align: center;
  padding: 10px 15px;
  border: 2px solid #fff;
  font-size: 1.3rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s;
  width: 100%;
}

#contato button:hover {
  scale: 1.03;
  color: #fff;
  text-decoration: none;
}
</style>