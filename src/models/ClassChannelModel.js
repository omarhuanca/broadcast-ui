/* eslint-disable */
import { Model } from 'vue-mc';
import { required, string, length } from 'vue-mc/validation';

export default class ClassChannelModel extends Model {
  dataLongValidationMessage = 'The title is too long';
  requiredValidationMessage = 'This field is mandatory';

  defaults() {
    return {
      nameClassChannel: '',
      active: 0,
    };
  }
  mutations() {
    return {
      id: id => Number(id) || null,
      nameClassChannel: String,
    };
  }
  validation() {
    return {
      nameClassChannel: required.format(this.requiredValidationMessage).and(string).and(length(0, 80).format(this.dataLongValidationMessage)),
      active: required.format(this.requiredValidationMessage),
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
      save: 'v1/classChannels/save',
      patch: 'v1/classChannels/update/{id}'
    };
  }
}