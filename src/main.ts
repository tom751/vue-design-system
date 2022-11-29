import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

const components = import.meta.glob('./components/**/*.vue')

Object.keys(components).forEach((key: string) => {
  const componentName = key.split('/').pop()?.split('.')[0] || 'Some component'
  app.component(componentName, components[key])
})

app.mount('#app')
