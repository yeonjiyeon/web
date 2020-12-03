<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" @keyup.enter="addTodo">
        <span class="addContainer" @click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTodoItem: ''
        }
    },
    methods: {
        addTodo() {
            // 이벤트 정상 작동 하는지 아래 코드로 확인
            // console.log(this.newTodoItem);
            //input 박스의 입력 값이 있을 때만 저장
            if(this.newTodoItem !=="") {
                //인풋 박스에 입력된 텍스트의 앞뒤 공백 문자열 제거
                var value = this.newTodoItem && this.newTodoItem.trim();
                localStorage.setItem(value, value);
                //인풋 박스의 입력 값을 초기화
                this.clearInput();
            }
        },
        clearInput() {
            this.newTodoItem = "";
        }
    }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
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
        background: linear-gradient(to right, #6478FB, #8763fb);
        display: block;
        widows: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
</style>