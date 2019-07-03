<template>
  <v-snackbar class="notify-snackbar" v-model="global.snackBar.active" top right :timeout="global.snackBar.duration" :color="global.snackBar.color">
    {{ global.snackBar.message }}
    <v-btn dark flat @click="global.snackBar.active = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SnackBarNotify',
  computed: {
    ...mapState(['global']),
  },
};
</script>

<style scoped>
  .notify-snackbar {
    margin-top: 32px;
  }
</style>
