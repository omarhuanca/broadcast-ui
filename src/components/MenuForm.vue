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
            <v-list-tile-title>Simple Forms</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list-tile v-for="(simple, i) in simples" :key="i">
          <router-link :to="simple.to">
            {{ simple.name }}
          </router-link>
        </v-list-tile>
    </v-list-group>
    <v-list-group>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Composition Forms</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list-tile v-for="(composition, i) in compositions" :key="i">
          <router-link :to="composition.to">
            {{ composition.name }}
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
      simples: [
        {
          name: 'Category',
          to: 'categorymanagement',
        },
        {
          name: 'Class Channel',
          to: 'classchannelmanagement',
        },
        {
          name: 'Subscriber',
          to: 'subscribermanagement',
        },
        {
          name: 'Class Message',
          to: 'classmessagemanagement',
        },
      ],
      compositions: [
        {
          name: 'Message',
          to: 'messagemanagement',
        },
      ],
    };
  },
};
</script>
