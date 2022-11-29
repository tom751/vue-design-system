<template>
  <div>
    <h1>Components</h1>
    <ol>
      <li v-for="component in componentNames" :key="component">
        <RouterLink :to="`/components/${component}`">{{ component }}</RouterLink>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { parse } from 'vue-docgen-api'
import { ref } from 'vue'

const components = import.meta.glob('../components/**/*.vue')

const fileNames = Object.keys(components)
  .reduce((prev: string[], curr: string) => [...prev, curr.split('/').pop()?.split('.')[0] || 'Some component'], [])
  .sort()

const componentNames = ref(fileNames)
</script>
