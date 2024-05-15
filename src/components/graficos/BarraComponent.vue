<template>
  <canvas id="grafico"></canvas>
</template>


<script>
import Chart from "chart.js/auto";
export default {
  name: "BarraComponent",
  mounted() {
    const ctx = document.getElementById("grafico");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
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