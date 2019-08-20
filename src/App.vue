<template>
  <v-app>
    <menu-form>
    </menu-form>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer>
        <div> © {{ getDate }} UTI Humanidades </div>
        <div> omar.huanca.balboa@gmail.com </div>
    </v-footer>
  </v-app>
</template>

<script>
import MenuForm from './components/MenuForm';

export default {
  name: 'App',
  components: {
    MenuForm,
  },
  computed: {
    getDate() {
      return new Date().getFullYear();
    },
  },
};
</script>
