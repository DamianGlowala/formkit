import {
  FormKitValidationMessages,
  createMessageName,
} from '@formkit/validation'

/**
 * Here we can import additional helper functions to assist in formatting our
 * language. Feel free to add additional helper methods to libs/formats if it
 * assists in creating good validation messages for your locale.
 */
import { sentence as s, list, date, order } from '../formatters'
import { FormKitLocaleMessages } from '../i18n'

/**
 * Standard language for interface features.
 * @public
 */
const ui: FormKitLocaleMessages = {
  /**
   * Shown on buttons for adding new items.
   */
  add: 'Добавить',
  /**
   * Shown when a button to remove items is visible.
   */
  remove: 'Удалить',
  /**
   * Shown when there are multiple items to remove at the same time.
   */
  removeAll: 'Убрать все',
  /**
   * Shown when all fields are not filled out correctly.
   */
  incomplete: 'Извините, не все поля заполнены верно.',
  /**
   * Shown in a button inside a form to submit the form.
   */
  submit: 'Отправить',
  /**
   * Shown when no files are selected.
   */
  noFiles: 'Файл не выбран',
  /**
   * Shown on buttons that move fields up in a list.
   */
  moveUp: 'Переместить вверх',
  /**
   * Shown on buttons that move fields down in a list.
   */
  moveDown: 'Переместить вниз',
  /**
   * Shown when something is actively loading.
   */
  isLoading: 'Загрузка...',
  /**
   * Shown when there is more to load.
   */
  loadMore: 'Загрузить больше',
  /**
   * Shown on buttons that navigate state forward
   */
  next: 'Следующий',
  /**
   * Shown on buttons that navigate state backward
   */
  prev: 'Предыдущий',
  /**
   * Shown when adding all values.
   */
  addAllValues: 'Добавить все значения',
  /**
   * Shown when adding selected values.
   */
  addSelectedValues: 'Добавить выбранные значения',
  /**
   * Shown when removing all values.
   */
  removeAllValues: 'Удалить все значения',
  /**
   * Shown when removing selected values.
   */
  removeSelectedValues: 'Удалить выбранные значения',
  /**
   * Shown when there is a date to choose.
   */
  chooseDate: 'Выберите дату',
  /**
   * Shown when there is a date to change.
   */
  changeDate: 'Изменить дату',
  /**
   * Shown when there is something to close
   */
  close: 'Закрыть',
}

/**
 * These are all the possible strings that pertain to validation messages.
 * @public
 */
const validation: FormKitValidationMessages = {
  /**
   * The value is not an accepted value.
   * @see {@link https://formkit.com/essentials/validation#accepted}
   */
  accepted({ name }): string {
    /* <i18n case="Shown when the user-provided value is not a valid 'accepted' value."> */
    return `Пожалуйста, примите ${name}.`
    /* </i18n> */
  },

  /**
   * The date is not after
   * @see {@link https://formkit.com/essentials/validation#date-after}
   */
  date_after({ name, args }) {
    if (Array.isArray(args) && args.length) {
      /* <i18n case="Shown when the user-provided date is not after the date supplied to the rule."> */
      return `Дата ${s(name)} должна быть позже ${date(args[0])}.`
      /* </i18n> */
    }
    /* <i18n case="Shown when the user-provided date is not after today's date, since no date was supplied to the rule."> */
    return `Дата ${s(name)} должна быть в будущем.`
    /* </i18n> */
  },

  /**
   * The value is not a letter.
   * @see {@link https://formkit.com/essentials/validation#alpha}
   */
  alpha({ name }) {
    /* <i18n case="Shown when the user-provided value contains non-alphabetical characters."> */
    return `Поле ${s(name)} может содержать только буквы.`
    /* </i18n> */
  },

  /**
   * The value is not alphanumeric
   * @see {@link https://formkit.com/essentials/validation#alphanumeric}
   */
  alphanumeric({ name }) {
    /* <i18n case="Shown when the user-provided value contains non-alphanumeric characters."> */
    return `Поле ${s(name)} может содержать только буквы и цифры.`
    /* </i18n> */
  },

  /**
   * The value is not letter and/or spaces
   * @see {@link https://formkit.com/essentials/validation#alpha-spaces}
   */
  alpha_spaces({ name }) {
    /* <i18n case="Shown when the user-provided value contains non-alphabetical and non-space characters."> */
    return `${s(name)} могут содержать только буквы и пробелы.`
    /* </i18n> */
  },

  /**
   * The value have no letter.
   * @see {@link https://formkit.com/essentials/validation#contains_alpha}
   */
  contains_alpha({ name }) {
    /* <i18n case="Shown when the user-provided value contains only non-alphabetical characters."> */
    return `${s(name)} должен содержать алфавитные символы.`
    /* </i18n> */
  },

  /**
   * The value have no alphanumeric
   * @see {@link https://formkit.com/essentials/validation#contains_alphanumeric}
   */
  contains_alphanumeric({ name }) {
    /* <i18n case="Shown when the user-provided value contains only non-alphanumeric characters."> */
    return `${s(name)} должен содержать буквы или цифры.`
    /* </i18n> */
  },

  /**
   * The value have no letter and/or spaces
   * @see {@link https://formkit.com/essentials/validation#contains_alpha-spaces}
   */
  contains_alpha_spaces({ name }) {
    /* <i18n case="Shown when the user-provided value contains only non-alphabetical and non-space characters."> */
    return `${s(name)} должно содержать буквы или пробелы.`
    /* </i18n> */
  },

  /**
   * The value have no symbol
   * @see {@link https://formkit.com/essentials/validation#contains_symbol}
   */
  contains_symbol({ name }) {
    /* <i18n case="Shown when the user-provided value contains only alphanumeric and space characters."> */
    return `${s(name)} должен содержать символ.`
    /* </i18n> */
  },

  /**
   * The value have no uppercase
   * @see {@link https://formkit.com/essentials/validation#contains_uppercase}
   */
  contains_uppercase({ name }) {
    /* <i18n case="Shown when the user-provided value contains only non-alphabetical-uppercase characters."> */
    return `${s(name)} должно содержать прописные буквы.`
    /* </i18n> */
  },

  /**
   * The value have no lowercase
   * @see {@link https://formkit.com/essentials/validation#contains_lowercase}
   */
  contains_lowercase({ name }) {
    /* <i18n case="Shown when the user-provided value contains only non-alphabetical-lowercase characters."> */
    return `${s(name)} должно содержать строчные буквы.`
    /* </i18n> */
  },

  /**
   *  The value have no numeric
   * @see {@link https://formkit.com/essentials/validation#contains_numeric}
   */
  contains_numeric({ name }) {
    /* <i18n case="Shown when the user-provided value have no numeric."> */
    return `${s(name)} должен содержать числа.`
    /* </i18n> */
  },

  /**
   * The value is not symbol
   * @see {@link https://formkit.com/essentials/validation#symbol}
   */
  symbol({ name }) {
    /* <i18n case="Shown when the user-provided value contains alphanumeric and space characters."> */
    return `${s(name)} должен быть символом.`
    /* </i18n> */
  },

  /**
   * The value is not uppercase
   * @see {@link https://formkit.com/essentials/validation#uppercase}
   */
  uppercase({ name }) {
    /* <i18n case="Shown when the user-provided value contains non-alphabetical-uppercase characters."> */
    return `${s(name)} может содержать только прописные буквы.`
    /* </i18n> */
  },

  /**
   * The value is not lowercase
   * @see {@link https://formkit.com/essentials/validation#lowercase}
   */
  lowercase({ name }) {
    /* <i18n case="Shown when the user-provided value contains non-alphabetical-lowercase characters."> */
    return `${s(name)} может содержать только буквы нижнего регистра.`
    /* </i18n> */
  },

  /**
   * The date is not before
   * @see {@link https://formkit.com/essentials/validation#date-before}
   */
  date_before({ name, args }) {
    if (Array.isArray(args) && args.length) {
      /* <i18n case="Shown when the user-provided date is not before the date supplied to the rule."> */
      return `Дата ${s(name)} должна быть раньше ${date(args[0])}.`
      /* </i18n> */
    }
    /* <i18n case="Shown when the user-provided date is not before today's date, since no date was supplied to the rule."> */
    return `Дата ${s(name)} должна быть в прошлом.`
    /* </i18n> */
  },

  /**
   * The value is not between two numbers
   * @see {@link https://formkit.com/essentials/validation#between}
   */
  between({ name, args }) {
    if (isNaN(args[0]) || isNaN(args[1])) {
      /* <i18n case="Shown when any of the arguments supplied to the rule were not a number."> */
      return `Это поле заполнено неверно и не может быть отправлено.`
      /* </i18n> */
    }
    const [a, b] = order(args[0], args[1])
    /* <i18n case="Shown when the user-provided value is not between two numbers."> */
    return `Поле ${s(name)} должно быть между ${a} и ${b}.`
    /* </i18n> */
  },

  /**
   * The confirmation field does not match
   * @see {@link https://formkit.com/essentials/validation#confirm}
   */
  confirm({ name }) {
    /* <i18n case="Shown when the user-provided value does not equal the value of the matched input."> */
    return `Поле ${s(name)} не совпадает.`
    /* </i18n> */
  },

  /**
   * The value is not a valid date
   * @see {@link https://formkit.com/essentials/validation#date-format}
   */
  date_format({ name, args }) {
    if (Array.isArray(args) && args.length) {
      /* <i18n case="Shown when the user-provided date does not satisfy the date format supplied to the rule."> */
      return `Поле ${s(
        name
      )} имеет неверную дату. Пожалуйста, используйте формат ${args[0]}`
      /* </i18n> */
    }
    /* <i18n case="Shown when no date argument was supplied to the rule."> */
    return 'Это поле заполнено неверно и не может быть отправлено.'
    /* </i18n> */
  },

  /**
   * Is not within expected date range
   * @see {@link https://formkit.com/essentials/validation#date-between}
   */
  date_between({ name, args }) {
    /* <i18n case="Shown when the user-provided date is not between the start and end dates supplied to the rule. "> */
    return `Дата ${s(name)} должна быть между ${date(args[0])} и ${date(
      args[1]
    )}`
    /* </i18n> */
  },

  /**
   * Shown when the user-provided value is not a valid email address.
   * @see {@link https://formkit.com/essentials/validation#email}
   */
  email: 'Пожалуйста, введите действительный электронный адрес.',

  /**
   * Does not end with the specified value
   * @see {@link https://formkit.com/essentials/validation#ends-with}
   */
  ends_with({ name, args }) {
    /* <i18n case="Shown when the user-provided value does not end with the substring supplied to the rule."> */
    return `Поле ${s(name)} не должно заканчиваться на ${list(args)}.`
    /* </i18n> */
  },

  /**
   * Is not an allowed value
   * @see {@link https://formkit.com/essentials/validation#is}
   */
  is({ name }) {
    /* <i18n case="Shown when the user-provided value is not one of the values supplied to the rule."> */
    return `Поле ${s(name)} имеет неподустимое значение.`
    /* </i18n> */
  },

  /**
   * Does not match specified length
   * @see {@link https://formkit.com/essentials/validation#length}
   */
  length({ name, args: [first = 0, second = Infinity] }) {
    const min = Number(first) <= Number(second) ? first : second
    const max = Number(second) >= Number(first) ? second : first
    if (min == 1 && max === Infinity) {
      /* <i18n case="Shown when the length of the user-provided value is not at least one character."> */
      return `Поле ${s(name)} должно содержать минимум один символ.`
      /* </i18n> */
    }
    if (min == 0 && max) {
      /* <i18n case="Shown when first argument supplied to the rule is 0, and the user-provided value is longer than the max (the 2nd argument) supplied to the rule."> */
      return `Длина поля ${s(
        name
      )} должна быть меньше или равна ${max} символам.`
      /* </i18n> */
    }
    if (min === max) {
      /* <i18n case="Shown when first and second argument supplied to the rule are the same, and the user-provided value is not any of the arguments supplied to the rule."> */
      return `Длина ${s(name)} должна составлять ${max} символов.`
      /* </i18n> */
    }
    if (min && max === Infinity) {
      /* <i18n case="Shown when the length of the user-provided value is less than the minimum supplied to the rule and there is no maximum supplied to the rule."> */
      return `Длина поля ${s(
        name
      )} должна быть больше или равна ${min} символам.`
      /* </i18n> */
    }
    /* <i18n case="Shown when the length of the user-provided value is between the two lengths supplied to the rule."> */
    return `Длина поля ${s(name)} должна быть между ${min} и ${max} символами.`
    /* </i18n> */
  },

  /**
   * Value is not a match
   * @see {@link https://formkit.com/essentials/validation#matches}
   */
  matches({ name }) {
    /* <i18n case="Shown when the user-provided value does not match any of the values or RegExp patterns supplied to the rule. "> */
    return `Поле ${s(name)} имеет недопустимое значение.`
    /* </i18n> */
  },

  /**
   * Exceeds maximum allowed value
   * @see {@link https://formkit.com/essentials/validation#max}
   */
  max({ name, node: { value }, args }) {
    if (Array.isArray(value)) {
      /* <i18n case="Shown when the length of the array of user-provided values is longer than the max supplied to the rule."> */
      return `Не может быть выбрано больше, чем ${args[0]} ${name}.`
      /* </i18n> */
    }
    /* <i18n case="Shown when the user-provided value is greater than the maximum number supplied to the rule."> */
    return `Поле ${s(name)} должно быть меньше или равно ${args[0]}.`
    /* </i18n> */
  },

  /**
   * The (field-level) value does not match specified mime type
   * @see {@link https://formkit.com/essentials/validation#mime}
   */
  mime({ name, args }) {
    if (!args[0]) {
      /* <i18n case="Shown when no file formats were supplied to the rule."> */
      return 'Не указаны поддержиавемые форматы файла.'
      /* </i18n> */
    }
    /* <i18n case="Shown when the mime type of user-provided file does not match any mime types supplied to the rule."> */
    return `Формат файла в поле ${s(name)} должен быть: ${args[0]}.`
    /* </i18n> */
  },

  /**
   * Does not fulfill minimum allowed value
   * @see {@link https://formkit.com/essentials/validation#min}
   */
  min({ name, node: { value }, args }) {
    if (Array.isArray(value)) {
      /* <i18n case="Shown when the length of the array of user-provided values is shorter than the min supplied to the rule."> */
      return `Не может быть выбрано меньше, чем ${args[0]} ${name}.`
      /* </i18n> */
    }
    /* <i18n case="Shown when the user-provided value is less than the minimum number supplied to the rule."> */
    return `Поле ${s(name)} должно быть не менее, чем ${args[0]}.`
    /* </i18n> */
  },

  /**
   * Is not an allowed value
   * @see {@link https://formkit.com/essentials/validation#not}
   */
  not({ name, node: { value } }) {
    /* <i18n case="Shown when the user-provided value matches one of the values supplied to (and thus disallowed by) the rule."> */
    return `“${value}” не поддерживается в поле ${name}.`
    /* </i18n> */
  },

  /**
   *  Is not a number
   * @see {@link https://formkit.com/essentials/validation#number}
   */
  number({ name }) {
    /* <i18n case="Shown when the user-provided value is not a number."> */
    return `Поле ${s(name)} должно быть числом.`
    /* </i18n> */
  },

  /**
   * Require one field.
   * @see {@link https://formkit.com/essentials/validation#require-one}
   */
  require_one: ({ name, node, args: inputNames }) => {
    const labels = inputNames
      .map((name) => {
        const dependentNode = node.at(name)
        if (dependentNode) {
          return createMessageName(dependentNode)
        }
        return false
      })
      .filter((name) => !!name)
    labels.unshift(name)
    /* <i18n case="Shown when the user-provided has not provided a value for at least one of the required fields."> */
    return `${labels.join(' или ')} требуется.`
    /* </i18n> */
  },

  /**
   * Required field.
   * @see {@link https://formkit.com/essentials/validation#required}
   */
  required({ name }) {
    /* <i18n case="Shown when a user does not provide a value to a required input."> */
    return `Поле ${s(name)} обязательно для заполнения.`
    /* </i18n> */
  },

  /**
   * Does not start with specified value
   * @see {@link https://formkit.com/essentials/validation#starts-with}
   */
  starts_with({ name, args }) {
    /* <i18n case="Shown when the user-provided value does not start with the substring supplied to the rule."> */
    return `Поле ${s(name)} должно начинаться с ${list(args)}.`
    /* </i18n> */
  },

  /**
   * Is not a url
   * @see {@link https://formkit.com/essentials/validation#url}
   */
  url() {
    /* <i18n case="Shown when the user-provided value is not a valid url."> */
    return `Пожалуйста, введите действительный URL-адрес.`
    /* </i18n> */
  },
  /**
   * Shown when the date is invalid.
   */
  invalidDate: 'Выбранная дата недействительна.',
}

export const ru = { ui, validation }
