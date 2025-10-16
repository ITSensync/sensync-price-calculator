export const useAqmsStore = defineStore('aqms', () => {
  const sensors = ref([
    {
      id: 0,
      name: "PM10",
      price: 8000,
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
      type: 'partikulat'
    },
    {
      id: 1,
      name: "PM2.5",
      price: 12000,
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
      type: 'partikulat'
    },
    {
      id: 2,
      name: "CO",
      price: 11000,
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
      type: 'gas'
    },
    {
      id: 3,
      name: "NO2",
      price: 11000,
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
      type: 'gas'
    },
    {
      id: 4,
      name: "SO2",
      price: 15000,
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
      type: 'gas'
    },
    {
      id: 5,
      name: "O3",
      price: 11000,
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
      type: 'gas'
    },
    {
      id: 6,
      name: "HC",
      price: 4000,
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
      type: 'gas'
    },
    {
      id: 7,
      name: "Weather",
      price: 11000,
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
      type: 'weather'
    },
  ])

  const contractYears = ref(1);
  const aqmsType = ref('fixed');

  const totalPrice = computed(() =>
    sensors.value.filter((s) => s.checked).reduce((sum, s) => (sum + s.price), 0)
  );

  const totalPriceContract = computed(() => totalPrice.value * contractYears.value)

  return {
    sensors,
    contractYears,
    totalPriceContract,
    aqmsType
  }
})