<script>
import { store } from "../store";

export default {
    data() {
        return {
            messages : store.state.messages
        }
    }
};
</script>

<template>
    <div class="row" v-if="messages.length != 0">
        <div class="alert alert-danger alert-dismissible" role="alert"
        v-for="mes in messages"
        :key="mes"
        >
        {{ mes }}
        </div>
    </div>
</template>