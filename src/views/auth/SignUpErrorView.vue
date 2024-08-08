<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  console.log('회원가입 오류 페이지')
})
</script>

<template>
  <div>
    <h1>회원가입 오류</h1>
    <p>회원가입 중 오류가 발생했습니다.</p>
    <p>잠시 후 다시 시도해주세요.</p>
  </div>
</template>

<style scoped></style>
