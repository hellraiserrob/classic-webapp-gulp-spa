<template>
  <div>
    <h1>{{ msg }} ({{outstanding}})</h1>
    <ul class="filters" v-if="todos.length">
      <li v-for="(f, index) in filters" v-bind:key="index">
        <a v-on:click="setFilter(f.value)" :class="{ active: filter == f.value}">{{f.label}}</a>
      </li>
    </ul>
    <ul class="todos">
      <li v-for="(todo, index) in filteredTodos" v-bind:key="index" v-bind:class="{ done: todo.done }">
        <input type="checkbox" v-model="todo.done" v-on:change="toggle"  />
        {{todo.name}}
        <Btn
          v-bind:action="del"
          class="btn btn-naked"
        >
          (x)
        </Btn>    
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

const filters = {
  all: function (todos) {
    return todos;
  },
  active: function (todos) {
    return todos.filter(function (todo) {
      return !todo.done;
    });
  },
  completed: function (todos) {
    return todos.filter(function (todo) {
      return todo.done;
    });
  }
};

export default {
  name: 'todo-app',
  components: {
    Btn
  },
  data() {
    return {
      msg: 'Todo',
      todos: [{
        name: 'First thing to do',
        done: true
      }, {
        name: 'And another thing',
        done: false
      }],
      // filteredTodos: [],
      todo: '',
      filter: 'all',
      filters: [{
        label: 'All',
        value: 'all',
      }, {
        label: 'Active',
        value: 'active',
      }, {
        label: 'Completed',
        value: 'completed',
      }]
    };
  },
  computed: {
    filteredTodos: function () {
      return filters[this.filter](this.todos);
    },
    outstanding: function() {
      return filters['active'](this.todos).length;
    }
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
    },
    del(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    setFilter(filter) {
      this.filter = filter;
    }
  }
};
</script>
