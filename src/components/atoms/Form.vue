<script setup lang="ts">
import { loginUser } from '@/api/api';

const email = ref('');
const password = ref('');

const handleLogin = async (event: Event) => {
    event.preventDefault();  // フォームのデフォルトの送信動作をキャンセルする
    try {
        const response = await loginUser(email.value, password.value);
        console.log("ログイン成功！")

    } catch (error) {
        console.log("ログインに失敗しました")
    }
};

</script>
<template>
<form 
@submit="handleLogin"
>
    <input
    class="block border rounded-sm border-solid mb-2 text-sm px-1 py-1"
    type="email"
    placeholder="メールアドレス"
    >
    <input
    class="block border rounded-sm border-solid mb-4 text-sm px-1 py-1"
    type="password"
    placeholder="パスワード"
    >
    <button
    class="block border rounded-sm border-solid px-2 py-1 text-xs"
    type="submit"
    >
    ログイン
</button>
</form>
</template>
