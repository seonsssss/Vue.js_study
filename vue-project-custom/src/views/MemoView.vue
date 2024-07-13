<template>
  <h2>Memo app</h2>
  중요도:
  <input type="checkbox">
  &emsp;
  카테고리:
  <select>
    <option value="개인" selected>개인</option>
    <option value="업무">업무</option>
    <option value="일정">일정</option>
  </select>
  <input type="text" v-model="newMemo" placeholder="메모를 입력하세요">
  <button type="button" @click="addMemo">메모 추가</button>
  <div v-show="isFind">
    <input type ="text" v-model="searchMemo" placeholder="검색어를 입력하세요">
    <button type ="button" @click="findMemo">검색</button>
  </div>
  <div style="margin: 20px 0;">
    <button type="button" @click="toggleSearch">검색창 열고닫기</button>
  </div>
  <div v-if="foundMemoList.length > 0">
    <h2>Search Result</h2>
    <ul>
      <li :key="i" v-for="(item, i) in foundMemoList">
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
  <div>
    <h2>Memo List</h2>
    <div>
      <ul v-if="memoList.length > 0" class="memo-list">
        <li :key="i" v-for="(item, i) in memoList" class="memo-item">
          <div class="memo-content">{{ item.contents }}</div>
          <div class ="info-value">
            <button type="button" class="edit" @click="editMemo(i)">수정</button>
            <button type="button" class="delete" @click="deleteMemo(i)">삭제</button>
            <button type="button" class="complete" @click="completeMemo(i)">완료</button>
          </div>
        </li>
      </ul>
      <span v-else>메모 내용이 없습니다.</span>
    </div>
    <!-- <ul>
      <li :key="i" v-for="(item, i) in memoList">
        <span>{{ item }}</span>
        <button type="button" class="edit" @click="editMemo(i)">수정</button>
        <button type="button" class="delete" @click="deleteMemo(i)">삭제</button>
        <button type="button" class="complete" @click="completeMemo(i)">완료</button>
      </li>
    </ul> -->
  </div>

  <div>
    <h2>Complete List</h2>
    <!-- <ul>
      <li :key="i" v-for="(item, i) in completeList">
        <span>{{ item }}</span>
        <button type="button" class="cancle" @click="cancleMemo(i)">취소</button>
      </li>
    </ul> -->
    <div>
      <ul v-if="completeList.length > 0" class="memo-list">
        <li :key="i" v-for="(item, i) in completeList" class="memo-item">
          <div class="memo-content">{{ item.contents }}</div>
          <div class ="info-value">
            <button type="button" class="cancle" @click="cancleMemo(i)">취소</button>
          </div>
        </li>
      </ul>
      <span v-else>완료한 메모 내용이 없습니다.</span>
    </div>
  </div>
  <div v-if="editIndex !== null" class="edit-modal">
    <div class="edit-modal-content">
      <button type="button" class="close" @click="closeModal">X</button>
      <h3>메모 편집</h3>
      <input type="text" class="modal-input" v-model="editedMemo" placeholder="메모를 입력하세요">
      <button type="button" @click="updateMemo">메모수정</button>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      newMemo: '',
      editedMemo: '',
      searchMemo: '',
      editIndex: null,
      memoList: [{
        idx: 1,
        name: '홍길동',
        priority: 1,
        category: '개인',
        contents: '첫 번째 메모',
        created_at: '2024-03-28',
        updated_at: '2024-03-28'
      }],
      completeList: [],
      isFind: false,
      foundMemoList: [],
      categoryVal: '개인', // 개인,업무, 일정 글로만
      priorityVal: 1, // 별
      date: ''
    };
  },
  methods: {
    addMemo () {
      if (this.newMemo.trim() !== '') {
        this.memoList.push(this.newMemo);
        this.newMemo = '';
      }
    },
    editMemo (idx) {
      this.editIndex = idx;
      this.editedMemo = this.memoList[idx];
    },
    updateMemo () {
      if (this.editedMemo.trim() !== '') {
        this.memoList[this.editIndex] = this.editedMemo;
        this.editedMemo = '';
        this.editIndex = null;
      }
    },
    deleteMemo (idx) {
      if (confirm('메모삭제')) {
        this.memoList.splice(idx, 1);
      }
    },
    completeMemo (idx) {
      this.completeList.push(this.memoList[idx]);
      this.memoList.splice(idx, 1);
    },
    cancleMemo (idx) {
      if (confirm('기존 메모리스트로 이동하시겠습니까?')) {
        this.memoList.push(this.completeList[idx]);
        this.completeList.splice(idx, 1);
      }
    },
    findMemo () {
      this.foundMemoList = this.memoList.filter((item) => item.includes(this.searchMemo)); // 검색
    },
    toggleSearch () {
      this.isFind = !this.isFind; // 토글
    },
    closeModal () {
      this.editIndex = null;
    },
    getNow () {
      const date = new Date();
      this.date = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`;
    }
  }
};
</script>
<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f4f4f4;
}

#app {
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

input[type="text"] {
  width: calc(100% - 80px);
  padding: 10px;
  margin: 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
}

button {
  padding: 10px 20px;
  margin-right: 5px;
  font-size: 16px;
  border: none;
  background-color: #1D4D9F;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  text-align: right;
}

span {
  font-size: 16px;
  margin-right: 10px;
}

button.edit {
  background-color: #8CABD9;
}

button.delete {
  background-color: #F08838;
}

button.complete {
  background-color: #F1EC7A;
}

button.cancle {
  background-color: #F6A7B8;
}

.edit-modal {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.edit-modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
}

.edit-modal-content input[type="text"] {

  /* width: 100%; */
  &.modal-input {
    width: 70%;
  }
}

.edit-modal-content button {
  margin-top: 10px;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  color: rgba(0, 0, 0, 0.5);
}
</style>
