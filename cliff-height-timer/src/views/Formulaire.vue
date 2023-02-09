<template>
  <h1>Formulaire d'ajout manuel à l'historique</h1>
  <v-form class="review-form" @submit.prevent="onSubmit">
    <div class="bloc_div">
      <v-text-field
          v-model="time"
          label="Time"
          required
      ></v-text-field>
    </div>
    <div class="bloc_div">
      <v-text-field
          v-model="m"
          label="m"
          required
      ></v-text-field>
    </div>
    <div class="bloc_div">
      <v-text-field
          v-model="ft"
          label="ft"
          required
      ></v-text-field>
    </div>
    <v-btn
        color="success"
        @click="onSubmit()"
    >Ajouter</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "Formulaire_vue",
  data() {
    return {
      time: '',
      m: '',
      ft: null
    }
  },
  methods: {
    onSubmit() {
      let productReview = {
        time: this.time,
        m: this.m,
        ft: this.ft,
      }
      this.$emit('review-submitted', productReview)
      this.saveHistory({time: this.time, m: this.m, ft: this.ft})

    },
    saveHistory(item) {
      // Sauvegarde dans l’historique
      let history = JSON.parse(localStorage.getItem('history'))
      if (!Array.isArray(history)) {
        history = []
      }
      history.unshift(item)
      localStorage.setItem('history', JSON.stringify(history))
    }
  }
}
</script>

<style scoped>
.bloc_div{
  margin: auto;
  width: 45em;
}
</style>