<template>
    <div class="header">
        <p>Status: {{ status }}</p>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'auth-header',
    auth:false
});
const { status } = useAuth();
</script>