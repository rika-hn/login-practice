<script setup>
// import { useCounterStore } from '~/store/counter'
// const counter = useCounterStore()
</script>
<template>
<form @submit="login">
    <input
    class="block text-4xl"
    type="email"
    placeholder="メールアドレス"
    >
    <input
    class="block"
    type="password"
    placeholder="パスワード"
    >
    <button
    class="block"
    type="submit"
    >
    ログインする
</button>
</form>
</template>
