<template>
    <div class="card mb-3">
        <div class="card-header">
            {{ title }}
        </div>
        <div class="card-body">
          <slot />
        </div>
        <div class="card-footer">
          <slot name="footer" />
        </div>
    </div>
</template>


<script>
export default{
    props:{
        title:{
            type: String,
            default: ''
        }
    }
}
</script>


<style scoped></style>