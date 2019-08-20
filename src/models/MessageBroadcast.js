/* eslint-disable */
import { Model } from 'vue-mc';
import { required, string, length } from 'vue-mc/validation';

export default class MessageBroadCastModel extends Model {
  dataLongValidationMessage = 'The title is too long';
  requiredValidationMessage = 'This field is mandatory';

  defaults() {
    return {
      nameCategory: '',
      status: '',
    };
  }
  mutations() {
    return {
      id: id => Number(id) || null,
      nameCategory: String,
    };
  }
  validation() {
    return {
      nameCategory: required.format(this.requiredValidationMessage).and(string).and(length(0, 80).format(this.dataLongValidationMessage)),
      status: required.format(this.requiredValidationMessage),
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
      save: 'v1/categories/save',
      patch: 'v1/categories/update/{id}'
    };
  }
}