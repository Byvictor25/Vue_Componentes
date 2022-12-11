import { reactive } from "vue";

let id = 4;

export const store = {
    debug: true,
    state: reactive({
        todos: [
            {
                id: 1,
                title: "Learn JavaScript",
                done: false
            },
            {
                id: 2,
                title: "Learn Vue",
                done: false
            },
            {
                id: 3,
                title: "Play around in JSFiddle",
                done: true
            },
            {
                id: 4,
                title: "Build something awesome",
                done: true
            }
            ] 
    }),
    addTodo(newValue) {
        this.state.todos.push({
            id: id++,
            title: newValue,
            done:false
        });
    },
    delTodos() {
        this.state.todos.splice(0,this.state.todos.length)
    }
}