<template>
    <div id="app">
        <TodoHeader></TodoHeader>
        <p>
            <router-link to="/main"><button>Main 화면</button></router-link>
            <router-link to="/login">로그인 화면</router-link>
        </p>
        <router-view></router-view>           
        <TodoInput v-on:addTodo="addTodo"></TodoInput>
        <TodoList v-bind:propsdata="todoItems" v-on:removeTodo="removeTodo"></TodoList>
        <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
    </div>
</template>
 <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes:[
        //path : url 주소, component : 페이지에 보여질 컴포넌트
        {
            path: '/',
            name: '/main'
        },
        {
            path: '/login',
            name : 'login'}
        ]
        })

export default {
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    clearAll() {
      localStorage.clear();
      this.todoItems=[];
    },
    addTodo(todoItem){
      //로컬 스토리지에 데이터를 추가하는 로직
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    created() {
    if(localStorage.length>0) {
        for(var i=0; i<localStorage.length; i++) {
            this.todoItems.push(localStorage.key(i));
        }
      }
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}

</script>



<style>
    body {
        text-align: center;
        background-color: #FFFFF3;
    }
    input {
        border-style: groove;
        width: 200px;
    }
    .shadow {
        box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
    }
</style>