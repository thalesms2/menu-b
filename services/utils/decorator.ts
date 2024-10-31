import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsToday(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isToday',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return new Date(value) > new Date(Date.now());
        },
      },
    });
  };
}
