<template>
  <div>
    <h1>{{ msg }}</h1>
    <Btn v-bind:action="hello">Say hello to me</Btn>
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
      msg: 'Vue App'
    };
  },
  methods: {
    hello(){
      console.log('hello from the console');
    }
  }
};
</script>
