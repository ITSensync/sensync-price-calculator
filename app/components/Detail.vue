<script setup>
import SparingParam from "./SparingParam.vue";
import AqmsParam from "./AqmsParam.vue";

const mainStore = useMainStore();


const sparingSensors = [
  {
    name: "PH",
    price: 8,
    checked: true,
    open: false,
    detail:
      "Sensor pH digunakan untuk mengukur tingkat keasaman air secara real-time.",
    specs: ["Rentang: 0–14 pH", "Akurasi: ±0.1 pH", "Output: 4–20mA / RS485"],
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
    detail: "Sensor TSS digunakan untuk mengukur total padatan tersuspensi.",
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
];

const aqmsSensors = [
  {
    name: "PM10",
    price: 8,
    checked: true,
    open: false,
    detail:
      "Sensor PM10 digunakan untuk mengukur konsentrasi partikel debu berukuran ≤10 mikrometer di udara. Data ini penting untuk pemantauan polusi udara dan kualitas pernapasan.",
    specs: [
      "Rentang pengukuran: 0 – 1.000 µg/m³",
      "Resolusi: 1 µg/m³",
      "Akurasi: ±10% dari pembacaan",
      "Output: RS485 / Modbus RTU",
      "Waktu respons: <10 detik",
      "Proteksi: IP65",
    ],
    type: "partikulat",
  },
  {
    name: "PM2.5",
    price: 12,
    checked: true,
    open: false,
    detail:
      "Sensor PM2.5 mendeteksi partikel halus berukuran ≤2.5 mikrometer yang berbahaya bagi kesehatan pernapasan dan jantung.",
    specs: [
      "Rentang pengukuran: 0 – 500 µg/m³",
      "Resolusi: 1 µg/m³",
      "Akurasi: ±10% dari pembacaan",
      "Output: RS485 / 4–20 mA",
      "Proteksi: IP65",
      "Suhu operasi: -20°C hingga +50°C",
    ],
    type: "partikulat",
  },
  {
    name: "CO",
    price: 11,
    checked: true,
    open: false,
    detail:
      "Sensor CO (Carbon Monoxide) digunakan untuk mendeteksi kadar gas karbon monoksida di udara, yang berbahaya bagi manusia pada konsentrasi tinggi.",
    specs: [
      "Rentang pengukuran: 0 – 1000 ppm",
      "Akurasi: ±2% F.S.",
      "Output: RS485 / 4–20 mA",
      "Waktu respons (T90): <60 detik",
      "Suhu operasi: -20°C hingga +50°C",
      "Proteksi: IP66",
    ],
    type: "gas",
  },
  {
    name: "NO2",
    price: 11,
    checked: true,
    open: false,
    detail:
      "Sensor NO₂ (Nitrogen Dioksida) digunakan untuk mengukur kadar gas NO₂ yang merupakan hasil pembakaran bahan bakar dan sumber utama kabut asap.",
    specs: [
      "Rentang pengukuran: 0 – 20 ppm",
      "Resolusi: 0.01 ppm",
      "Akurasi: ±2% F.S.",
      "Output: RS485 / Modbus RTU",
      "Proteksi: IP66",
      "Suhu operasi: -20°C hingga +50°C",
    ],
    type: "gas",
  },
  {
    name: "SO2",
    price: 15,
    checked: true,
    open: false,
    detail:
      "Sensor SO₂ (Sulfur Dioksida) mengukur kadar gas SO₂ di udara, yang biasanya dihasilkan dari pembakaran batu bara atau minyak.",
    specs: [
      "Rentang pengukuran: 0 – 20 ppm",
      "Resolusi: 0.01 ppm",
      "Akurasi: ±2% F.S.",
      "Output: RS485 / 4–20 mA",
      "Proteksi: IP66",
      "Waktu respons: <60 detik",
    ],
    type: "gas",
  },
  {
    name: "O3",
    price: 11,
    checked: true,
    open: false,
    detail:
      "Sensor O₃ (Ozon) digunakan untuk mengukur kadar ozon di udara, baik untuk pemantauan lingkungan maupun kontrol kualitas udara perkotaan.",
    specs: [
      "Rentang pengukuran: 0 – 10 ppm",
      "Resolusi: 0.01 ppm",
      "Akurasi: ±2% F.S.",
      "Output: RS485 / 4–20 mA",
      "Proteksi: IP66",
      "Waktu respons: <60 detik",
    ],
    type: "gas",
  },
  {
    name: "HC",
    price: 4,
    checked: true,
    open: false,
    detail:
      "Sensor HC (Hydrocarbon) digunakan untuk mendeteksi kandungan hidrokarbon total (THC) di udara yang dihasilkan dari emisi kendaraan dan industri.",
    specs: [
      "Rentang pengukuran: 0 – 100 ppm",
      "Resolusi: 0.1 ppm",
      "Akurasi: ±2% F.S.",
      "Output: RS485 / 4–20 mA",
      "Proteksi: IP65",
      "Suhu operasi: -20°C hingga +50°C",
    ],
    type: "gas",
  },
  {
    name: "Weather",
    price: 11,
    checked: true,
    open: false,
    detail:
      "Modul cuaca (Weather Station) digunakan untuk mengukur parameter meteorologi seperti suhu, kelembapan, kecepatan dan arah angin, serta curah hujan.",
    specs: [
      "Parameter: Suhu, Kelembapan, Tekanan, Angin (Arah & Kecepatan), Curah Hujan, Solar Radiasi, UV",
      "Output: RS485 / Modbus RTU",
      "Proteksi: IP65",
      "Suhu operasi: -40°C hingga +70°C",
      "Akurasi suhu: ±0.3°C",
      "Akurasi kelembapan: ±3% RH",
    ],
    type: "weather",
  },
];

watch(
  () => mainStore.activeProduct?.name,
  (newVal) => {
    if (!mainStore.activeProduct) return;
    if (newVal === "aqms") {
      mainStore.activeProduct.sensors = JSON.parse(JSON.stringify(aqmsSensors));
    } else if (newVal === "sparing") {
      mainStore.activeProduct.sensors = JSON.parse(
        JSON.stringify(sparingSensors)
      );
    }
  }
);
</script>

<template>
  <div class="w-2/3 h-full">
    <div class="flex justify-between items-center mb-4">
      <div class="flex items-center gap-2 text-xl">
        <Icon
          :name="
            mainStore.activeProduct.name == 'sparing'
              ? 'i-material-symbols:water-drop'
              : 'i-material-symbols:air'
          "
          class="text-blue-400"
        />
        <p class="font-bold">
          {{ mainStore.activeProduct.name.toUpperCase() }}
        </p>
      </div>
      <p class="text-lg font-bold">
        RP.
        {{ mainStore.selectedPriceProduct }} Juta /
        <span class="text-sm font-normal">tahun</span>
      </p>
    </div>

    <div class="rounded-xl border border-zinc-300 py-8">
      <div class="px-6">
        <label class="select select-info w-full">
          <!-- <span className="label">Type</span> -->
          <select v-model="mainStore.activeProduct.name">
            <option disabled selected>Pick a product</option>
            <option value="sparing">SPARING</option>
            <option value="aqms">AQMS</option>
          </select>
        </label>
      </div>
      <div class="divider"></div>

      <AqmsType v-if="mainStore.activeProduct.name === 'aqms'" />

      <SparingParam v-if="mainStore.activeProduct.name === 'sparing'" />
      <div v-else>
        <div class="divider"></div>
        <AqmsParam />
      </div>

      <div class="divider"></div>

      <fieldset class="fieldset px-6 -mt-4">
        <legend class="fieldset-legend text-xl mb-2">Kontrak</legend>
        <div class="w-full max-w-xs">
          <input
            type="range"
            min="1"
            max="5"
            name="rangeSparing"
            v-model="mainStore.activeProduct.contract"
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
          Durasi kontrak dalam satuan tahun:
          {{ mainStore.activeProduct.contract }}
        </p>
      </fieldset>
    </div>
  </div>
</template>

<!-- BACKUP TEMPLATE -->
<!-- <template>
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
            ? currencyFormat(sparingStore.totalPriceContract)
            : currencyFormat(aqmsStore.totalPriceContract)
        }}K /
        <span class="text-sm font-normal">tahun</span>
      </p>
    </div>

    <div class="rounded-xl border border-zinc-300 py-8">
      <div class="px-6">
        <label class="select select-info w-full">
          <span className="label">Type</span>
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
</template> -->

<style scoped>
div {
  font-family: Poppins, sans-serif;
}
</style>
