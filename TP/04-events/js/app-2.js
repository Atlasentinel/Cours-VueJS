import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({

  data() {
    return {
      count: 0,
      text: "Cart: (0)",
      bgColor: 'white',
    }
  },
  methods: {
    onclickbtn() {
        this.count++;
        if(this.count >= 10)
          {
            this.count = 10;
            this.text = text.style.color = 'red';
          }
        console.log(this.count);
    }
  }
}).mount('#app')
