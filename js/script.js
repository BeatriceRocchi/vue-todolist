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
    };
  },

  methods: {
    removeTask(index) {
      this.toDoList.splice(index, 1);
    },

    addTask() {
      this.toDoList.unshift(this.newTask);
      this.newTask = {
        text: "",
        done: false,
      };
    },
  },
}).mount("#app");
