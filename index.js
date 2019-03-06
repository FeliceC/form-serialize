HTMLFormElement.prototype.serialize = function() {
  const s = [];
  let field, l;
  if (typeof this === 'object' && this.nodeName === 'FORM') {
    for (var i = 0; i < this.length; i++) {
      const formElement = this[i];
      if (
        formElement.name &&
        !formElement.disabled &&
        formElement.type !== 'button' &&
        formElement.type !== 'file' &&
        formElement.type !== 'reset' &&
        formElement.type !== 'submit'
      ) {
        if (formElement.type === 'select-multiple') {
          l = formElement.options.length;
          formElement.options.forEach(opt => {
            if (opt.selected) s[s.length] = `${encodeURIComponent(formElement.name)}=${encodeURIComponent(opt.value)}`;
          });
        } else if ((formElement.type !== 'checkbox' && formElement.type !== 'radio') || formElement.checked) {
          s[s.length] = `${encodeURIComponent(formElement.name)}=${encodeURIComponent(formElement.value)}`;
        }
      }
    }
  }
  return s.join('&').replace(/%20/g, '+');
};
