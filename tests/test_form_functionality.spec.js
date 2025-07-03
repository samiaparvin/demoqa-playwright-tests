import { test, expect } from '@playwright/test';
import { studentRegForm } from './pages/student_reg_form';
import dummyData from './assets/testdata/dummyData.json'

test.describe('Student Registration Form Function Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
  });

    test('TC_UI_001 – should submit form with valid data', async ({ page }) => {

    const studentregform = new studentRegForm(page);

    await studentregform.fillFirstName(dummyData.firstname);
    await studentregform.fillLastName(dummyData.lastname);
    await studentregform.fillEmail(dummyData.useremail);
    await studentregform.clickGenderRadioBtnMale(); // Male
    await studentregform.fillMobileNumber(dummyData.Mobile);

    // Set Date of Birth
    await studentregform.selectADateOfBirth(dummyData.dobMon, dummyData.dobYear, dummyData.dobDay);

    // Subjects
    await studentregform.pickSubject(dummyData.subject);

    // Hobbies
    await studentregform.selectHobby();

    // Upload picture 
    await studentregform.uploadPicture('tests/assets/testimages/studentregForm.png');

    // Address
    await studentregform.enterCurrentAdress(dummyData.curraddress);

    // State and City
    await studentregform.selectState();
    await studentregform.selectCity();

    // Submit
    await studentregform.clickSubmitFormBtn();

    // Verify Modal after form submission
    await expect(studentregform.afterSuccesfulFormSubmitModalTitleCheck())
    .toHaveText('Thanks for submitting the form');
    await expect(studentregform.afterSuccesfulFormSubmitTableDataCheck(dummyData.firstname+' '+dummyData.lastname))
    .toBeVisible();
  });

  test('TC_UI_002 – should show error if required fields are empty', async ({ page }) => {

    const studentregform = new studentRegForm(page);

    //click submit button without filling out the required form fields
    await studentregform.clickSubmitFormBtn();

    //check visibility of red borders
    await expect(studentregform.getInputFirstName())
    .toHaveCSS('border-color', 'rgb(220, 53, 69)'); 

    await expect(studentregform.getInputLastName())
    .toHaveCSS('border-color', 'rgb(220, 53, 69)'); 

    await expect(studentregform.getInputMobile())
    .toHaveCSS('border-color', 'rgb(220, 53, 69)'); 

  });

  test('TC_UI_003 – Email format validation', async ({ page }) => {

    const studentregform = new studentRegForm(page);

    //Enter invalid email adress in email field
    await studentregform.fillInvalidInputInEmail(dummyData.invalidemail);

    //Click submit button
    await studentregform.clickSubmitFormBtn();

    //check visibility of red borders in email textbox
    await expect(studentregform.getInputEmail())
    .toHaveCSS('border-color', 'rgb(220, 53, 69)'); 
  });

  test('TC_UI_004 – Phone number format validation', async ({ page }) => {

    const studentregform = new studentRegForm(page);

    //Enter invalid number in mobile field with alphabet
    await studentregform.fillInvalidInputAlphabetInmobile(dummyData.InvalidMobileAlphabet);

    //Click submit button
    await studentregform.clickSubmitFormBtn();

    //check visibility of red borders in mobile textbox
    await expect(studentregform.getInputMobile())
    .toHaveCSS('border-color', 'rgb(220, 53, 69)');

    //Enter invalid number in mobile field with below 10 digits
    await studentregform.fillInvalidInputAlphabetInmobile(dummyData.InvalidMobileBelow10Dig);

    //Click submit button
    await studentregform.clickSubmitFormBtn();

    //check visibility of red borders in mobile textbox
    await expect(studentregform.getInputMobile())
    .toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });

});

