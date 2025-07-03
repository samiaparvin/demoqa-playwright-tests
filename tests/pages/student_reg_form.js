export class studentRegForm{

    constructor(page) {
    this.page = page;
    }

    //Form Fields label
    lbl_name_id = '#userName-label'
    lbl_email_id = '#userEmail-label'
    lbl_gender_txt = 'Gender'
    lbl_mobile_id = '#userNumber-label'
    lbl_dob_id = '#dateOfBirth-label'
    lbl_subjects_txt = 'Subjects'
    lbl_hobbies_txt = 'Hobbies'
    lbl_picture_txt = 'Picture'
    lbl_current_address_id = '#currentAddress-label'
    lbl_state_city_id = '#stateCity-label'

    //Form input fields
    txt_firstname_id = '#firstName'
    txt_lastname_id = '#lastName'
    txt_email_id = '#userEmail'

    rdo_gender_male = 'label[for="gender-radio-1"]'
    rdo_gender_female = 'label[for="gender-radio-2"]'
    rdo_gender_other = 'label[for="gender-radio-3"]'

    txt_mobile_id = '#userNumber'

    dob_id = '#dateOfBirthInput'
    dob_month_sel = '.react-datepicker__month-select'
    dob_year_sel = '.react-datepicker__year-select'
    dob_days_of_month = '.react-datepicker__month'
    //dob_day_sel = '.react-datepicker__day--015'

    subject_pick = '#subjectsContainer'
    subject = 'subjects-auto-complete__control css-yk16xz-control'

    chkbox_hobbies_sports = 'label[for="hobbies-checkbox-1"]'
    chkbox_hobbies_reading = 'label[for="hobbies-checkbox-2"]'
    chkbox_hobbies_music = 'label[for="hobbies-checkbox-3"]'

    picture_upload_id = '#uploadPicture'

    txt_current_address_id = '#currentAddress'

    sel_state_id = '#state'
    sel_state_first_opt = 'div[id^="react-select-3-option"]'

    sel_city_id = '#city'
    sel_city_first_opt = 'div[id^="react-select-4-option"]'

    //Form submit button
    btn_submit_id = '#submit'

    //after form submission success modal & table
    succ_form_subm_modal = '#example-modal-sizes-title-lg'
    table_data_after_subm = 'td'

    fillFirstName(firstname){
        return this.page.fill(this.txt_firstname_id, firstname);
    }

    fillLastName(lastname){
        return this.page.fill(this.txt_lastname_id, lastname);
    }

    fillEmail(email){
        return this.page.fill(this.txt_email_id, email);
    }

    clickGenderRadioBtnMale(){
        return this.page.click(this.rdo_gender_male); // Male
    }

    clickGenderRadioBtnFemale(){
        return this.page.click(this.rdo_gender_female); // Female
    }

    clickGenderRadioBtnOther(){
        return this.page.click(this.rdo_gender_other); // Other
    }

    fillMobileNumber(number){
        return this.page.fill(this.txt_mobile_id, number);
    }

    async selectADateOfBirth(month, year,day) {
    await this.page.click(this.dob_id);
    await this.page.selectOption(this.dob_month_sel, month);
    await this.page.selectOption(this.dob_year_sel, year);
    await this.page.locator(`.react-datepicker__day--${day}`);
    }

    async pickSubject(sub){
        await this.page.locator(this.subject_pick).click();
        await this.page.locator(this.subject_pick).type(sub);

        const dropdownOption = this.page.locator(`div[id^="react-select-2-option"]:has-text("${sub}")`);
        await dropdownOption.waitFor();                                  // wait for dropdown to show
        await dropdownOption.click();
    }

    selectHobby(){
        return this.page.click(this.chkbox_hobbies_sports); // Sports
    }

    uploadPicture(filePath){
        return this.page.setInputFiles(this.picture_upload_id, filePath);
    }

    enterCurrentAdress(currAdd){
        return this.page.fill(this.txt_current_address_id, currAdd);
    }

    async selectState(){
        await this.page.click(this.sel_state_id);
        await this.page.click(this.sel_state_first_opt); // First option
    }

    async selectCity(){
            await this.page.click(this.sel_city_id);
            await this.page.click(this.sel_city_first_opt); // First option
    }

    clickSubmitFormBtn(){
        return this.page.click(this.btn_submit_id);
    }

    afterSuccesfulFormSubmitModalTitleCheck(){
        return this.page.locator(this.succ_form_subm_modal)
    }

    afterSuccesfulFormSubmitTableDataCheck(expectedText){
        return this.page.locator('td', { hasText: expectedText });
    }

    getInputFirstName(){

        return this.page.locator(this.txt_firstname_id);
    }

    getInputLastName(){

        return this.page.locator(this.txt_lastname_id);
    }

    getInputMobile(){

        return this.page.locator(this.txt_mobile_id);
    }

    getInputEmail(){

        return this.page.locator(this.txt_email_id);
    }

    fillInvalidInputInEmail(invalidEmail){
        this.page.locator(this.txt_email_id).fill(invalidEmail);
    }

    fillInvalidInputAlphabetInmobile(invalidNum){
        this.page.locator(this.txt_mobile_id).fill(invalidNum);
    }

    fillInvalidInputBelowTenDigitInmobile(invalidNum){
        this.page.locator(this.txt_mobile_id).fill(invalidNum);
    }

}