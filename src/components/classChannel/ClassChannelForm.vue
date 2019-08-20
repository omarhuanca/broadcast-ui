<template>
  <div>
    <v-layout row wrap>
      <v-form>
        <v-container grid-list-md>
          <v-layout column wrap>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field type="text-input" name="title" background-color="primary-50"
                              v-model="model.nameClassChannel" box label="Name Class Channel *" placeholder="Name Class Channel"
                              :error-messages="model.errors.nameClassChannel">
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-layout>
        </v-container>
      </v-form>
    </v-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import localAxios from 'axios';

export default {
  name: 'ClassChannelForm',
  inject: {
    Axios: { default: null },
  },
  data() {
    return {
      axios: this.Axios || localAxios,
    };
  },
  computed: {
    ...mapState({
      model: state => state.classChannelForm.model,
    }),
  },
  methods: {
    validateData() {
      let response = false;
      if (this.model.validate() && this.verifyDuplicate()) {
        if (this.model.id === null) {
          response = this.model.save().then(() => {
          });
        } else {
          response = this.axios.put(`v1/classChannels/update/${this.model.id}`, this.model).then(() => {
          });
        }
      }
      return response;
    },
    setSnackBar(message, color) {
      this.notifySnackBar(message, color);
    },
    isIncludeDuplicate(arrayValues, idValue, nameValue) {
      let response = false;
      const nameValueTUC = nameValue.toLowerCase();
      arrayValues.forEach((element) => {
        if (element.nameClassChannel.toLowerCase() === nameValueTUC) {
          response = true;
        }
      });
      return response;
    },
    verifyDuplicate() {
      let isValid = true;
      this.axios.get('v1/classChannels/all').then((response) => {
        const localItems = response.data;
        if (this.isIncludeDuplicate(localItems, this.model.id, this.model.nameClassChannel)) {
          isValid = false;
        }
      });
      return isValid;
    },
  },
};
</script>
