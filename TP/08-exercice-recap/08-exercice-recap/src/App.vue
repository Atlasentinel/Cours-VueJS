<template>
  <main class="container py-4">
    <span @onUpdateQuantity="onDisplayQuantity"></span>
      <h1>Liste des produits :</h1>
        <div class="row">
          
          <CartProduct
          @addToCart="cartQty++"
          v-for="product in products"
          :key="product.id"
          :item="product"
        />
     

      <div class="col-2 cart-sticky">
        <CartDisplay class="cart-sticky-card" @onEmptyCart="cartQty = 0" :qty="cartQty" />
      </div>
        </div>
  
  </main>
</template>

<script>
import CartProduct from '@/components/CartProduct.vue';
import CartDisplay from '@/components/CartDisplay.vue';
export default {
  components: {
    CartDisplay,
    CartProduct
  },
  data() {
    return {
      cartQty : 0,
      products: [
        {
          brand: 'Adidas',
          product: 'Socks',
          details: ['80% coton', '20% polyester', 'Genre mixte'],
          //ajout de l'index sélectionné par défaut
          selectedVariant: 3,
          variants: [
            {
              variantId: 2234,
              variantColor: 'green',
              variantImage: 'https://picsum.photos/400/400?image=1',
              variantQuantity: 20
            },
            {
              variantId: 2235,
              variantColor: 'blue',
              variantImage: 'https://picsum.photos/400/400?image=2',
              variantQuantity: 0
            },
            {
              variantId: 2236,
              variantColor: 'red',
              variantImage: 'https://picsum.photos/400/400?image=3',
              variantQuantity: 9
            }
          ]
        },
        {
          brand: 'Nike',
          product: 'Socks',
          details: ['30% coton', '70% polyester', 'Genre homme'],
          //ajout de l'index sélectionné par défaut
          selectedVariant: 2,
          variants: [
            {
              variantId: 2234,
              variantColor: 'green',
              variantImage: 'https://picsum.photos/400/400?image=1',
              variantQuantity: 20
            },
            {
              variantId: 2235,
              variantColor: 'blue',
              variantImage: 'https://picsum.photos/400/400?image=2',
              variantQuantity: 0
            },
            {
              variantId: 2236,
              variantColor: 'red',
              variantImage: 'https://picsum.photos/400/400?image=3',
              variantQuantity: 9
            }
          ]
        },
        {
          brand: 'Puma',
          product: 'Socks',
          details: ['20% coton', '80% polyester', 'Genre femme'],
          //ajout de l'index sélectionné par défaut
          selectedVariant: 1,
          variants: [
            {
              variantId: 2234,
              variantColor: 'green',
              variantImage: 'https://picsum.photos/400/400?image=1',
              variantQuantity: 20
            },
            {
              variantId: 2235,
              variantColor: 'blue',
              variantImage: 'https://picsum.photos/400/400?image=2',
              variantQuantity: 0
            },
            {
              variantId: 2236,
              variantColor: 'red',
              variantImage: 'https://picsum.photos/400/400?image=3',
              variantQuantity: 9
            }
          ]
        }
      ]
    }

  },
  methods: {
    onDisplayQuantity(qty) {
      console.log(qty);
    }
  },

}
</script>

<style scoped></style>
