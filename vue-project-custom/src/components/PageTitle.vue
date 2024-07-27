<template>
  <h2>{{ title }}</h2>
  <h2>{{ data2 }}</h2>
  <h2>{{ data3 }}</h2>
  <h2>{{ data4 }}</h2>
  <h2>{{ data5 }}</h2>
  <h2>{{ propE }}</h2>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '페이지 제목입니다.'
    },
    data2: {
      type: Number,
      required: true
    },
    data3: {
      type: Boolean
    },
    data4: {
      type: Array
    },
    data5: {
      type: Object,
      dafault: () => {
        return { name: 'test' };
      }
    },
    propE: {
      vaildator (value) {
        if (typeof value !== 'number') {
          console.warn('해당 데이터는 숫자 형태가 아닙니다,');
          return false;
        }
        return true;
      }
    },
    propF: {
      type: Function,
      default: () => {
        return '나는 함수';
      }
    }
  }
};
</script>
