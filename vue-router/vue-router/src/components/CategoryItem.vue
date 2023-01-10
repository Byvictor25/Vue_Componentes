<script>
export default {
    props: ['categoria'],
    props: {
        cat: Object,
    },
    data() {
        return {

        }
    },
    methods: {
        remove() {
            this.$emit('delCat', this.cat)
        }
    }
}
</script>

<template>
    <tr class="text-center">
        <td>{{ cat.id }}</td>
        <td>{{ cat.name }}</td>
        <td>{{ cat.description }}</td>
        <td>
            <button @click="remove" class="btn btn-danger">
                <span class="material-icons">delete_forever</span>
            </button>
        </td>
    </tr>
</template>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>