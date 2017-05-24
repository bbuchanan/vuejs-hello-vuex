<template>
  <div>
    Hello
    <p>{{msg}}</p>
    <p>Here is a list of things for you todo:</p>
    <ul>
      <li v-for="todo in todos" :class="{completed: todo.completed}">{{todo.task}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: ['todos'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
.completed {
  text-decoration: line-through
}
</style>

