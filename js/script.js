const { createApp } = Vue;

createApp({
  data() {
    return {
      toDoList: [
        {
          text: "Lavare maglietta nera",
          done: true,
        },
        {
          text: "Preparare valigia per il weekend",
          done: true,
        },
        {
          text: "Dare le chiavi alla vicina",
          done: false,
        },
        {
          text: "Caricare telefono prima di partire",
          done: false,
        },
      ],
      newTask: {
        text: "",
        done: false,
      },
      errorMessage: "",
    };
  },

  methods: {
    removeTask(index) {
      this.toDoList.splice(index, 1);
    },

    addTask() {
      if (this.newTask.text.length >= 4) {
        this.toDoList.unshift(this.newTask);
        this.newTask = {
          text: "",
          done: false,
        };
        this.errorMessage = "";
      } else {
        this.errorMessage =
          "Attenzione! Il task inserito ha una lunghezza inferiore ai 4 caratteri";
      }
    },
  },
}).mount("#app");
