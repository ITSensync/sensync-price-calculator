<script setup>
const aqmsStore = useAqmsStore();

</script>

<template>
  <div>
    <fieldset class="fieldset px-6 gap-2 -mt-4">
      <legend class="fieldset-legend text-xl mb-2">AQMS Type</legend>
      <div class="flex w-full justify-between">
        <label class="label w-1/3">
          <input type="radio" name="deviceType" class="radio radio-info" value="fixed" v-model="aqmsStore.aqmsType"/>
          Fixed
        </label>
        <label class="label w-1/3">
          <input type="radio" name="deviceType" class="radio radio-info" value="portable" v-model="aqmsStore.aqmsType"/>
          Portable
        </label>
        <label class="label w-1/3">
          <input type="radio" name="deviceType" class="radio radio-info" value="mini" v-model="aqmsStore.aqmsType"/>
          Mini
        </label>
      </div>
    </fieldset>
  </div>
</template>
