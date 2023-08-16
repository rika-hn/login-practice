<script setup lang="ts">
// import { loginUser } from '@/api/api';
import { useAsyncData } from '@/utils/hook'; // あなたのディレクトリに合わせて修正
import { useAuthStore } from '~/store/auth';

    const { error, execute } = useAsyncData();
    const email = ref('');
    const password = ref('');

    const authStore = useAuthStore();

    const login = async () => {
      if (email.value && password.value) {
        await execute(authStore.login, { email: email.value, password: password.value });
      }
    };
</script>
<template>
<form
@submit="login"
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
    <p v-if="error">{{ error }}</p>
</form>
</template>
