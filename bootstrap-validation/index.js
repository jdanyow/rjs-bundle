import {BootstrapFormValidationRenderer} from './bootstrap-form-validation-renderer';
debugger;
export function configure(config) {
  config.container.registerHandler(
    'bootstrap-form',
    container => container.get(BootstrapFormValidationRenderer));
}
