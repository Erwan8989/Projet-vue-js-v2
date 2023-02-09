<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <div>
      <label for="name">Time : </label>
      <input id="name" v-model="time">
    </div>
    <div>

      <label for="review">m : </label>
      <textarea id="review" v-model="m"></textarea>
    </div>
    <div>

      <label for="rating">ft : </label>
      <textarea id="review" v-model="ft"></textarea>
    </div>

    <input class="button" type="submit" value="Envoyer">
  </form>
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

</style>