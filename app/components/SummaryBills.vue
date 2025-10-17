<script setup>
const mainStore = useMainStore();
const listLength = computed(() => mainStore.listBillsProduct?.length || 0);

function handleAddProduct() {
  mainStore.addProduct({
    name: "sparing",
    sensors: [
      {
        name: "PH",
        price: 8,
        checked: true,
        open: false,
        detail:
          "Sensor pH digunakan untuk mengukur tingkat keasaman air secara real-time.",
        specs: [
          "Rentang: 0–14 pH",
          "Akurasi: ±0.1 pH",
          "Output: 4–20mA / RS485",
        ],
      },
      {
        name: "COD",
        price: 12,
        checked: true,
        open: false,
        detail: "Sensor COD untuk mengukur kebutuhan oksigen kimia air limbah.",
        specs: ["Rentang: 0–1000 mg/L", "Akurasi: ±3%", "Proteksi: IP68"],
      },
      {
        name: "TSS",
        price: 4,
        checked: true,
        open: false,
        detail:
          "Sensor TSS digunakan untuk mengukur total padatan tersuspensi.",
        specs: [
          "Rentang: 0–1000 mg/L",
          "Akurasi: ±5%",
          "Material: Stainless steel",
        ],
      },
      {
        name: "NH3N",
        price: 15,
        checked: true,
        open: false,
        detail: "Sensor NH3-N digunakan untuk mengukur kadar amonia nitrogen.",
        specs: ["Rentang: 0–100 mg/L", "Akurasi: ±2%", "Suhu operasi: 0–60°C"],
      },
      {
        name: "Debit",
        price: 11,
        checked: true,
        open: false,
        detail: "Sensor debit digunakan untuk memantau aliran air.",
        specs: ["Rentang: 0.5–20 m/s", "Akurasi: ±1%", "Output: RS485"],
      },
    ],
    contract: 1,
  });
}

function handleRemoveProduct(i) {
  mainStore.removeProduct(i);
}
</script>

<template>
  <div class="w-1/3 relative">
    <div
      class="sticky top-4 gap-4 flex flex-col justify-between rounded-xl border border-zinc-300"
      :class="listLength > 0 ? 'h-fit' : 'h-fit'"
    >
      <div>
        <div class="flex justify-between items-center px-4 pt-10">
          <div class="flex items-center gap-2">
            <Icon
              name="i-material-symbols:price-change-rounded"
              class="text-blue-400 text-3xl"
            />
            <p class="text-lg font-extrabold">Rincian Harga</p>
          </div>
          <p class="text-lg">(IDR)</p>
        </div>

        <div class="w-full px-4 mt-2">
          <button
            class="btn rounded-xl w-full text-info"
            @click="handleAddProduct"
          >
            + Product
          </button>
        </div>
        <div class="divider"></div>

        <div v-if="listLength == 0" class="pb-4 px-4">
          <div
            class="flex items-center justify-center gap-4 bg-blue-100 border border-sky-500 p-4 rounded-xl"
          >
            <Icon
              name="i-material-symbols:chat-info"
              class="text-blue-400 text-6xl"
            />
            <p class="text-sm">
              Detail produk yang anda masukan untuk estimasi akan ditampilkan
              pada bagian ini
            </p>
          </div>
        </div>

        <div v-else>
          <div class="px-4 text-lg">
            <p>Daftar Produk ({{ listLength }})</p>
          </div>

          <div class="flex flex-col items-center gap-4 p-4">
            <div
              v-for="(product, i) in mainStore.listBillsProduct"
              :key="i"
              @click="mainStore.selectProduct(i, product)"
              class="cursor-pointer flex items-center p-4 rounded-xl w-full h-full justify-between border transition-all duration-300"
              :class="
                mainStore.selectedProductIndex === i
                  ? 'bg-blue-200 border-blue-600 shadow-md'
                  : 'bg-white border-zinc-300 hover:bg-blue-50'
              "
            >
              <div class="flex items-center gap-2 w-1/2 h-full">
                <!-- <Icon
                  name="i-material-symbols:edit"
                  class="text-xl text-blue-400"
                /> -->
                <div class="flex flex-col">
                  <p class="text-sm font-bold mb-2">
                    {{ product.name.toUpperCase() }}
                  </p>
                  <p class="text-[10px] text-zinc-500 mb-1">
                    {{
                      product.sensors
                        .filter((item) => item.checked)
                        .map((item) => item.name)
                        .join(", ")
                    }}
                  </p>
                  <p class="text-[10px] text-zinc-500">
                    {{ product.contract }} years contract
                  </p>
                </div>
              </div>

              <div class="flex items-start w-fit h-full gap-2">
                <p class="text-md font-black">
                  RP. {{ product.totalPriceContract }} JT
                </p>
                <button
                  @click.stop="handleRemoveProduct(i)"
                  class="cursor-pointer"
                >
                  <Icon
                    name="i-material-symbols:delete-forever-outline"
                    class="text-blue-400 text-2xl"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="bg-zinc-800 text-white flex items-center justify-between p-4 rounded-b-xl"
      >
        <p>Estimasi Harga</p>
        <p class="font-bold text-emerald-400">
          RP. {{ mainStore.totalPrice }} Juta
          <span class="font-normal text-sm text-white">/ thn</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
div {
  font-family: Poppins, sans-serif;
}
</style>
