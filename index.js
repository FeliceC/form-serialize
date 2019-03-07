export default class SerializeForm {
  static get BLACK_LIST() {
    return {
      elements: ['button', 'file', 'reset', 'submit']
    };
  }

  constructor(form) {
    this.form = SerializeForm.serialize(form);
  }

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

  static getFormDataArray(form) {
    return [...form.map(data => {
      const tempData = data.split('=');
      return {
        name: tempData[0],
        value: tempData[1]
      };
    })];
  }

  static getFormDataObject(form) {
    const formData = {};
    form.forEach(data => {
      const tempData = data.split('=');
      formData[tempData[0]] = tempData[1];
    });

    return formData;
  }

  static isValidForm(form) {
    return typeof form === 'object' && form.nodeName === 'FORM';
  }

  static isvalidElement(el) {
    return el.name && !el.disabled && !SerializeForm.BLACK_LIST.elements.includes(el.type);
  }

  static serialize(form) {
    const data = [];
    if (SerializeForm.isValidForm(form)) {
      [...form.elements].forEach(el => {
        if (SerializeForm.isvalidElement(el)) {
          if ((el.type !== 'checkbox' && el.type !== 'radio') || el.checked) {
            data.push(`${el.name}=${el.value}`);
          } else if (el.type === 'select-multiple') {
            el.options.forEach(opt => {
              if (opt.selected) data.push(`${el.name}=${opt.value}`);
            });
          }
        }
      });
    }
    return data;
  }
}