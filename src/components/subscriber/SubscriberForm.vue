<template>
  <div>
    <v-layout row wrap>
      <v-form>
        <v-container grid-list-md>
          <v-layout column wrap>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field type="text-input" name="firstName" background-color="primary-50"
                              v-model="model.firstName" box label="First Name *" placeholder="First Name"
                              :error-messages="model.errors.firstName">
                </v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field type="text-input" name="lastName" background-color="primary-50"
                              v-model="model.lastName" box label="Last Name *" placeholder="Last Name"
                              :error-messages="model.errors.lastName">
                </v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field type="text-input" name="email" background-color="primary-50"
                              v-model="model.email" box label="Email " placeholder="Email"
                              :error-messages="model.errors.email">
                </v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field type="text-input" name="cellphone" background-color="primary-50"
                              v-model="model.cellphone" box label="Cellphone " placeholder="Cellphone"
                              :error-messages="model.errors.cellphone">
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
  name: 'SubscriberForm',
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
      model: state => state.subscriberForm.model,
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
          response = this.axios.put(`v1/subscribers/update/${this.model.id}`, this.model).then(() => {
          });
        }
      }
      return response;
    },
    setSnackBar(message, color) {
      this.notifySnackBar(message, color);
    },
    isIncludeDuplicate(arrayValues, idValue, firstName, lastName) {
      let response = false;
      const firstNameLowercase = firstName.toLowerCase();
      const lastNameLowercase = lastName.toLowerCase();
      arrayValues.forEach((element) => {
        if (element.firstName.toLowerCase() === firstNameLowercase && element.lastName.toLowerCase() === lastNameLowercase) {
          response = true;
        }
      });
      return response;
    },
    verifyDuplicate() {
      let isValid = true;
      this.axios.get('v1/subscribers/all').then((response) => {
        const localItems = response.data;
        if (this.isIncludeDuplicate(localItems, this.model.id, this.model.firstName, this.model.lastName)) {
          isValid = false;
        }
      });
      return isValid;
    },
  },
};
</script>
