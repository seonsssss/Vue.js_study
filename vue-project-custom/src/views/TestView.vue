<template>
    <div>Test</div>
    <div> {{ sampleData }}</div>
    <div v-bind:style ="styleObj">인라인 스타일 바인딩</div>
    <div>
      <input type="text" v-model="btnData">
      <button type="button" v-bind:disabled="btnData==''">Click</button>
    </div>
    <div>
      <label><input type="radio" v-bind:value="radioValue1" v-model="picked"> 서울</label>
      <label><input type="radio" v-bind:value="radioValue2" v-model="picked"> 부산</label>
      <label><input type="radio" v-bind:value="radioValue3" v-model="picked"> 제주</label>
      <br>
      <span>체크된 지역:{{ picked }}</span>
    </div>
    <div>
      <label><input type = "checkbox" value="서울" v-model="checked"> 서울</label>
      <label><input type = "checkbox" value="부산" v-model="checked"> 부산</label>
      <label><input type = "checkbox" value="제주" v-model="checked"> 제주</label>
      <br>
      <span>체크된 지역:{{ checked }}</span>
    </div>
    <div>
      <input type="number" v-model="sampleData">
    </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      styleObj: {
        color: 'red',
        fontSize: '20px'
      },
      btnData: '',
      radioValue1: '서울',
      radioValue2: '부산',
      radioValue3: '제주',
      sampleData: 'Test view',
      checked: [],
      picked: ''
    };
  },
  methods: {
    logOutput (param1) {
      console.log(param1);
    }
  },
  mounted () {
    console.log('마운트입니다.');
    this.logOutput('메서드 실행');
  },
  created () {
    console.log('생성입니다.');
  }
};
</script>
