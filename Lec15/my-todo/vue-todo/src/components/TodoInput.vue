<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="오늘의 할 일을 입력하세요" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>
        <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">경고</h3>
            <span slot="footer" @click="showModal = false">
                할 일을 입력하세요.
                <i class="closeModalBtn fas fa-times" aria-hidden="ture"></i> 
            </span>
        </modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue'
export default {
    data() {
        return {
            newTodoItem: '',
            showModal: false
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
                this.$emit('addTodo', value);
                localStorage.setItem(this.newTodoItem, this.newTodoItem);
                //인풋 박스의 입력 값을 초기화
                this.clearInput();
            } else{this.showModal = !this.showModal;}
        },
        clearInput() {
            this.newTodoItem = "";
        }
    },
    components: {
        Modal: Modal
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
        padding-left: 75px;
        border-style: none;
        font-size: 0.9rem;
        /* text-align: center; */
    }
    .addContainer {
        float: right;
        /* background: linear-gradient(to right, #6478FB, #8763fb); */
        background: linear-gradient(to right, #D1B6E1, #A593E0);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
</style>