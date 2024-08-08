<script setup lang="ts">
import { useNice } from '@/composables/useNice'
import { useNiceStore } from '@/stores/nice'
import { storeToRefs } from 'pinia'
import { watchEffect } from 'vue'

const encodeData = import.meta.env.VITE_NICE_ENCODEDATA as string

const { goNice } = useNice({ encodeData })

const niceStore = useNiceStore()
const { setNiceResult } = niceStore
const { niceResult } = storeToRefs(niceStore)

// 부모 창에서 실행
window.addEventListener('message', function (event) {
  if (event.data.type === 'NICE_AUTH_RESULT') {
    const authResult = event.data.data
    console.log('부모 창에서 실행 되는 결과 값받기', authResult)

    setNiceResult(authResult)
  }
})

watchEffect(() => {
  console.log('/auth/sign-up 변경감지', niceResult.value)
})
</script>

<template>
  <div>
    <button @click="goNice">CheckPlus 안심본인인증 Click</button>
  </div>
</template>

<style scoped>
button {
  padding: 2rem;
  cursor: pointer;
}
</style>
