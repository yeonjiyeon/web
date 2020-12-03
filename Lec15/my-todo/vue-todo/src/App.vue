<template>
    <div id="app">
        <TodoHeader></TodoHeader>
        <TodoInput @addTodo="addTodo"></TodoInput>
        <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
        <TodoFooter @removeAll="clearAll"></TodoFooter>
    </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
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
    background-color: #f6f6f8;      
  }
  input {
      border-style: groove;
      width: 200px;
  }
  .shadow {
      box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>