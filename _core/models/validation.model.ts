export interface IValidationRules {
  isRequired?: boolean;
  minLength?: number;
  maxLength?: number;
}

export interface ICustomRule {
  rule: boolean;
  message: string;
}
