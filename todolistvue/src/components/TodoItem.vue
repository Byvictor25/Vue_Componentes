<script>
import { store } from "../store";
export default{
    props: ['todo'],
    props: {
        elem: Object,
    },
    data() {
        return {
            todos: store.state.todos
        }
    },
    methods: {
        remove() {
            this.$emit('delitem', this.elem.id);
        }
    }
};
</script>

<template>
    <li @dblclick="remove">
        <input type="checkbox" v-model="elem.done">
        <del v-if="elem.done">{{elem.title}}</del>
        <span v-else>{{elem.title}}</span>
    </li>
</template>