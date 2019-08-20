/* eslint-disable */
import { Model } from 'vue-mc';
import { required, string, length, match, equal } from 'vue-mc/validation';

export default class SubscriberModel extends Model {
  dataLongValidationMessage = 'The field is too long';
  requiredValidationMessage = 'This field is mandatory';
  positiveValidationMessage = 'The correct format is a positive value';
  cellphoneValidationMessage = 'The correct format is ########### (11 digits)';
  cellphoneRegex = /^\+[5]{1}[9]{1}[1]{1}[0-9]*$|(?:)/;
  emailRegex = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$|(?:)/;

  defaults() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      cellphone: '',
      active: 0,
    };
  }
  mutations() {
    return {
      id: id => Number(id) || null,
      firstName: String,
      lastName: String,
      email: String,
      cellphone: String,
    };
  }
  validation() {
    return {
      firstName: required.format(this.requiredValidationMessage).and(string).and(length(0, 80).format(this.dataLongValidationMessage)),
      lastName: required.format(this.requiredValidationMessage).and(string).and(length(0, 80).format(this.dataLongValidationMessage)),
      //email: match(this.emailRegex).format(this.positiveValidationMessage).and(length(0, 100).format(this.dataLongValidationMessage)),
      //cellphone: match(this.cellphoneRegex).format(this.positiveValidationMessage).and(length(0, 59199999999).format(this.cellphoneValidationMessage)),
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
      save: 'v1/subscribers/save',
      patch: 'v1/subscribers/update/{id}'
    };
  }
}