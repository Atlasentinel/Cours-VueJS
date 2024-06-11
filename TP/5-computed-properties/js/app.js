import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

  createApp({
    data() {
      return {
        cart : 0,
        firstname: '',
        lastname: ''
      }
    },
    // Fonction qui retiurne toujours quelque chose (string, number, array, objet, bool)
    computed:{
      fullName()
      {
        return this.firstname + ' ' + this.lastname;
      },
      outOfStock()
      {
        return this.cart >= 10;
      },
      prix ()
      {
          return this.cart * 5;
      },
      superHero()
      {
        return this.fullName == "Johnny Silverhand";
      }
    },
    methods: {
      getFullName()
      {
        return this.fullName
        }
    }
  }).mount('#app')
