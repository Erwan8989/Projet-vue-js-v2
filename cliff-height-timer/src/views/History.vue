<template>
  <v-container>
    <div className="history">
      <span>{{histo}}</span>
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
  }
}
</script>