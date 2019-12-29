//전역 컴포넌트와 지역 컴포넌트 등록하기

//'todo-footer'컴포넌트 전역 등록
//<p>This is anoter global childe compolnent</p>를 template으로 갖는 컴포넌트 등록하기
var apt = new Vue({
  el: '#app',
  data: {
        message: 'This is a parent component'
    },
    //실습2 - 'todo-list'컴포넌트 지역등록
    //<p>This is anoter local childe compolnent</p>를 template으로 갖는 컴포넌트 등록하기
    });
//질문 : 위에꺼 왜필요한지 모르겠다
Vue.component('todo-footer', {
     template: '<p>This is anoter global childe compolnent</p>'
});
var localComponent = {
    template: '<p>This is anoter local childe compolnent</p>'
}
new Vue({
   el: '#app',
   components: {
       'todo-list': localComponent
   }
});