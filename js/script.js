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
    };
  },
}).mount("#app");
