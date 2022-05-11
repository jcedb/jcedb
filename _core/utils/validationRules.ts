import { IValidationRules } from '../models/validation.model';

export const validate = (value: string, rules: IValidationRules) => {
  if (rules.isRequired && value.length === 0) {
    return ['required', `This input field is required.`];
  }

  if (value.length < (rules.minLength ?? 5) && value.length > 0) {
    return [
      'minLength',
      `Text length must be atleast ${(rules.minLength ?? 5) + 1} characters.`
    ];
  }

  if (value.length > (rules.maxLength ?? 30)) {
    return [
      'maxLength',
      `Text length must not exceed ${rules.maxLength ?? 30} characters.`
    ];
  }

  return [];
};
