<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Manage Class Channel</v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="1000px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" @click="newItem()" v-on="on">New Item</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }} </span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <class-channel-form ref="classChannelForm">
                </class-channel-form>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="sendRequest">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      </v-toolbar>
      <v-data-table :headers="headers" :items="updateItem" class="elevation-1">
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.nameClassChannel }}</td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editItem(props.item)">
            edit
          </v-icon>
          <v-icon v-if="props.item.active === 1" small @click="archiveItem(props.item)">
            delete
          </v-icon>
          <v-icon v-if="props.item.active === 0" small @click="unarchiveItem(props.item)">
            unarchive
          </v-icon>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import localAxios from 'axios';
import ClassChannelForm from '@/components/classChannel/ClassChannelForm';
import ClassChannelModel from '@/models/ClassChannelModel';

export default {
  name: 'ClassChannelManagement',
  components: {
    ClassChannelForm,
  },
  inject: {
    Axios: { default: null },
  },
  data() {
    return {
      axios: this.Axios || localAxios,
      dialog: false,
      headers: [
        {
          text: 'Name Class Channel',
          align: 'left',
          sortable: true,
          value: 'nameClassChannel',
        },
      ],
      items: [],
      editedIndex: -1,
    };
  },
  computed: {
    updateItem: function changeDessets() {
      this.getClassChannel();
      return this.items;
    },
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },
  },
  methods: {
    initialData() {
      this.$store.dispatch('classChannelFormChangeModel', new ClassChannelModel({ id: null, active: 1 }));
    },
    getClassChannel() {
      return this.axios.get('v1/classChannels/all').then((ClassChannel) => {
        this.items = ClassChannel.data;
      });
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedIndex = -1;
      }, 300);
    },
    sendRequest() {
      this.$refs.classChannelForm.validateData();
      this.close();
    },
    editItem(item) {
      const classChannel = new ClassChannelModel({
        id: item.id,
        nameClassChannel: item.nameClassChannel,
        active: item.active,
      });
      this.$store.dispatch('classChannelFormChangeModel', classChannel);
      this.editedIndex = this.items.indexOf(item);
      this.dialog = true;
    },
    archiveItem(item) {
      const classChannel = new ClassChannelModel({
        id: item.id,
        nameClassChannel: item.nameClassChannel,
        active: 0,
      });
      this.$store.dispatch('classChannelFormChangeModel', classChannel);
      this.editedIndex = this.items.indexOf(item);
      this.$refs.classChannelForm.validateData();
    },
    unarchiveItem(item) {
      const classChannel = new ClassChannelModel({
        id: item.id,
        nameClassChannel: item.nameClassChannel,
        active: 1,
      });
      this.$store.dispatch('classChannelFormChangeModel', classChannel);
      this.editedIndex = this.items.indexOf(item);
      this.$refs.classChannelForm.validateData();
    },
    newItem() {
      this.editedIndex = -1;
      this.$store.dispatch('categoryFormChangeModel', new ClassChannelModel({ id: null, active: 1 }));
    },
  },
  async beforeMount() {
    this.getClassChannel();
    await this.initialData();
  },
};
</script>
