<script setup>
import { ref, computed } from "vue";
import SparingParam from "./SparingParam.vue";
import AqmsContract from "./AqmsContract.vue";
import SparingContract from "./SparingContract.vue";
import AqmsParam from "./AqmsParam.vue";

const sparingStore = useSparingStore();
const aqmsStore = useAqmsStore();
const mainStore = useMainStore();
</script>

<template>
  <div class="w-2/3 h-full">
    <div class="flex justify-between items-center mb-4">
      <div class="flex items-center gap-2 text-xl">
        <Icon
          :name="
            mainStore.productType == 'sparing'
              ? 'i-material-symbols:water-drop'
              : 'i-material-symbols:air'
          "
          class="text-blue-400"
        />
        <p class="font-bold">{{ mainStore.productType.toUpperCase() }}</p>
      </div>
      <p class="text-lg font-bold">
        RP.
        {{
          mainStore.productType === "sparing"
            ? sparingStore.totalPriceContract
            : aqmsStore.totalPriceContract
        }}K /
        <span class="text-sm font-normal">tahun</span>
      </p>
    </div>

    <div class="rounded-xl border border-zinc-300 py-8">
      <div class="px-6">
        <label class="select select-info w-full">
          <!-- <span className="label">Type</span> -->
          <select v-model="mainStore.productType">
            <option disabled selected>Pick a product</option>
            <option value="sparing">SPARING</option>
            <option value="aqms">AQMS</option>
          </select>
        </label>
      </div>
      <div class="divider"></div>

      <AqmsType v-if="mainStore.productType === 'aqms'" />

      <SparingParam v-if="mainStore.productType == 'sparing'" />
      <div  v-else>
        <div class="divider"></div>
        <AqmsParam />
      </div>

      <div class="divider"></div>

      <SparingContract v-if="mainStore.productType === 'sparing'" />
      <AqmsContract v-else />
    </div>
  </div>
</template>

<style scoped>
div {
  font-family: Poppins, sans-serif;
}
</style>
