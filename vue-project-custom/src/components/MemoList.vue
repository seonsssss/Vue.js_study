<template>
  <div>
    <h2>Memo List</h2>
    <div>
      <ul v-if="memoList.length > 0" class="memo-list">
        <li :key="i" v-for="(item, i) in memoList" class="memo-item">
          <div class="memo-content">{{ item.contents }}</div>
          <div class="meom-info">
            <div class="info">
              <span class="category">
                <i class="fas fa-folder"></i>
              </span>
              <span class="info-value">{{ item.category }}</span>
            </div>
          </div>
          <div class="info">
            <span class="priority">
              <i class="fas fa-exclamation-circle"></i>
            </span>
            <span class="info-value">
              <i v-if="item.priorty === 1" class="fas fa-star"></i>
              <i v-else class="far fa-star"></i>
            </span>
          </div>
          <div class="memo-actions">
            <button type="button" class="edit" @click="editMemo(item.idx)">수정</button>
            <button type="button" class="delete" @click="deleteMemo(item.idx)">삭제</button>
            <button type="button" class="complete" @click="completeMemo(item.idx)">완료</button>
          </div>
        </li>
      </ul>
      <span v-else>메모 내용이 없습니다.</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    memoList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    editMemo (idx) {
      this.$emit('edit', idx);
    },
    deleteMemo (idx) {
      if (confirm('메모삭제')) {
        const index = this.memoList.findIndex(memo => memo.idx === idx);
        if (index !== -1) {
          this.$emit('delete', index);
        }
      }
    },
    completeMemo (idx) {
      this.$emit('complete', idx);
    }
  }
};
</script>
