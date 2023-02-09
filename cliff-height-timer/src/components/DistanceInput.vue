<template>
  <custom-input :value="km" :setter="setKm">
    km
  </custom-input>
  <custom-input :value="m" :setter="setM">
    m
  </custom-input>
  <custom-input :value="dm" :setter="setDm">
    dm
  </custom-input>
  <custom-input :value="cm" :setter="setCm">
    cm
  </custom-input>
  <custom-input :value="mm" :setter="setMm">
    mm
  </custom-input>
</template>

<script>
import CustomInput from "@/components/Input.vue";

export default {
  name: "DistanceInput",
  components: {CustomInput},
  props: {
    condition: Boolean,
  },
  data() {
    return {
      m: 1,
      km: 0.001,
      dm: 10,
      cm: 100,
      mm: 1000,
    }
  },
  methods: {
    setM(e, m = +e.target.value) {
      this.m = m
      this.km = (m*10**-3).toFixed(4)
      this.dm = (m*10).toFixed(2)
      this.cm = (m*100).toFixed(2)
      this.mm = (m*1000).toFixed(2)
    },
    setKm(e, km = +e.target.value) {
      this.m = (km*1000).toFixed(2)
      this.km = km
      this.dm = (km*10000).toFixed(2)
      this.cm = (km*100000).toFixed(2)
      this.mm = (km*1000000).toFixed(2)
    },
    setDm(e, dm = +e.target.value) {
      this.m = (dm*10**-1).toFixed(2)
      this.km = (dm*10**-4).toFixed(4)
      this.dm = dm
      this.cm = (dm*10).toFixed(2)
      this.mm = (dm*100).toFixed(2)
    },
    setCm(e, cm = +e.target.value) {
      this.m = (cm*10**-2).toFixed(2)
      this.km = (cm*10**-5).toFixed(5)
      this.dm = (cm*10**-1).toFixed(2)
      this.cm = cm
      this.mm = (cm*10).toFixed(2)
    },
    setMm(e, mm = +e.target.value) {
      this.m = (mm*10**-3).toFixed(3)
      this.km = (mm*10**-6).toFixed(6)
      this.dm = (mm*10**-2).toFixed(2)
      this.cm = (mm*10**-1).toFixed(2)
      this.mm = mm
    },
  }
}
</script>

<style scoped>

</style>