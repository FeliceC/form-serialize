export default class SerializeForm {
  static get BLACK_LIST() {
    return {
      elements: ['button', 'file', 'reset', 'submit']
    };
  }

  /**
   * Creates an instance of SerializeForm.
   *
   * @constructor
   * @this {SerializeForm}
   * @param {HTMLFormElement} form The form element to seriaize
   */
  constructor(form) {
    this.form = SerializeForm.serialize(form);
  }

  /**
   * Get the form serialization data by format
   *
   * @param {String} dataType - The data type to return ('array', 'object' or null to default string)
   * @returns {(String|Array|Object)}
   */
  getData(dataType) {
    switch (dataType) {
      case 'array':
        return SerializeForm.getFormDataArray(this.form);
      case 'object':
        return SerializeForm.getFormDataObject(this.form);
      default:
        return this.form.join('&').replace(/%20/g, '+');
    }
  }

  /**
 *
 * @param {HTMLFormElement} form
 * @return {Array<Object>}
 */
  static getFormDataArray(form) {
    return [
      ...form.map(data => {
        const tempData = data.split('=');
        return {
          name: tempData[0],
          value: tempData[1]
        };
      })
    ];
  }

  /**
 *
 * @param {HTMLFormElement} form
 */
  static getFormDataObject(form) {
    const formData = {};
    form.forEach(data => {
      const tempData = data.split('=');
      if (formData[tempData[0]]) {
        const newArrayString = `${typeof formData[tempData[0]] === 'object' ? formData[tempData[0]].join('&') : formData[tempData[0]]}&${tempData[1]}`;
        formData[tempData[0]] = newArrayString.split('&');
      } else {
        formData[tempData[0]] = tempData[1];
      }
    });
    return formData;
  }

  /**
 *
 * @param {HTMLFormElement} form
 * @return {boolean}
 */
  static isValidForm(form) {
    return typeof form === 'object' && form.nodeName === 'FORM';
  }

  /**
 *
 * @param {HTMLElement} el
 * @return {boolean}
 */
  static isvalidElement(el) {
    return el.name && !el.disabled && !SerializeForm.BLACK_LIST.elements.includes(el.type);
  }

  /**
 *
 * @param {HTMLFormElement} form
 * @return {Array<Object>}
 */
  static serialize(form) {
    const data = [];
    if (SerializeForm.isValidForm(form)) {
      [...form.elements].forEach(el => {
        if (SerializeForm.isvalidElement(el)) {
          if ((el.type !== 'checkbox' && el.type !== 'radio' && el.type !== 'select-multiple') || el.checked) {
            data.push(`${el.name}=${el.value}`);
          } else if (el.type === 'select-multiple') {
            const elementOptions = Array.from(el.options);
            elementOptions.forEach(opt => {
              if (opt.selected) data.push(`${el.name}=${opt.value}`);
            });
          }
        }
      });
    }
    return data;
  }
}
