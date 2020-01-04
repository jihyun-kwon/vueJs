import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),  //template을 실행했을때 내부적으로 render함수가 실행
}).$mount('#app')
/*
  vue v2 버전 인스턴스. 위아래는 같음
new Vue({
  el: '#app',
  template: '<div>app></div>'
});
*/
