<template>
  <div class="checkout">
    <h1>Check Out</h1>
    <div class="checkout-main">
      <div>
        <h3>Information</h3>
        <form>
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="text" placeholder="Email" />
          </div>
          <div>
            <input type="text" placeholder="Address" />
          </div>
          <div>
            <stripe-checkout 
              ref="checkoutRef"
              mode="payment"
              :pk="publishableKey"
              :line-items="lineItems"
              :currency="currency"
              :total-amount="amountTotal"
              :success-url="successURL"
              :cancel-url="cancelURL"
              @loading="v => loading = v"
            />
            <button @click="submit" class="btn">Confirm & Pay</button>
          </div>
        </form>
      </div>
      <div>
        <h3>Cart</h3>
        <div v-for="item in carts" :key="item.id" class="central">
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
        </div>
        <p>total: {{ total_sum }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default {
  name: "Checkout",
  props: ['carts', "total_sum"],
  components: { StripeCheckout },
  data() {
    return {
      publishableKey: 'pk_test_51LxG7gIAzrcl9sc4iku7NsRXMFdVAFAYuMapJM6xhyrdxtI5l0oZVkxJeUGrizqpD5A0D6dF2e2JBlEGgXXcJ2VT00wxFU0E9U',
      loading: false,
      lineItems: [
      ],
      amountTotal: 100,
      currency: 'usd',
      successURL: '/success',
      cancelURL: '/',
      successURL: 'http://localhost:3000',
      cancelURL: 'http://localhost:3000'
    }
  },
  methods: {
    submit () {
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
}
</script>
