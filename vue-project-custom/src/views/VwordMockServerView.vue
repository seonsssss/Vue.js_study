<template>
<div>
  <table>
    <thead>
      <tr>
        <th>제품명</th>
        <th>가격</th>
        <th>카테고리</th>
        <th>배송료</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="i" v-for="(product, i) in productList">
        <td>{{ product.product_name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.category }}</td>
        <td>{{ product.delivery_price }}</td>
        <td v-if="i == 0"> 0입니다.</td>
        <td v-else-if="i == 1"> 1입니다.</td>
        <td v-show="i == 2">2입니다.</td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      productList: []
    };
  },
  created () {
    this.getList();
  },
  methods: {
    async getList () {
      this.productList = await this.$api('https://3de130ca-5d8d-4069-87bf-946aa8bd1e97.mock.pstmn.io/list', 'get');
    }
  }
};
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
