<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" placeholder="Type waht you have to do"
    v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fa fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        newTodoItem: '' //인풋박스에 텍스트를 입력하면 v-model 디렉티브로 인식(양방향데이터바인딩)
      }
    },
    methods: {
      addTodo() {
       // console.log(this.newTodoItem)   입력받은 data가 잘 출력되는지 확인
        if(this.newTodoItem !== ''){
          var value = this.newTodoItem && this.newTodoItem.trim();
          localStorage.setItem(value, value);
          this.clearInput();
        }
      },
      clearInput(){ //단일책임원칙 디자인패턴에 의해, add기능아닌 clear기능 메서드 추가
        this.newTodoItem = '';
      }
    }

  }
</script>
<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: aliceblue;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: inline-block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: aquamarine;
    vertical-align: middle;
  }
</style>
