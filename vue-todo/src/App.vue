<template>
  <div id="app">
    <!-- 3. 컴포넌트 등록완료했다면 태그를 app태그 안에 추가 -->
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>
<script>  //주의 : import와 export가 나뉘어져있으면 not defined 에러
  //1. es6 방식으로 지역 components import
  import TodoHeader from './components/TodoHeader.vue'
  import TodoFooter from './components/TodoFooter.vue'
  import TodoList from './components/TodoList.vue'
  import TodoInput from './components/TodoInput.vue'

  export default {  //2. 지역컴포넌트를 export하여 최상위 컴포넌트인 App.vue파일에 적용
    components: {
      'TodoHeader': TodoHeader,
      'TodoFooter': TodoFooter,
      'TodoList': TodoList,
      'TodoInput': TodoInput,
    }
  }
</script>

<style>
</style>
