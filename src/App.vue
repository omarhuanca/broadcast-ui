<template>
  <v-app>
    <menu-form>
    </menu-form>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import MenuForm from './components/MenuForm';

export default {
  name: 'App',
  components: {
    MenuForm,
  },
};
</script>
