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
      ],

      newTask: ''
    }
  },

  methods: {

    removeTask(indexStart){
      this.tasks.splice(indexStart,1);
    },

    addTask(){

      const newItem = {

        text: this.newTask,
        done: false

      };

      this.tasks.push(newItem);
      this.newTask = '';
      
    }

    
  }

}).mount('#app')