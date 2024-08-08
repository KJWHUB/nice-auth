import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNiceStore = defineStore('nice', () => {
  const niceResult = ref<string | null>(null)
  function setNiceResult(result: string | null) {
    niceResult.value = result
  }
  return { niceResult, setNiceResult }
})
