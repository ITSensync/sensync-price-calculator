<template>
  <div class="bg-white h-full w-[65vw] p-10 flex flex-row gap-10 justify-center">
    <!-- <p>INDEX</p> -->
    <Detail />
    <Bills />
    <!-- <div class="w-full h-full">
    </div> -->
  </div>
</template>

<script setup>
import Bills from "~/components/Bills.vue";
import Detail from "~/components/Detail.vue";

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
