export const useMainStore = defineStore('main', () => {
  const inputProduct = ref([]);
  const aqmsType = ref('fixed');
  const selectedProductIndex = ref(null);

  const selectedPriceProduct = computed(() => {
    if (selectedProductIndex.value === null) return 0
    const product = listBillsProduct.value[selectedProductIndex.value]
    return product ? product.totalPriceContract : 0
  })

  const totalPrice = computed(() =>
    listBillsProduct.value.reduce((sum, p) => sum + p.totalPriceContract, 0)
  )

  const activeProduct = computed(() => {
    if (selectedProductIndex.value === null) return null
    return inputProduct.value[selectedProductIndex.value]
  })

  const listBillsProduct = computed(() => {
    return inputProduct.value.map(p => {
      const price = p.sensors.filter((s) => s.checked).reduce((sum, s) => (sum + s.price), 0)
      return {
        ...p,
        price,
        totalPriceContract: p.contract * price
      }
    })
  })


  function addProduct(product) {
    inputProduct.value.push(product)
  }

  function removeProduct(index) {
    inputProduct.value.splice(index, 1)
  }

  function selectProduct(i, product) {
    selectedProductIndex.value = i;
  }

  return {
    inputProduct,
    listBillsProduct,
    totalPrice,
    selectedProductIndex,
    activeProduct,
    selectedPriceProduct,
    aqmsType,
    addProduct,
    removeProduct,
    selectProduct,
  }
})