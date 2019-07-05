<template>
  <div>
    <v-layout row wrap>
      <v-form>
        <v-container grid-list-md>
          <v-layout column wrap>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field type="text-input" name="title" background-color="primary-50"
                              v-model="model.title" box label="Title *" placeholder="Title"
                              :error-messages="model.errors.title">
                </v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-textarea name="input-7-1" v-model="model.body" box label="Body *" auto-grow
                            placeholder="Body" :error-messages="model.errors.body">
                </v-textarea>
              </v-flex>
              <v-flex xs12>
                <v-select background-color="primary-50" v-model="model.classMessage" placeholder="Select class message"
                          box label="Class Message *" :items="classMessage" item-text="nameClassMessage" item-value="id" return-object
                          :error-messages="model.errors.classMessage">
                </v-select>
              </v-flex>
            </v-layout>
          </v-layout>
        </v-container>
      </v-form>
    </v-layout>
  </div>
</template>

<script>

export default {
  name: 'MessageForm',
  props: {
    classMessage: {
      type: Array,
      required: true,
    },
    model: {
      type: Object,
      required: true,
    },
  },
  methods: {
    validateData() {
      let response = false;
      console.log('validateData validate', JSON.stringify(this.model.validate()));
      if (this.model.validate()) {
        return this.model.save().then(() => {
          response = true;
        });
      }
      return response;
    },
    setSnackBar(message, color) {
      this.notifySnackBar(message, color);
    },
  },
};
</script>
