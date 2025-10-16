<script setup>
const aqmsStore = useAqmsStore()
</script>

<template>
  <fieldset class="fieldset px-6 -mt-4">
    <legend class="fieldset-legend text-xl mb-2">Kontrak</legend>
    <div class="w-full max-w-xs">
      <input
        type="range"
        min="1"
        max="5"
        name="rangeAqms"
        v-model="aqmsStore.contractYears"
        class="range range-info"
        step="1"
      />
      <div class="flex justify-between px-2.5 mt-2 text-xs">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
      <div class="flex justify-between px-2.5 mt-2 text-xs">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
    </div>
    <p class="label">
      Durasi kontrak dalam satuan tahun: {{ aqmsStore.contractYears }}
    </p>
  </fieldset>
</template>
