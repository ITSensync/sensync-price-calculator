<script setup>
const aqmsStore = useAqmsStore();
const data = ref(aqmsStore.sensors);

const emit = defineEmits(["toggle"]);

const partikulatSensors = computed(() =>
  data.value.filter((sensor) => sensor.type == "partikulat")
);
const gasSensors = computed(() =>
  data.value.filter((sensor) => sensor.type == "gas")
);
const weatherSensors = computed(() =>
  data.value.filter((sensor) => sensor.type == "weather")
);

const toggleOpen = (selectedSensor) => {
  data.value.forEach((sensor) => {
    if (sensor !== selectedSensor) sensor.open = false;
  });
  selectedSensor.open = !selectedSensor.open;
};

const isToggleDisabled = (sensor) => {
  return (
    (aqmsStore.aqmsType === "mini" &&
      (sensor.name === "PM10" || sensor.type === "gas")) ||
    (aqmsStore.aqmsType === "portable" &&
      (sensor.name === "PM10" || sensor.name === "HC" || sensor.name === "CO" || sensor.name === "O3"))
  );
};

watchEffect(() => {
  data.value.forEach((sensor) => {
    if (isToggleDisabled(sensor)) {
      sensor.checked = false;
    } else {
      sensor.checked = true;
    }
  });
});
</script>

<template>
  <fieldset class="fieldset px-6 gap-2 -mt-4">
    <legend class="fieldset-legend text-xl">Parameter</legend>

    <div>
      <p class="text-md mb-2">Partikulat</p>
      <div
        v-for="(sensor, i) in partikulatSensors"
        :key="i"
        class="border border-gray-300 bg-white rounded-lg mb-2 overflow-hidden"
      >
        <!-- HEADER -->
        <div
          class="flex justify-between items-center px-4 py-3 cursor-pointer select-none"
          @click="toggleOpen(sensor)"
        >
          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              class="toggle toggle-info"
              v-model="sensor.checked"
              :disabled="isToggleDisabled(sensor)"
              @click.stop
            />
            <p class="text-lg font-bold text-zinc-900">{{ sensor.name }}</p>
          </div>
          <div class="flex items-center gap-3">
            <p class="text-sm font-medium text-zinc-400">Lihat detail</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 transition-transform duration-300"
              :class="{ 'rotate-180': sensor.open }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <transition name="collapse">
          <div v-if="sensor.open" class="px-4 py-4 text-gray-700 bg-gray-50">
            <p class=""><b>Detail:</b> {{ sensor.detail }}</p>
            <ul class="list-disc list-inside text-sm text-gray-600">
              <li v-for="(spec, j) in sensor.specs" :key="j">{{ spec }}</li>
            </ul>
          </div>
        </transition>
      </div>
    </div>

    <div>
      <p class="text-md mb-2">Gas</p>
      <div
        v-for="(sensor, i) in gasSensors"
        :key="i"
        class="border border-gray-300 bg-white rounded-lg mb-2 overflow-hidden"
      >
        <!-- HEADER -->
        <div
          class="flex justify-between items-center px-4 py-3 cursor-pointer select-none"
          @click="toggleOpen(sensor)"
        >
          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              class="toggle toggle-info"
              v-model="sensor.checked"
              :disabled="isToggleDisabled(sensor)"
              @click.stop
            />
            <p class="text-lg font-bold text-zinc-900">{{ sensor.name }}</p>
          </div>
          <div class="flex items-center gap-3">
            <p class="text-sm font-medium text-zinc-400">Lihat detail</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 transition-transform duration-300"
              :class="{ 'rotate-180': sensor.open }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <transition name="collapse">
          <div v-if="sensor.open" class="px-4 py-4 text-gray-700 bg-gray-50">
            <p class=""><b>Detail:</b> {{ sensor.detail }}</p>
            <ul class="list-disc list-inside text-sm text-gray-600">
              <li v-for="(spec, j) in sensor.specs" :key="j">{{ spec }}</li>
            </ul>
          </div>
        </transition>
      </div>
    </div>

    <div>
      <p class="text-md mb-2">Cuaca</p>
      <div
        v-for="(sensor, i) in weatherSensors"
        :key="i"
        class="border border-gray-300 bg-white rounded-lg mb-2 overflow-hidden"
      >
        <!-- HEADER -->
        <div
          class="flex justify-between items-center px-4 py-3 cursor-pointer select-none"
          @click="toggleOpen(sensor)"
        >
          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              class="toggle toggle-info"
              v-model="sensor.checked"
              @click.stop
            />
            <p class="text-lg font-bold text-zinc-900">{{ sensor.name }}</p>
          </div>
          <div class="flex items-center gap-3">
            <p class="text-sm font-medium text-zinc-400">Lihat detail</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 transition-transform duration-300"
              :class="{ 'rotate-180': sensor.open }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <transition name="collapse">
          <div v-if="sensor.open" class="px-4 py-4 text-gray-700 bg-gray-50">
            <p class=""><b>Detail:</b> {{ sensor.detail }}</p>
            <ul class="list-disc list-inside text-sm text-gray-600">
              <li v-for="(spec, j) in sensor.specs" :key="j">{{ spec }}</li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </fieldset>
</template>

<style scoped>
.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.25s ease;
  max-height: 500px;
  opacity: 1;
}
.collapse-enter-from,
.collapse-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
