<template>
  <v-container>
    <div class="history">
      <h1>Historique</h1>
      <div style="margin-bottom: 1em">
        <v-btn color="error" @click="delete_histo">Vider l'historique</v-btn>
      </div>
      <div v-for="(item, index) in histo" :key="index">
        <span>Time : {{ item.time }}</span>
        <span>  M : {{ item.m }}</span>
        <span>  Ft : {{ item.ft }}</span>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'history_vue',
  data: () => {
    return {
      histo: JSON.parse(localStorage.getItem("history"))
    }
  },
  methods: {
    delete_histo() {
      localStorage.removeItem("history")
      this.histo = null;
    }
  }
}
</script>