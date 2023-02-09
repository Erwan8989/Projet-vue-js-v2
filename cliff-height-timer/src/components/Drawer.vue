<template>
  <div>
    <v-toolbar class="deep-purple" />
    <v-list dense>
      <template v-for="(item, i) in items" :key="i">
        <v-divider dark v-if="item.divider" ></v-divider>
        <v-list-item ripple :to="item.action" v-else>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="body-2">{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'drawer-g',
  data: function () {
    return {
      items: [
        { icon: 'home', text: this.$t('drawer.home'), action: '/' },
        { icon: 'history', text: this.$t('drawer.history'), action: '/history' },
        { icon: 'help', text: this.$t('drawer.about'), action: '/about' },
        { icon: 'help', text: this.$t('drawer.convertisseur'), action: '/convertisseur' },
      ]
    }
  }
}
</script>