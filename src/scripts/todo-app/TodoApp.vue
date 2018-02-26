<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul class="todos">
      <li v-for="(todo, index) in todos" v-bind:key="index" v-bind:class="{ done: todo.done }">
        <input type="checkbox" v-model="todo.done" v-on:change="toggle"  />
        {{todo.name}}
      </li>
      <li v-if="!todos.length">Nothing todo</li>
    </ul>
    <p>
      <input type="text" v-model="todo" placeholder="Enter a todo" class="form-control" v-on:keyup.enter="add" />
    </p>
    <Btn
      v-bind:action="add"
      v-bind:disabled="!todo.length"
    >
      Add Todo
    </Btn>
  </div>
</template>

<script>
import Btn from '../components/Btn.vue';

export default {
  name: 'todo-app',
  components: {
    Btn
  },
  data() {
    return {
      msg: 'Todo',
      todos: [],
      todo: '',
    };
  },
  methods: {
    add(){
      if(this.todo.length > 0){
        this.todos.push({
          name: this.todo,
          done: false,
        });
        this.todo = '';
      }
    },
    toggle(todo) {
      todo.done = !todo.done;
    }
  }
};
</script>
