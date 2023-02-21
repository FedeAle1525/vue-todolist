const { createApp } = Vue

createApp({
  data() {
    return {
      tasks: [
        {
          text: "Prepararsi per la lezione",
          done: true
        },

        {
          text: "Andare in Banca",
          done: true
        },

        {
          text: "Fare la spesa",
          done: true
        },

        {
          text: "Fare esercizione pomeridiano",
          done: false
        },

        {
          text: "Preparare la cena",
          done: false
        }
      ]
    }
  }

}).mount('#app')