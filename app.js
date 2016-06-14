import {inject, NewInstance} from 'aurelia-dependency-injection';
import {ValidationController} from 'aurelia-validation';
import {required, email} from 'aurelia-validatejs';

@inject(NewInstance.of(ValidationController))
export class RegistrationForm {
  @required
  firstName = '';

  @required
  lastName = '';

  @required
  @email
  email = '';

  constructor(validationController) {
    this.validationController = validationController;
  }

  submit() {
    let errors = this.validationController.validate();
    // todo: call server...
  }
}
