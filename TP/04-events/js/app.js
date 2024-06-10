import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({


  data() {
    return {
      title: 'ToDoList!',
      todolist: [
        {
          id: 1,
          text: 'pain',
          done: false,
        },
        {
          id: 2,
          text: 'oeuf',
          done: false,
        },
        {
          id: 3,
          text: 'eau',
          done: false,
        },
        {
          id: 4,
          text: 'halouf',
          done: true,
        },
      ]
    }
  },
  methods: {
    setDone(el) {
      el.done = !el.done;
    },
    onEditTodo(id) 
    {
      console.log("editer :" + id);
    },
    onDeleteTodo(id) 
    {
      console.log("delete :" + id);
      //on filtre les todos pour ne garder que les todos qui ne correspondent pas à l'id rechercher
      this.todos = this.todolist.filter(todo => todo.id !== id);
    }

  }
}).mount('#app')
