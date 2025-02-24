/* eslint-disable */
import { Model } from 'vue-mc';
import { required, string, length } from 'vue-mc/validation';

export default class MessageModel extends Model {
  dataLongValidationMessage = 'The title is too long';
  requiredValidationMessage = 'This field is mandatory';

  defaults() {
    return {
      title: '',
      body: '',
      active: 0,
      classMessage: null,
    };
  }
  mutations() {
    return {
      id: id => Number(id) || null,
      title: String,
      body: String,
    };
  }
  validation() {
    return {
      title: required.format(this.requiredValidationMessage).and(string).and(length(0, 80).format(this.dataLongValidationMessage)),
      body: required.format(this.requiredValidationMessage).and(string).and(length(0, 160).format(this.dataLongValidationMessage)),
      active: required.format(this.requiredValidationMessage),
      classMessage: required.format(this.requiredValidationMessage),
    }
  }
  options() {
    return {
      identifier: 'id',
      patch: true,
    };
  }
  routes() {
    return {
      save: 'v1/messages/save',
      patch: 'v1/messages/update/{id}'
    };
  }
}
