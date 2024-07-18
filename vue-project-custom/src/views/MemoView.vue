<template>
  <h2>Memo app</h2>
  중요도:
  <input type="checkbox" v-model= "priorityVal">
  &emsp;
  카테고리:
  <select v-model ="categoryVal">
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
        <span>{{ item.contents }}</span>
      </li>
    </ul>
  </div>
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
                <span class ="info-value">{{ item.category }}</span>
              </div>
            </div>
            <div class="info">
              <span class="priority">
                <i class="fas fa-exclamation-circle"></i>
              </span>
              <span class="info-value">
                <i v-if="item.priorty ===1" class="fas fa-star"></i>
                <i v-else class="far fa-star"></i>
              </span>
            </div>
          <div class ="memo-actions">
            <button type="button" class="edit" @click="editMemo(item.idx)">수정</button>
            <button type="button" class="delete" @click="deleteMemo(item.idx)">삭제</button>
            <button type="button" class="complete" @click="completeMemo(item.idx)">완료</button>
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
      },
      {
        idx: 2,
        name: '홍길동',
        priority: 0,
        category: '업무',
        contents: '두 번째 메모',
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
    setDate () {
      const date = new Date();
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      return `'${year}-${month}-${day}'`;
    },
    addMemo () {
      if (this.newMemo.trim() !== '') {
        const getDate = this.setDate();
        const addData = {
          idx: this.memoList.length + 1,
          name: '홍길동',
          priority: this.priorityVal,
          category: this.categoryVal,
          contents: this.newMemo,
          created_at: getDate,
          updated_at: getDate
        };
        this.memoList.push(addData);
        this.newMemo = '';
      }
    },
    editMemo (idx) {
      this.editIndex = idx;
      this.editedMemo = this.memoList.find(memo => memo.idx === idx).contents;
    },
    updateMemo () {
      if (this.editedMemo.trim() !== '') {
        const item = this.memoList.find(memo => memo.idx === this.editIndex);
        item.contents = this.editedMemo;
        item.updated_at = this.setDate();
        this.editIndex = null;
        this.editedMemo = '';
      }
    },
    deleteMemo (idx) {
      if (confirm('메모삭제')) {
        const index = this.memoList.findIndex(memo => memo.idx === idx);
        if (index !== -1) {
          this.memoList.splice(index, 1);
        }
        this.memoList.splice(idx, 1);
      }
    },
    completeMemo (idx) {
      const item = this.memoList.find(memo => memo.idx === idx);
      this.completeList.push(item);
      const index = this.memoList.findIndex(memo => memo.idx === idx);
      if (index !== -1) {
        this.memoList.splice(index, 1);
      }
    },
    cancleMemo (idx) {
      if (confirm('기존 메모리스트로 이동하시겠습니까?')) {
        const item = this.completeList.find(memo => memo.idx === idx);
        this.memoList.push(item);
        const index = this.completeList.findIndex(memo => memo.idx === idx);
        if (index !== -1) {
          this.completeList.splice(index, 1);
        }
      }
    },
    findMemo () {
      this.foundMemoList = [];
      const searchMemo = this.memoList.filter((item) => item.contents.includes(this.searchMemo)); // 검색
      if (searchMemo.length > 0) {
        this.foundMemoList = searchMemo;
      } else {
        alert('검색 결과가 없습니다.');
      }
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
  width: 100%;
  &.modal-input{
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

.memo-list {
  list-style: none;
  padding: 0;
}

.memo-item {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.memo-content p {
  margin: 0;
}

.memo-info {
  display: flex;
  align-items: center;
}

.info {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.info-value {
  margin-left: 5px;
}

.priority i {
  color: #f39c12;
}

.fa-star, .fa-exclamation-circle, .fa-folder {
  font-size: 18px;
}

.memo-actions button {
  padding: 5px 10px;
  margin-left: 10px;
  border: none;
  background-color: #1D4D9F;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.memo-actions button:hover {
  background-color: #0E3A7F;
}
</style>
