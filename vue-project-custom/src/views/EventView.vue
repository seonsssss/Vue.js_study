<template>
  <div>
    <select v-model="selectedVal" @change="changeSelect">
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="제주">제주</option>
    </select>
  </div>
    <div>
      <button type ="button" @click="increaseCounter">Add 1</button>
      <button type ="button" @click="oneCounter(), twoCounter()">Add 2</button>
      <p>counter is : {{ counter }}</p>
      <button type ="button" @click="setCounter(0)">reset</button>
    </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      counter: 0
    };
  },
  methods: {
    changeSelect () {
      alert(this.selectedVal);
    },
    increaseCounter () {
      this.counter = this.counter + 1;
    },
    setCounter (counter) {
      this.counter = counter;
    },
    oneCounter () {
      alert('One');
    },
    twoCounter () {
      alert('Two');
    }
  }
};
</script>
