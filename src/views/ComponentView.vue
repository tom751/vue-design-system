<template>
  <div>
    <h1>Component {{ $route.params.name }}</h1>
    <h2>Props</h2>
    <table>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Type</th>
        <th>Default</th>
        <th>Required</th>
      </tr>
      <tr v-for="prop in component?.docs.props" :key="prop.name">
        <td>
          <pre>{{ prop.name }}</pre>
        </td>
        <td>{{ prop.description }}</td>
        <td>
          <pre>{{ prop.type.name }}</pre>
        </td>
        <td>-</td>
        <td>{{ prop.required }}</td>
      </tr>
    </table>

    <h2>Events</h2>
    <table>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Args</th>
      </tr>
      <tr v-for="event in component?.docs.events" :key="event.name">
        <td>
          <pre>{{ event.name }}</pre>
        </td>
        <td>{{ event.description }}</td>
        <td>
          <pre>{{ event.properties }}</pre>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import components from '../components.json'
const route = useRoute()

const component = components.find((c) => c.name === route.params.name)
</script>
