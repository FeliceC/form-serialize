import SerializeForm from '../index';

const container = document.createElement('div');
container.attributes.id = 'container';
const fakeForm = `<form id="myForm" name="myForm">
<input type="text" id="userName" name="userName" value="myName">
<input type="text" id="userPassword" name="userPassword" value="myPassword">
<input type="file" id="userfile" name="userfile">
<input type="radio" name="radioButton">
<input type="submit" value="Submit!">
<select name="mySelect">
  <option value="option 1">option 1</option>
  <option value="option 2" selected>option 2</option>
  <option value="option 3">option 3</option>
</select>
<select name="myMultipleSelect" multiple>
  <option value="option 1">option 1</option>
  <option value="option 2" selected>option 2</option>
  <option value="option 3" selected>option 3</option>
</select>
</form>`;
container.innerHTML = fakeForm;
document.body.appendChild(container);
const myFormElement = document.getElementById('myForm');
const serialize = new SerializeForm(myFormElement);
describe('Form serialization', () => {
  test('as array', () => {
    const formArray = serialize.getData('array');
    const expectedResult = [{
      name: 'userName',
      value: 'myName'
    }, {
      name: 'userPassword',
      value: 'myPassword'
    }, {
      name: 'mySelect',
      value: 'option 2'
    },
    {
      name: 'myMultipleSelect',
      value: 'option 2'
    }, {
      name: 'myMultipleSelect',
      value: 'option 3'
    }
    ];
    expect(formArray).toEqual(expectedResult);
  });
  test('as object', () => {
    const formObject = serialize.getData('object');
    const expectedResult = {
      userName: 'myName',
      userPassword: 'myPassword',
      mySelect: 'option 2',
      myMultipleSelect: ['option 2', 'option 3']
    };
    expect(formObject).toEqual(expectedResult);
  });
  test('as string', () => {
    const formString = serialize.getData();
    const expectedResult = 'userName=myName&userPassword=myPassword&mySelect=option 2&myMultipleSelect=option 2&myMultipleSelect=option 3';
    expect(formString).toEqual(expectedResult);
  });
});
