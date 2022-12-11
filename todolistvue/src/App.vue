<script>
import AppTitle from "./components/AppTitle.vue";
import ShowList from "./components/ShowList.vue";
import TodoAdd from "./components/TodoAdd.vue";
import TodoDelAll from "./components/TodoDelAll.vue";
import TodoItem from "./components/TodoItem.vue";

export default {
  components: {
        AppTitle,
        ShowList,
        TodoAdd,
        TodoDelAll,
        TodoItem,
  }
};
</script>

<template>
<app-title></app-title>
<show-list></show-list>
<todo-add></todo-add>
<todo-del-all></todo-del-all>

</template>


