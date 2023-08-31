console.log("main ok");

const { createApp } = Vue;

createApp({
  data() {
    return {
      todo: [
        {
          text: "milestone 1",
          todo: false,
        },
        {
          text: "milestone 2",
          todo: false,
        },
        {
          text: "milestone 3",
          todo: false,
        },
        {
          text: "bonus 1",
          todo: false,
        },
        {
          text: "bonus 2",
          todo: false,
        },
        {
          text: "raggiungere il nirvana",
          todo: false,
        },
      ],
    };
  },

  methods: {},

  created() {},
}).mount("#app");
