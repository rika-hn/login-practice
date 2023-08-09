<script setup>
// import { useCounterStore } from '~/store/counter'
import Form from '@/components/atoms/Form.vue'

// const counter = useCounterStore()

</script>

<template>
  <div class="center mt-11 mb-8">
    <h1 class="text-3xl tracking-wide mb-4"
    >
      ログインページ
    </h1>
    <div class="flex justify-center">
      <Form />
    </div>
    </div>
    <NuxtLink to='/' class="hover:underline underline-offset-2 ease-in duration-500">
        戻る
    </NuxtLink>
</template>
