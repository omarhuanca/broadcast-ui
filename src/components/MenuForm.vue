<template>
  <v-navigation-drawer stateless value="true">
  <v-list>
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>home</v-icon>
      </v-list-tile-action>
      <v-list-tile-title>Menu</v-list-tile-title>
    </v-list-tile>
    <v-list-group>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Admin</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list-tile v-for="(item, i) in items" :key="i">
          <router-link :to="item.to">
            {{ item.name }}
          </router-link>
        </v-list-tile>
    </v-list-group>
  </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'MenuForm',
  data() {
    return {
      items: [
        {
          name: 'Message',
          to: 'messagemanagement',
        },
      ],
    };
  },
};
</script>
