<template>
  <v-main>
    <v-container class="bloc">
      <v-row class="ruler">
        <v-btn @click="setDistance">
          <v-icon>mdi-ruler</v-icon>
        </v-btn>
        <v-btn @click="setVolume">
          <v-icon>mdi-water</v-icon>
        </v-btn>
      </v-row>
      <distance-input v-if="change === 0"></distance-input>
      <volume-input v-else-if="change === 1"></volume-input>
    </v-container>
  </v-main>
</template>

<script>
// import myToolbar from "@/components/MyToolbar";
import DistanceInput from "@/components/DistanceInput.vue";
import VolumeInput from "@/components/VolumeInput.vue";
export default {
  name: "Convertisseur_vue",
  components: {VolumeInput, DistanceInput},
  data() {
    return {
      change: 0
    }
  },
  methods: {
    setDistance() {
      this.change = 0
    },
    setVolume() {
      this.change = 1
    }
  }
}
</script>

<style scoped>

.ruler {
  display: flex;
  align-items: center;
  gap: 0.7em;
  margin: 0 auto 1em;
  width: fit-content;
}

.bloc {
  width: fit-content;
  margin: 0 auto;
}
</style>