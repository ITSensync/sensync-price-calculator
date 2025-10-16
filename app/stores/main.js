export const useMainStore = defineStore('main', () => {
  const productType = ref('sparing');

  return {
    productType
  }
})