<template>
  <div>
    <h1>Watch Full Name : {{ watchFullName }}</h1>
    <button type="button" @click="changeName">변경</button>
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      firstName: 'Name',
      lastName: 'Kim',
      watchFullName: ''
    };
  },
  watch: {
    firstName () {
      this.watchFullName = this.firstName + ' ' + this.lastName;
    },
    lastName () {
      this.watchFullName = this.firstName + ' ' + this.lastName;
    }
  },
  methods: {
    changeName () {
      this.firstName = 'First';
    }
  }
};
</script>
