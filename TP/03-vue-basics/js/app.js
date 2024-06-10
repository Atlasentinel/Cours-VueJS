import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

  createApp({
    data() {
      return {
        title: 'Hello World!',
        firstname: 'John',
        lastname: 'Doe',
        zoo: ['lion','girafe','elephant','tigre','crocodile','gorille'],
        user: {
          prenom: 'Jonathan',
          nom: 'Joestar',
          age: 22,
          enfants: ['Joseph','Jotaro Kujo','Joyelin Kujo','Josuke Higashikata','Johnny'],
        },
        imageExemple: 'images/image1.jpeg',
        imageAlt:  'image d\'un coiffeur tah les fous',
        imageTitle :'JM TRO LE KOIFEUR',
        nomDeClasse: 'display-1'
      }
    }
  }).mount('#app')
