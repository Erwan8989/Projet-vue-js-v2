<template>
  <v-row>
    <div style="display: inline-block;">
      <input type="number" :value="value" @change="setter">
      <slot/>
    </div>
  </v-row>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    value: Number,
    setter: Function,
  }
}
</script>

<style scoped>

</style>