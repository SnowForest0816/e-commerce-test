<template>
  <div class="home">
    <div v-if="show_cart" class="cart-overlay">
      <div class="cart">
        <Cart @closeCart="show_cart = $event" :carts="carts" />
      </div>
    </div>

    <div class="header">
      <div>
        <img src="../assets/shopping-cart.png" alt="" class="shopping_img" @click="showCart" />
      </div>
      <div class="header_title">
        <p>Jurassic Store</p>
      </div>
    </div>
    <div class="products">
      <p class="title">Browse the Catalogue</p>
      <form class="search">
        <input type="text" v-model="search_key" />
      </form>
      <SearchResult :products="filteredList" />
    </div>
  </div>
</template>

<script>
import data from '../assets/data/data.json';
import Cart from './Cart.vue';
import SearchResult from './SearchResult.vue';

export default{
  name: "HomePage",
  components: { Cart, SearchResult },
  data() {
    return {
      products: data,
      show_products: [],
      carts: [],
      search_key: '',
      show_cart: false,
    }
  },
  computed: {
    filteredList() {
      return this.products.filter(item => {
        return item.name.toLowerCase().includes(this.search_key?.toLowerCase());
      });
    },
  },
  methods: {
    showCart() {
      this.products.map((item) => {
        if(item.amount != 0) this.carts.push(item);
      });
      this.show_cart = true;
    },

    search() {
      this.products.map((item) => {
        if (item.name === this.search_key) {
          this.show_products.push(item);
        }
      })
    }
  }
}
</script>
