class ContactInfo {

    get companyName(){ return  $('#companyName'); }
    get fullName(){ return  $('#contactName');}
    get email(){ return  $('#email');}
    get phone(){ return  $('#phone');}

    async setContactInfo(companyName,fullName,email,phone){
        await this.companyName.setValue(companyName)
        await this.fullName.setValue(fullName);
        await this.email.setValue(email);
        await this.phone.setValue(phone);
    }

    async verifyContactInfo(userCompanyName,usercontactName,userEmail,userPhone){

       const companyName = await (await this.companyName).getValue();
       const contactName = await (await this.fullName).getValue();
       const email = await (await this.email).getValue();
       const phone = await (await this.phone).getValue();

       expect(companyName).toEqual(userCompanyName);
       expect(contactName).toEqual(usercontactName);
       expect(email).toEqual(userEmail);
       expect(phone).toEqual(userPhone);
    }
    
}
export default new ContactInfo();