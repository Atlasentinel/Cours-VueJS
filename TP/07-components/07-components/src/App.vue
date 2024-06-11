<template>
 <div class="container py-5">
  <h1>Hello vue !</h1>
  <CounterButton />
  <CounterButton />
  <CounterButton />
  <BlogPostItem v-for="post in posts" :key="post.id" :title=post.title :description=post.description />
  <BlogPostItem title="Test" />

  <SimpleCard title="Card title example">
    <p>Loan est gay</p>
    <template #footer>
      <h4 class="text-danger mb-0">Coucou</h4>
    </template>
  </SimpleCard>

  <ButtonEvent @onUpdateMessage="onDisplayMessage" />

 </div>
</template>
<script>
//on importe le comosant depuis le dossier src => @
import CounterButton from '@/components/CounterButton.vue';
import BlogPostItem from '@/components/BlogPostItem.vue';
import SimpleCard from '@/components/SimpleCard.vue';
import ButtonEvent from '@/components/ButtonEvent.vue';
export default{
    // il faut déckarer le composant en tant que dépendance de l'application

  data()
  {
    return {
      posts: [
        {
          id: 1,
          title:'Article 1',
          description: 'autre texte 1',
        },
        {
          id: 2,
          title:'Article 2',
          description: 'autre texte 2',
        },
        {
          id: 3,
          title:'Article 3',
          description: 'autre texte 3',
        },
      ]
    }
  },
  methods:{
    //message est passé en parametre de l'émetteur
    onDisplayMessage(message)
    {
      console.log('depuis app.vue je recupere le message qui vient du composant ButtonEvent: ',message);
    }
  },
  components:{
    CounterButton,
    BlogPostItem,
    SimpleCard,
    ButtonEvent
  }


}
</script>


<style scoped></style>

