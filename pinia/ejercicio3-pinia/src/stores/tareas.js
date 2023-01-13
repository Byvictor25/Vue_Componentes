import { defineStore } from 'pinia'
import axios from 'axios'

const url = 'http://localhost:3000'
export const useTareasStore = defineStore('tareas', {
  state() {
    return {
      tareas: []
    }
  },
  actions: {
    async loadTareas() {
      try {
        const response = await axios.get(url + '/tareas')
        response.data.forEach((tarea) => this.tareas.push(tarea))
      } catch (error) {
        alert(error)
      }
    },
    async addTodo(newTodo) {
      try {
        const response = await axios.post(url + '/tareas', {
          title: newTodo,
          done: false
        })
        this.tareas.push(response.data)
      } catch(error) {
        alert(error)
      }
    },
    async delTodo(id) {
      try {
        const response = await axios.delete(url + '/tareas/' + id)
        this.tareas = this.tareas.filter((item) => item.id !== id)
      } catch(error) {
        alert(error)
      }
    },

    delAllTodos() {
      this.tareas.forEach(async(tarea) => await this.delTodo(tarea.id))
    },

    async changeDone(todo) {
      try {
        const response = await axios.patch(url + '/tareas/' + todo.id, {
          done: !todo.done
        })
        todo.done = response.data.done;
      } catch(error) {
        alert(error)
      }
    }
  },
})
