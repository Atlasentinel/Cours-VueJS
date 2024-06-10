import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

  createApp({
    data() {
      return {
        title: 'Hello World!',
        firstname: 'John',
        lastname: 'Doe'
      }
    }
  }).mount('#app')
