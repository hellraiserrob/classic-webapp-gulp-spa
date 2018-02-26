<template>
    <button v-on:click="action" class="btn" v-bind:disabled="disabled">
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
