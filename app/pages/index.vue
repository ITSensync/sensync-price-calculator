<template>
  <div class="bg-white w-[80vw] p-10 flex flex-row gap-5 justify-center min-h-screen">
    <!-- <p>INDEX</p> -->
    <Detail v-if="listLength > 0 && mainStore.activeProduct !== null" />
    <EmptyDetail v-else />
    <Bills />
    <!-- <div class="w-full h-full">
    </div> -->
  </div>
</template>

<script setup>
import Bills from "~/components/SummaryBills.vue";
import Detail from "~/components/Detail.vue";

const mainStore = useMainStore();
const listLength = computed(() => mainStore.listBillsProduct?.length || 0);

useHead({
  title: "Pricing & Personalization",
  meta: [
    {
      name: "description",
      content: "Sensync Product Price Calculator and Personalization",
    },
    { name: "keywords", content: "sensync, price, product, personalization" },
  ],
});
</script>
