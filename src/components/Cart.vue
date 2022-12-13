<template>
  <div>
    <h1>Cart</h1>
    <div v-for="(item, index) in carts" :key="index" class="central">
      <div class="cart_box"></div>
      <div style="padding: 10px 20px;">
        <div>
          {{ item.name }}
        </div>
        <div class="central">
          Qly: {{ item.amount }}
          ${{ item.price }}
        </div>
      </div>
      <div @click="deleteCart(index)">
        <img src="../assets/trash-2.png" alt="" />
      </div>
    </div>
    <div>Total: ${{ total_sum }}</div>
    <div @click="showCheck">
      <img src="../assets/Button2.png" alt="" />
    </div>
    <div @click="closeCart()">X</div>

    <div v-if="show_checkout" class="check-overlay">
      <Checkout @closeCheck="show_checkout =$event" :carts="carts" :total_sum="total_sum" />
    </div>
  </div>
</template>

<script>
import Checkout from './Checkout.vue';

  export default {
    name: "Cart",
    props: ["carts"],
    components: { Checkout },
    data() {
      return {
        total_sum: 0,
        show_checkout: false,

      }
    },
    mounted () {
      console.log('mounted')
      this.carts.map((item) => {
        this.total_sum = this.total_sum + item.price * item.amount;
      });
    },
    computed: {
      calcSum() {
        console.log('computed');
      }
    },
    methods: {
      closeCart() {
        this.carts.splice(this.carts);
        this.$emit("closeCart", false);
      },
      deleteCart(index) {
        this.carts.splice(index, 1);
        calcSum();
      },
      showCheck() {
        this.show_checkout = true;
      },
    }
  }
</script>

<style scoped>
.cart_box {
  width: 44px;
  height: 41px;
  border: 1px solid black;
  background-color: green;
}
</style>