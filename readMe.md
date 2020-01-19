191229
 * 컴포넌트 : 화면의 영역을 구분하여 개발할수 있는 뷰의 기능. 재사용성.

 * 지역컴포넌트 : new Vue({...el: ...})
 * 전역컴포넌트 : Vue.component({...})

 * 상위 컴포넌트 -> 하위 컴포넌트 : 데이터. props 속성 (v-bind:propsData=".... => props: [ 'propsData' ])
 * 하위 컴포넌트-> 상위  : 이벤트. event emit. (this.$emit(...))
(컴포넌트 통신 규칙의 장점 : 데이터는 내려가고 이벤트는 올라가기 때문에 데이터 흐름 추적 용이)'
<app-header v-bind:프롭스속성이름="상위컴포넌트 데이터이름">
(props.html 참조)

*같은레벨간의 컴포넌트 데이터 전달 : 하위컴포넌트1 : emit data -> root컴포넌트 : data 받아서 props data -> 하위컴포넌트2 data 전달받음 

* Axios : promise 기반의 http 통신 라이브러리
(통상적 웹 흐름 : 1. HttpRequest->2.backend logic -> 3.db 호출 ->4. db응답 -> 5.백엔드로직-> 6. HttpResponse)

* https://www.vuejs.org : 라이브러리. 모르는 문법은 검색해서 사용하기

* npm : node package manager. package.json의 library 등을 설명한다

* 디렉티브 : v-로 시작하는 vue 리스너
v-for : 반복 렌더링/ v-model : 양방향 데이터 바인딩 / v-on : 이벤트 리스너 디렉티브 

