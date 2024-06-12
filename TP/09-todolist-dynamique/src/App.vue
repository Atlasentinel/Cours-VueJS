<template>
  <div class="container py-5">
    <div class="mb-5 container">
      <div class="card w-25">
        <h4 class="d-flex justify-content">Ajouter une todo :</h4> <br>
        <div class="card-body">
          <input v-model="newTodoText" type="text" placeholder="Entrez le titre de la todo">
        </div>
        <div class="card-footer d-flex align-items-center">
          <button @click="addTodo" class="btn btn-primary me-1">Ajouter +</button>
        </div>
      </div>
    </div>

    <!-- exercice créer une TODO liste -->
    <ul id="todos" class="list-group">
      <!-- structure référence à créer
      <li class="list-group-item">[case à cocher readonly] Titre de la todo (+classe barrer si achevée: "text-decoration-line-through")</li>
      -->
      <li v-for="todo in todos" :key="todo.id" class="list-group-item d-flex align-items-center">
        <div class="form-check form-switch">
          <input v-if="!todo.editing" class="form-check-input" type="checkbox" @click="setDone(todo)" role="switch"
            aria-label="done/undone" :checked="todo.done" />

        </div>
        <div class="me-auto" :class="{ 'text-decoration-line-through': todo.done }">
          <input v-if="todo.editing" v-model="todo.text" @keyup.enter="saveEdit(todo.id)"
            @keyup.esc="cancelEdit(todo.id)">
          <span v-else> {{ todo.text }}</span>
        </div>

        <div v-if="!todo.editing">
          <button @click="deleteTodo(todo.id)" class="btn btn-danger me-1">Supprimer</button>
          <button @click="editTodo(todo.id)" class="btn btn-primary  me-1">Editer</button>
        </div>
        <div v-else>
          <button :disabled="!todo.text" @click="saveEdit(todo.id)" class="btn btn-success me-1">Sauvegarder</button>
          <button @click="cancelEdit(todo.id)" class="btn btn-danger me-1">Annuler</button>
        </div>
      </li>
    </ul>

    <!--
    Exercice TODO:
    Réaliser une Todo liste en Vue JS, ajouter un tableau de 5 todos dans les données du contrôleur, chaque todo aura la structure suivante :
    {
      id: 1,
      text: 'Titre de la todo',
      done: false,
    },
    afficher les todos dans la vue à l'aide d'une boucle dans le ul#todos située ci-dessus dans le code
    -->
  </div>
</template>

<script>
export default {
  methods: {
    setDone(el) {
      el.done = !el.done;
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    saveEdit(id) {
      const todo = this.todos.find((todo) => todo.id == id)
      todo.editing = false;
    },
    editTodo(id) {
      this.todos.find((todo) => todo.id == id).editing = true;
    },
    cancelEdit(id) {
      this.todos.find((todo) => todo.id == id).editing = false;
    },
    addTodo() {
      if (this.newTodoText.trim()) {
        this.todos.push({
          id: this.todos.length + 1,
          text: this.newTodoText.trim(),
          done: false,
          editing: false
         
        });
        this.newTodoText = true ;
      
      }
    }
  },
  data() {
    return {
      newTodoText: '',
      switched: false,
      todos: [
        {
          id: 1,
          text: 'Learn JavaScript',
          done: false,
          editing: false
        },
        {
          id: 2,
          text: 'Learn Vue',
          done: true,
          editing: false
        },
        {
          id: 3,
          text: 'Build something awesome',
          done: false,
          editing: false
        },
        {
          id: 4,
          text: 'Profit',
          done: false,
          editing: false
        },
        {
          id: 5,
          text: 'Profit',
          done: false,
          editing: false
        }
      ]
    }
  }
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
</style>
