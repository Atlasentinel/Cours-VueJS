import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({

  data() {
    return {
      count: 0,
      text: "Cart: (0)",
      bgColor: 'black',
      imgChange : 'https://picsum.photos/200/300?image=0',
     
    }
  },
  methods: {
    onclickbtn() {
        if(this.count >= 10)
          {
            this.bgColor = 'red';
          }
        console.log(this.count);
    }
  }
}).mount('#app')
