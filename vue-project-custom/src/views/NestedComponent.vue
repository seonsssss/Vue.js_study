<template>
  <div>
    <PageTitle title="부모 컴포넌트에서 자식 컴포넌트로!"
    :data2="42"
    :data3="true"
    :data4="[123, 456, 789]"
    :data5="{name:'test', name2:'test2'}"
    :propE="test"
    ></PageTitle>
  </div>
</template>
<script>
import PageTitle from '../components/PageTitle.vue';
export default {
  components: { PageTitle }
};
</script>
