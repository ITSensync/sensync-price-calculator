export const useSparingStore = defineStore('sparing', () => {
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

  const totalPrice = computed(() =>
    sensors.value.filter((s) => s.checked).reduce((sum, s) => (sum + s.price), 0)
  );

  const totalPriceContract = computed(() => totalPrice.value * contractYears.value)

  return {
    sensors,
    contractYears,
    totalPriceContract
  }
})