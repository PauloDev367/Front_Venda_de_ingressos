<template>
  <canvas id="graficopizza"></canvas>
</template>


<script>
import Chart from "chart.js/auto";
export default {
  name: "PizzaComponent",
  mounted() {
    const ctx = document.getElementById("graficopizza");

    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Red", "Blue"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>

<style scoped>
#grafico {
  width: 100%;
  min-height: 300px;
}
</style>