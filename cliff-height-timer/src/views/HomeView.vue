<template>
  <v-container fluid fill-height className="d-flex deep-purple lighten-1">
    <div className="home">
      <v-btn v-on:click="action" v-bind:class="state_class" dark fixed bottom right fab>
        <v-icon>{{ state_icon }}</v-icon>
      </v-btn>
      <h1>{{ time }} s</h1>
      <h3>{{ m }} m</h3>
      <h3>{{ ft }} ft</h3>
    </div>
  </v-container>
</template>

<script>

// @Is a allias to src
export default {
  name: 'home_vue',
  data: () => {
    return {
      running: false,
      time: 0,
      m: '0',
      ft: '0'
    }
  },
  computed: {
    state_icon () {
      // Retourne l’icone pour le FAB
      if (this.running) {
        return 'stop'
      } else {
        return 'play_arrow'
      }
    },
    state_class () {
      // Retourne la class pour le FAB
      if (this.running) {
        return 'red'
      } else {
        return 'green'
      }
    }
  },
  methods: {
    action () {
      // Gestion du start / stop
      this.start = new Date().getTime()

      if (!this.running) {
        this.running = true
        this.timerId = setInterval(() => {
          this.compute()
        }, 10)
      } else {
        this.running = false
        clearInterval(this.timerId)
        this.saveHistory({time: this.time, m: this.m, ft: this.ft})
      }
    },
    saveHistory (item) {
      // Sauvegarde dans l’historique
      let history = JSON.parse(localStorage.getItem('history'))
      if (!Array.isArray(history)) {
        history = []
      }
      history.unshift(item)
      localStorage.setItem('history', JSON.stringify(history))
    },
    compute () {
      let fallTime = new Date().getTime() - this.start
      let height = 16 * Math.pow((fallTime / 1000), 2)
      let numberDigits = 1
      if (height < 1) {
        numberDigits = 2
      }

      this.time = (fallTime / 1000).toFixed(2)
      this.ft = height.toFixed(numberDigits)
      this.m = (height / 3.2808).toFixed(numberDigits)
    }
  }
}
</script>

<style scoped>
.home {
  margin: 1em auto 0 auto;
  text-align: center;
}

.home > h1, .home > h2, .home > h3 {
  color: black;
}

.play_arrow {
  display : inline-block;
  height : 0;
  width : 0;
  border-top : 10px solid transparent;
  border-bottom : 10px solid transparent;
  border-left : 15px solid green;
}

.stop {
  background-color: red;
}

.red {
  background-color: #ad4242;
}

.green {
  background-color: #92be64;
}
</style>