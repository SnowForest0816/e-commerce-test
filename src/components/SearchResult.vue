<template>
    <div class="product_list">
      <ul style="margin-left: 53px;">
        <li v-for="item in products" :key="item.id">
          <div class="box"></div>
          <div>{{ item.name }}</div>
          <div style="display: flex;">
            <div>${{ item.price }}</div>
            <div class="add_btn">
              <img src="../assets/Button1.png" alt="" height="15px" width="60px" @click="addCart(item.id)" />
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "SearchResult",
  props: ["products"],
  methods: {
    addCart(id) {
      this.products.map((item) => {
        if(item.id === id) item.amount += 1;;
      });
    }
  }
}
</script>