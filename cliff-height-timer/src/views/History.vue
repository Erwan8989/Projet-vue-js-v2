<template>
  <v-container>
    <div className="history">
      <span>Historique</span>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'history-test',
  data: () => {
    return {
      histo: JSON.parse(localStorage.getItem("history"))
    }
  }
}
</script>