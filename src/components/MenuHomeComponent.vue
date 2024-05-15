<template>
  <div id="carouselHome" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          class="d-block w-100"
          src="@/assets/images/banners/1.png"
          alt="First slide"
        />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselHome"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselHome"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MenuHomeComponent",
});
</script>


<style scoped>
img {
  max-height: 500px;
}
</style>