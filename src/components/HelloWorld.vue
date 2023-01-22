<script setup lang="ts">
defineProps<{
  /**
   * The message to display
   */
  msg: string
}>()

defineEmits<{
  /**
   * On change do something
   * @arg {number} id - The id of the user
   */
  (e: 'change', id: number): void
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h2>This is a test component</h2>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

<docs>
```jsx

<div>
  <HelloWorld msg="alright" />
  <HelloWorld msg="howdy" />
</div>


```
</docs>
