<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Manage Message</v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="1000px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline"> </span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <message-form :classMessage="classMessage" :model="model" ref="messageForm">
                </message-form>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      </v-toolbar>
      <v-data-table :headers="headers" :items="desserts" class="elevation-1">
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.title }}</td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editItem(props.item)">
            edit
          </v-icon>
          <v-icon small>
            archive
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
      model: null,
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
      desserts: [],
      editedIndex: -1,
      editedItem: {},
    };
  },
  methods: {
    initialData() {
      this.model = new MessageModel();
    },
    getClassMessage() {
      return this.axios.get('v1/classMessages/all').then((classMessage) => {
        this.classMessage = classMessage.data;
      });
    },
    getMessage() {
      return this.axios.get('v1/messages/all').then((Message) => {
        this.desserts = Message.data;
      });
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedIndex = -1;
      }, 300);
    },
    save() {
      let response = false;
      if (this.model.validate()) {
        return this.model.save().then(() => {
          response = true;
        });
      }
      this.close();
      return response;
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
  },
  async beforeMount() {
    this.getClassMessage();
    this.getMessage();
    await this.initialData();
  },
};
</script>
