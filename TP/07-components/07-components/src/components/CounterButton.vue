<template>
    <div>
        <button class="mb-2 btn btn-primary" @click="count++">Compteur : {{ count }} </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>


<style scoped></style>