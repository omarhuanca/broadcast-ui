<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Manage Message</v-toolbar-title>
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
                <message-form ref="messageForm" :classMessage="classMessage">
                </message-form>
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
        <td class="text-xs-left">{{ props.item.title }}</td>
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
import MessageForm from '@/components/message/MessageForm';
import MessageModel from '@/models/MessageModel';

export default {
  name: 'MessageManagement',
  components: {
    MessageForm,
  },
  inject: {
    Axios: { default: null },
  },
  data() {
    return {
      axios: this.Axios || localAxios,
      classMessage: [],
      dialog: false,
      headers: [
        {
          text: 'Title',
          align: 'left',
          sortable: false,
          value: 'title',
        },
        {
          text: 'Actions',
          align: 'center',
          sortable: false,
          value: 'name',
        },
      ],
      items: [],
      editedIndex: -1,
    };
  },
  computed: {
    updateItem: function changeDessets() {
      this.getMessage();
      return this.items;
    },
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },
  },
  methods: {
    initialData() {
      this.$store.dispatch('messageFormChangeModel', new MessageModel({ id: null, active: 1 }));
    },
    getClassMessage() {
      return this.axios.get('v1/classMessages/all').then((classMessage) => {
        this.classMessage = classMessage.data;
      });
    },
    getMessage() {
      return this.axios.get('v1/messages/all').then((Message) => {
        this.items = Message.data;
      });
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedIndex = -1;
      }, 300);
    },
    sendRequest() {
      this.$refs.messageForm.validateData();
      this.close();
    },
    editItem(item) {
      const message = new MessageModel({
        id: item.id,
        title: item.title,
        body: item.body,
        active: item.active,
        classMessage: item.classMessage,
      });
      this.$store.dispatch('messageFormChangeModel', message);
      this.editedIndex = this.items.indexOf(item);
      this.dialog = true;
    },
    archiveItem(item) {
      const message = new MessageModel({
        id: item.id,
        title: item.title,
        body: item.body,
        active: 0,
        classMessage: item.classMessage,
      });
      this.$store.dispatch('messageFormChangeModel', message);
      this.editedIndex = this.items.indexOf(item);
      this.$refs.messageForm.validateData();
    },
    unarchiveItem(item) {
      const message = new MessageModel({
        id: item.id,
        title: item.title,
        body: item.body,
        active: 1,
        classMessage: item.classMessage,
      });
      this.$store.dispatch('messageFormChangeModel', message);
      this.editedIndex = this.items.indexOf(item);
      this.$refs.messageForm.validateData();
    },
    newItem() {
      this.editedIndex = -1;
      this.$store.dispatch('messageFormChangeModel', new MessageModel({ id: null, active: 1 }));
    },
  },
  async beforeMount() {
    this.getClassMessage();
    this.getMessage();
    await this.initialData();
  },
};
</script>
