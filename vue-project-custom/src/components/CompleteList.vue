<template>
    <div>
    <h2>Complete List</h2>
    <ul v-if="completeList.length > 0" class="memo-list">
      <li v-for="item in completeList" :key="item.idx" class="memo-item">
        <div class="memo-content">
          <p>{{ item.contents }}</p>
        </div>
        <div class="memo-info">
          <div class="info">
            <span class="category">
              <i class="fas fa-folder"></i>
            </span>
            <span class="info-value">{{ item.category }}</span>
          </div>
          <div class="info">
            <span class="priority">
              <i class="fas fa-exclamation-circle"></i>
            </span>
            <span class="info-value">
              <i v-if="item.priority === 1" class="fas fa-star"></i>
              <i v-else class="far fa-star"></i>
            </span>
          </div>
        </div>
        <div class="memo-actions">
          <button class="cancle" @click="cancleMemo(item.idx)">취소</button>
        </div>
      </li>
    </ul>
    <span v-else>아직 완료된 메모가 없습니다.</span>
  </div>
</template>
<script>
export default {
  props: {
    completeList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    cancleMemo (idx) {
      this.$emit('cancle', idx);
    }
  }
};
</script>
