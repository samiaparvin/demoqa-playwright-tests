import { test, expect } from '@playwright/test';
import {webTable} from './pages/web_table';
import dummyData from './assets/testdata/dummyData.json';

test.describe('Web Table CRUD check', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/webtables');
  });

    test('TC_UI_001 – Add new record to web table', async ({ page }) => {

    const webtbl = new webTable(page);

    // Click Add Button
    await webtbl.clickAddNewRecordBtn();

    // Fill the form
    await webtbl.fillFirstNameFieldOfEntryFrom(dummyData.firstname);
    await webtbl.fillLasttNameFieldOfEntryFrom(dummyData.lastname);
    await webtbl.fillEmailFieldOfEntryFrom(dummyData.useremail);
    await webtbl.fillAgeFieldOfEntryFrom(dummyData.age);
    await webtbl.fillSalaryFieldOfEntryFrom(dummyData.salary);
    await webtbl.fillDepartmentFieldOfEntryFrom(dummyData.department);

    // Submit
    await webtbl.clickEntryFormSubmitBtn();

    // Verify record added
    await expect(webtbl.getTableData()).toContainText(dummyData.firstname);
    await expect(webtbl.getTableData()).toContainText(dummyData.lastname);
    });


    test('TC_UI_002 – Search for an existing record', async ({ page }) => {

    const webtbl = new webTable(page);

    // Search for name "Alden"
    await webtbl.searchForSpecificData(dummyData.visibleScrhTxt);

    // Validate search result
    await expect(webtbl.getTableData()).toContainText(dummyData.visibleScrhTxt);
    });


    test('TC_UI_003 – Edit an existing record in web table', async ({ page }) => {

    const webtbl = new webTable(page);

    // Search for record 'Alden'
    await webtbl.searchForSpecificData(dummyData.visibleScrhTxt);

    // Click Edit button
    await webtbl.clickOnEditButton();

    // Update fields
    await webtbl.fillDepartmentFieldOfEntryFrom(dummyData.deptQa);

    // Submit
    await webtbl.clickEntryFormSubmitBtn();

    // Verify update
    await expect(webtbl.getTableData()).toContainText(dummyData.deptQa);
    });


    test('TC_UI_004 – Delete a record from web table', async ({ page }) => {

    const webtbl = new webTable(page);

    // Search for record 'Alden'
    await webtbl.searchForSpecificData(dummyData.visibleScrhTxt);

    // Click Delete button
    await webtbl.clickOnDeleteButton();

    // Ensure it's deleted
    await expect(webtbl.getTableData()).not.toContainText(dummyData.visibleScrhTxt);
    });


});

