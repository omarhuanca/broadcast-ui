<template>
  <v-dialog v-model="visible" persistent class="modal-dialog" max-width="290">
    <v-card>
      <v-card-title class="headline">
        <slot name="title">Header title.</slot>
      </v-card-title>
      <v-card-text>
        <slot name="content">Your message.</slot>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat @click="confirmOrCancel(false)">
          {{ buttonsLabel.cancelButton }}
        </v-btn>
        <v-btn color="green darken-1" flat @click="confirmOrCancel(true)">
          {{ buttonsLabel.confirmButton }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'ModalDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    actionName: {
      type: String,
      required: true,
    },
    buttonsLabel: {
      type: Object,
      default: () => ({
        cancelButton: 'CANCEL',
        confirmButton: 'CONFIRM',
      }),
    },
  },
  methods: {
    confirmOrCancel(value) {
      this.$emit('confirmOrCancelEvent', {
        result: value,
        method: this.actionName,
      });
    },
  },
};
</script>
