import { defineRule, configure } from 'vee-validate';
import {
  required,
  numeric,
} from '@vee-validate/rules';


export default defineNuxtPlugin(() => {

  defineRule('required', required);

  defineRule('numeric', numeric);


  configure({
    generateMessage: (ctx) => {
      const messages: Record<string, string> = {
        required: 'Required field',
        numeric: 'Only digits',
      }
      const ruleName = ctx.rule?.name as keyof typeof messages | undefined;

      if (ruleName && ruleName in messages) {
        return messages[ruleName];
      }

      return `${ctx.field} is not valid.`;
    },
  })
});
