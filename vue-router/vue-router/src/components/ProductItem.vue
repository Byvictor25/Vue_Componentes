<script>
export default {
    props: {
        elem: Object,
    },
    data() {
        return {

        }
    },
    methods: {
        remove() {
            this.$emit('delProd', this.elem)
        },
        addUnit() {
            this.$emit('addUnit', this.elem)
        },
        delUnit() {
            this.$emit('delUnit', this.elem)
        }
    }
}
</script>

<template>
    <tr class="text-center">
        <td>{{ elem.id }}</td>
        <td>{{ elem.name }}</td>
        <td>{{ elem.category }}</td>
        <td>{{ elem.units }}</td>
        <td>{{ elem.price }}</td>
        <td>{{ elem.price * elem.units}} €</td>
        <td>
            <button @click="addUnit" class="btn btn-warning">
                <span class="material-icons">arrow_drop_up</span>
            </button>
            <button @click="delUnit" class="btn btn-success">
                <span class="material-icons">arrow_drop_down</span>
            </button>
            <button class="btn btn-info" @click="$router.push('/edit/' + elem.id)">
                <span class="material-icons">edit</span>
            </button>
            <button @click="remove" class="btn btn-danger">
                <span class="material-icons">delete_forever</span>
            </button>
        </td>
    </tr>
</template>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>