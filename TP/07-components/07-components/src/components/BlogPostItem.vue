<template>
    <div>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: 'pas de description...'
        }
    },
}
</script>


<style scoped></style>