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

      // Aggiungo controllo per Stringa Vuota da non aggiungere
      // Con il metodo "trim" elimino gli spazi davanti e dietro a una stringa, 
      // così da eliminare la possibilità che la stringa sia composta da soli spazi
      if (this.newTask.trim() !== ''){

        const newItem = {

          text: this.newTask,
          done: false
  
        };
  
        this.tasks.push(newItem);
        this.newTask = '';
      }

      
    },

    // Al metodo si poteva passare direttamente passare la "task", senza passare dall'Array di Oggetti
    changeDone(currentIndex){
      // let currentDone = this.tasks[currentIndex].done;
      if (this.tasks[currentIndex].done === true){
        this.tasks[currentIndex].done = false;
      } else {
        this.tasks[currentIndex].done = true;
      }

      // FORMA CONTRATTA: this.done = !this.done {assegnamo a "this.done" il valore opposto}
    }
    
  }

}).mount('#app')