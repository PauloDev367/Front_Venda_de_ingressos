<template>
  <canvas id="graficolinha"></canvas>
</template>


<script>
import Chart from "chart.js/auto";
export default {
  name: "LinhaComponent",
  mounted() {
    const ctx = document.getElementById("graficolinha");

    new Chart(ctx, {
      type: "line",
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
#graficolinha {
  width: 100%;
  min-height: 300px;
}
</style>