import {inject, NewInstance} from 'aurelia-dependency-injection';
import {ValidationController, ValidationRules} from 'aurelia-validation';

@inject(NewInstance.of(ValidationController))
export class RegistrationForm {
  firstName = '';

  lastName = '';

  email = '';

  constructor(validationController) {
    this.validationController = validationController;
  }

  submit() {
    let errors = this.validationController.validate();
    // todo: call server...
  }
}

ValidationRules
  .ensure(x => x.firstName).required()
  .ensure(x => x.lastName).required()
  .ensure(x => x.email).required().email()
  .on(RegistrationForm);
