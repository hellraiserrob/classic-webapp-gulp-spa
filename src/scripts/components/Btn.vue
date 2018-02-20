<template>
    <button v-on:click="action" class="btn">
        <slot>Submit</slot>
    </button>
</template>

<script>
export default {
  name: 'btn',
  props: {
    value: {
      type: String,
      default: 'Default value'
    },
    action: {
      type: Function,
      required: true
    }
  }
};
</script>
