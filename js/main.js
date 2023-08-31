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
          done: true,
        },
        {
          text: "milestone 3",
          done: true,
        },
        {
          text: "bonus 1",
          done: true,
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

      newTodo: {
        text: "",
        done: false,
      },
    };
  },

  methods: {
    eliminateTask(index) {
      //   console.log(" riga " + index);
      this.todo.splice(index, 1);
    },

    addTask() {
      // spread operator
      const newToAdd = { ...this.newTodo };
      this.todo.unshift(newToAdd);
      this.newTodo.text = "";
    },
  },

  created() {},
}).mount("#app");
