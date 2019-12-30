191229
 * 컴포넌트 : 화면의 영역을 구분하여 개발할수 있는 뷰의 기능. 재사용성.

 * 지역컴포넌트 : new Vue({...el: ...})
 * 전역컴포넌트 : Vue.component({...})

 * 상위 컴포 -> 하위 : 데이터. props 속성
 * 하위 넌트-> 상위 : 이벤트. event 속성
(컴포넌트 통신 규칙의 장점 : 데이터는 내려가고 이벤트는 올라가기 때문에 데이터 흐름 추적 용이)'
<app-header v-bind:프롭스속성이름="상위컴포넌트 데이터이름">
(props.html 참조)

* 뷰라우터 : 싱글페이지 에플리케이션을 이용하여 구현한 라우터
new VueRouter({...});

* Axios : promise 기반의 http 통신 라이브러리

(통상적 웹 흐름 : 1. HttpRequest->2.backend logic -> 3.db 호출 ->4. db응답 -> 5.백엔드로직-> 6. HttpResponse)


