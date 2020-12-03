
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue Templates Quiz</title>
  </head>
  <body>
    <div id="app">
      <header>
        <h3>
          {{ message }},{{message2}}
          <!-- #1. 새로 추가한 데이터 속성을 아래에 추가 -->
        </h3>
      </header>
      <section>
        <!-- #2. uid 값을 변경한 후 크롬 개발자 도구의 '요소 검사' 기능으로 아래 p 태그의 id 값 확인 -->
        <p v-bind:id="uid"></p>

        <button v-on:click="clickBtn">alert</button>
        <!-- 위 코드와 아래 코드는 동일한 역할을 수행. v-on:를 간소화한 문법은 @ -->
        <!-- <button @click="clickBtn">alert</button> -->

        <!-- #3. button 태그를 추가하고 새로 추가한 클릭 메서드를 연결 -->

        <button v-on:click="clickBtn2">button2</button>

        <!-- #4. 데이터의 flag 속성 값의 변화에 따라 아래 내용이 어떻게 변하는지 확인 -->
        <ul v-if="flag">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </section>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
el: '#app',
data: {
  message : 'Hello Vue.js',
  // 할 일 #1
  // 새로운 데이터 속성을 1개 추가하고, 머스타쉬 {{ }} 데이터 바인딩을 이용하여 화면에 표시해보세요.
  message2 : 'Welcome to korea!!!',
  uid: '30',
  // 할 일 #2
  // uid를 변경하고 해당 uid의 변경 여부를 크롬 개발자 도구의 '화면 요소 검사 기능'으로 확인해보세요. p 태그의 id 값을 검사.

  flag: true
  // 할 일 #4
  // 위 flag 값을 false로 변경했을 때 화면에 어떤 영향을 주는지 확인해보세요.
},
methods: {
  // ES6 문법
  clickBtn() {
    console.log("hi");
  },
  // ES5 문법 - 위 ES6 문법과 동일한 코드
  // clickBtn: function() {
  //   console.log("hi");
  // }
  clickBtn2(){
    console.log('but2 is cliked');
  }
  // 할 일 #3
  // eventMethod를 하나 추가하고 index.html의 #3 영역에 해당 이벤트를 실행하는 버튼을 추가하세요.
}
});
 </script>
 </body>
</html>
