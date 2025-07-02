export class webTable{

    constructor(page) {
    this.page = page;
    }

    //Add button to add new record
    btn_add_id = '#addNewRecordButton'

    //Search box
    scrh_box_id = '#searchBox'

    //Entry edit button
    btn_edit = 'span[title="Edit"]'

    //Entry delete button
    btn_delete = 'span[title="Delete"]'

    //New record entry form
    txt_firstname_id = '#firstName'
    txt_lastname_id = '#lastName'
    txt_email_id = '#userEmail'
    txt_age_id = '#age'
    txt_salary_id = '#salary'
    txt_dept_id = '#department'

    //New record entry form submit button
    btn_submit_id = '#submit'

    //Table entries
    tbl_data = '.rt-tbody'

    clickAddNewRecordBtn(){
        return this.page.click(this.btn_add_id);
    }

    fillFirstNameFieldOfEntryFrom(firstname){
        return this.page.fill(this.txt_firstname_id, firstname);
    }

    fillLasttNameFieldOfEntryFrom(lastname){
        return this.page.fill(this.txt_lastname_id, lastname);
    }

    fillEmailFieldOfEntryFrom(email){
        return this.page.fill(this.txt_email_id, email);
    }

    fillAgeFieldOfEntryFrom(age){
        return this.page.fill(this.txt_age_id, age);
    }

    fillSalaryFieldOfEntryFrom(salary){
        return this.page.fill(this.txt_salary_id, salary);
    }

    fillDepartmentFieldOfEntryFrom(dept){
        return this.page.fill(this.txt_dept_id, dept);
    }

    clickEntryFormSubmitBtn(){
        return this.page.click(this.btn_submit_id);
    }

    searchForSpecificData(searchtxt){
        return this.page.fill(this.scrh_box_id, searchtxt);
    }

    clickOnEditButton(){
        return this.page.click(this.btn_edit);
    }

    clickOnDeleteButton(){
        return this.page.click(this.btn_delete);
    }

    getTableData(){
        return this.page.locator(this.tbl_data);
    }

}