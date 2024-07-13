<template>
    <div>
    <h1>Watch Full Name : {{ watchFullName }}</h1>
  </div>
  <div>
    <h1>Full Name : {{ fullName }}</h1>
  </div>
  <div>
    <h1>{{ firstName + ' ' + lastName }}</h1>
    <h1>{{ getFullName() }}</h1>
  </div>
  <div>
  <input type = "text" v-model="firstName">
  <input type = "text" v-model="lastName">
</div>
<div>
  <button @click="updateName">update</button>
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
  computed: {
    fullName () {
      console.log('getFullName computed run');
      return this.firstName + ' ' + this.lastName;
    }
  },
  watch: {
    watchFirstName () {
      this.watchFullName = this.firstName + ' ' + this.lastName;
    },
    watchLastName () {
      this.watchFullName = this.firstName + ' ' + this.lastName;
    }
  },
  methods: {
    getFullName () {
      console.log('getFullName method run');
      return this.firstName + ' ' + this.lastName;
    },
    updateName () {
      this.firstName = 'Test';
      this.lastName = 'Smith';
    }
  }
};
</script>
