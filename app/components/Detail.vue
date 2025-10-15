<script setup>
import { ref, computed } from "vue";

const sensors = ref([
  {
    name: "PH",
    price: 8000,
    checked: true,
    open: false,
    detail:
      "Sensor pH digunakan untuk mengukur tingkat keasaman air secara real-time.",
    specs: ["Rentang: 0–14 pH", "Akurasi: ±0.1 pH", "Output: 4–20mA / RS485"],
  },
  {
    name: "COD",
    price: 12000,
    checked: true,
    open: false,
    detail: "Sensor COD untuk mengukur kebutuhan oksigen kimia air limbah.",
    specs: ["Rentang: 0–1000 mg/L", "Akurasi: ±3%", "Proteksi: IP68"],
  },
  {
    name: "TSS",
    price: 4000,
    checked: true,
    open: false,
    detail: "Sensor TSS digunakan untuk mengukur total padatan tersuspensi.",
    specs: [
      "Rentang: 0–1000 mg/L",
      "Akurasi: ±5%",
      "Material: Stainless steel",
    ],
  },
  {
    name: "NH3N",
    price: 15000,
    checked: true,
    open: false,
    detail: "Sensor NH3-N digunakan untuk mengukur kadar amonia nitrogen.",
    specs: ["Rentang: 0–100 mg/L", "Akurasi: ±2%", "Suhu operasi: 0–60°C"],
  },
  {
    name: "Debit",
    price: 11000,
    checked: true,
    open: false,
    detail: "Sensor debit digunakan untuk memantau aliran air.",
    specs: ["Rentang: 0.5–20 m/s", "Akurasi: ±1%", "Output: RS485"],
  },
]);
const contractYears = ref(1);

// buka/tutup collapse
const toggleOpen = (i) => {
  sensors.value[i].open = !sensors.value[i].open;
};

// total harga sensor yang aktif
const totalPrice = computed(() =>
  sensors.value.filter((s) => s.checked).reduce((sum, s) => (sum + s.price), 0)
);

const totalPriceContract = computed(() => totalPrice.value * contractYears.value)
</script>

<template>
  <div class="w-2/3 h-full">
    <div class="flex justify-between items-center mb-4">
      <div class="flex items-center gap-2 text-xl">
        <Icon
          name="i-material-symbols:water-drop"
          class="text-blue-400"
        />
        <p class=" font-bold">SPARING</p>
      </div>
      <p class="text-lg font-normal">
        RP. {{ totalPriceContract }}K / <span class="text-sm">year</span>
      </p>
    </div>

    <div class="rounded-xl border border-zinc-300 py-8">
      <div class="px-6">
        <label class="select select-info w-full">
          <!-- <span className="label">Type</span> -->
          <select>
            <option disabled selected>Pick a product</option>
            <option>SPARING</option>
            <option>AQMS</option>
          </select>
        </label>
      </div>
      <div class="divider"></div>
      <fieldset class="fieldset px-6 gap-2 -mt-4">
        <legend class="fieldset-legend text-xl mb-2">Parameter</legend>

        <div
          v-for="(sensor, i) in sensors"
          :key="i"
          class="border border-gray-300 bg-white rounded-lg mb-2 overflow-hidden"
        >
          <!-- HEADER -->
          <div
            class="flex justify-between items-center px-4 py-3 cursor-pointer select-none"
            @click="toggleOpen(i)"
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
      </fieldset>

      <!-- <div class="text-right text-lg font-semibold mt-4 pr-6">
        Total: RP. {{ totalPrice }}K
      </div> -->
      <div class="divider"></div>

      <fieldset class="fieldset px-6 -mt-4">
        <legend class="fieldset-legend text-xl mb-2">Kontrak</legend>
        <div class="w-full max-w-xs">
          <input
            type="range"
            min="1"
            max="5"
            v-model="contractYears"
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
        <p class="label">Durasi kontrak dalam satuan tahun: {{ contractYears }}</p>
      </fieldset>
    </div>
  </div>
</template>

<style scoped>
div {
  font-family: Roboto, sans-serif;
}

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
