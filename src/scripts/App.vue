<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(todo, index) in todos" v-bind:key="index">{{todo}}</li>
      <li v-if="!todos.length">Nothing todo</li>
    </ul>
    <p>
      <input type="text" v-model="todo" placeholder="Enter a todo" class="form-control" v-on:keyup.enter="add" />
    </p>
    <Btn v-bind:action="add">Add Todo</Btn>
  </div>
</template>

<script>
import Btn from './components/Btn.vue';

export default {
  name: 'app',
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
        this.todos.push(this.todo);
        this.todo = '';
      }
    }
  }
};
</script>
