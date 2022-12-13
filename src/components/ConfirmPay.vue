<template>
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
    <button @click="submit">Pay now!</button>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  name: "ConfirmPay",
  components: {
    StripeCheckout,
  },
  data() {
    return {
      publishableKey: 'pk_test_51LxG7gIAzrcl9sc4iku7NsRXMFdVAFAYuMapJM6xhyrdxtI5l0oZVkxJeUGrizqpD5A0D6dF2e2JBlEGgXXcJ2VT00wxFU0E9U',
      loading: false,
      lineItems: [
        {
          price: '1234',
          quantity: 1
        }
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
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
}
</script>
