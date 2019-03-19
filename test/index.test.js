import SerializeForm from '../index';

const container = document.createElement('div');
container.attributes.id = 'container';
const fakeForm = `<form id="myForm" name="myForm">
<input type="text" id="userName" name="userName" value="myName">
<input type="text" id="userPassword" name="userPassword" value="myPassword">
<input type="file" id="userfile" name="userfile">
<input type="radio" name="radioButton">
<input type="submit" value="Submit!">
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
    }];
    expect(formArray).toEqual(
      expect.arrayContaining(expectedResult),
    );
  });
  test('as object', () => {
    const formObject = serialize.getData('object');
    const expectedResult = {
      userName: 'myName',
      userPassword: 'myPassword'
    };
    expect(formObject).toEqual(expectedResult);
  });
  test('as string', () => {
    const formString = serialize.getData();
    console.log(formString);
    const expectedResult = 'userName=myName&userPassword=myPassword';
    expect(formString).toEqual(expectedResult);
  });
});
