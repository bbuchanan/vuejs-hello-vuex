<template>
  <div id="app">
    <hello :todos="todos"></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  },
  computed: {
    todos: function() {
      return this.$store.getters.todos
    }
  }
}
</script>

