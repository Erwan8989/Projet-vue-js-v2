<template>
  <custom-input :value="l" :setter="setL">
    l
  </custom-input>
  <custom-input :value="dl" :setter="setDl">
    dl
  </custom-input>
  <custom-input :value="cl" :setter="setCl">
    cl
  </custom-input>
  <custom-input :value="ml" :setter="setMl">
    ml
  </custom-input>
</template>

<script>
import CustomInput from "@/components/Input.vue";

export default {
  name: "VolumeInput",
  components: {CustomInput},
  props: {
    condition: Boolean,
  },
  data() {
    return {
      l: 1,
      dl: 10,
      cl: 100,
      ml: 1000,
    }
  },
  methods: {
    setL(e, l = +e.target.value) {
      this.l = l
      this.dl = (l*10).toFixed(2)
      this.cl = (l*100).toFixed(2)
      this.ml = (l*1000).toFixed(2)
    },
    setDl(e, dl = +e.target.value) {
      this.l = (dl*10**-1).toFixed(2)
      this.dl = dl
      this.cl = (dl*10).toFixed(2)
      this.ml = (dl*100).toFixed(2)
    },
    setCl(e, cl = +e.target.value) {
      this.l = (cl*10**-2).toFixed(2)
      this.dl = (cl*10**-1).toFixed(2)
      this.cl = cl
      this.ml = (cl*10).toFixed(2)
    },
    setMl(e, ml = +e.target.value) {
      this.l = (ml*10**-3).toFixed(4)
      this.dl = (ml*10**-2).toFixed(2)
      this.cl = (ml*10**-1).toFixed(2)
      this.ml = ml
    },
  }
}
</script>

<style scoped>

</style>