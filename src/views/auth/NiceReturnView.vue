<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

function getQueryParam(param: string) {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(param)
}

const closeWindow = () => {
  const w = window
  const EncodeData = getQueryParam('EncodeData')
  w.opener.postMessage(
    {
      type: 'NICE_AUTH_RESULT',
      data: EncodeData
    },
    '*'
  )

  w.close()
}

onMounted(() => {
  console.group('nice 인증 결과 route')
  console.log('window', window)
  console.log('rotue', route)

  closeWindow()

  console.groupEnd()
})
</script>

<template>
  <div style="min-height: 300px">
    <p>nice 인증 결과 페이지 입니다.</p>
  </div>
</template>

<style scoped></style>
