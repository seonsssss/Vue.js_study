<template>
  <child-component @send-message="sendMessage" ref="child_component" />
</template>
<script>
import ChildComponent from './ChildComponent.vue';
export default {
  components: { ChildComponent },
  mounted () {
    // this.$refs.child_component.$refs.btn.click();
    this.$refs.child_component.childFunc();
    this.$refs.child_component.msg = '메세지를 전달합니다.';
  },
  methods: {
    sendMessage (data) {
      console.log(data);
    }
  }
};
</script>
