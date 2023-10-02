<template>
    <div class="card-container"  @click.prevent="closeMenu">
        <div class="card" @click.stop="">

        </div>
    </div>
</template>

<script setup lang="ts">

const emit = defineEmits(['closeMenu'])

const closeMenu = () => {
    emit('closeMenu')
}

</script>

