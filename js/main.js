console.log("main ok");

const { createApp } = Vue;

createApp({
  data() {
    return {
      todo: [
        {
          text: "milestone 1",
          done: true,
        },
        {
          text: "milestone 2",
          done: false,
        },
        {
          text: "milestone 3",
          done: false,
        },
        {
          text: "bonus 1",
          done: false,
        },
        {
          text: "bonus 2",
          done: false,
        },
        {
          text: "raggiungere il nirvana",
          done: false,
        },
      ],
    };
  },

  methods: {},

  created() {},
}).mount("#app");
