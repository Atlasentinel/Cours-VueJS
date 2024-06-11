<template>
    <div class="border rounded p-3 mb-3">
      <input type="text" v-model="message" />
      <p>{{ message }}</p>
      <button class="btn btn-success" @click="onUpdateEvent()">Cliquez-moi</button>
    </div>
  </template>
  
  <script>
  export default {
    props:{},
    // on doit déclarer les événments personnalisée utilisé, tout comme les props :
    emits:['onUpdateMessage'],
    data() {
      return {
        message: ''
      }
    },
    methods: {
      onUpdateEvent() {
        // on emet un evenement personnalisé pour communiquer avec le composants parents. Celui ci devra écouter l'évenement onUpdateMessage pour réagir à la donnée transmise.
        this.$emit('onUpdateMessage', this.message)
        //alert(this.message)
      }
    }
  }
  </script>
  
  <style scoped></style>
  