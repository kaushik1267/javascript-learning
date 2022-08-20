class SignupPage {


    get companyName(){ return  $('#companyName'); }
    get fullName(){ return  $('#contactName');}
    get email(){ return  $('#email');}
    get phone(){ return  $('#phone');}


    get cardNumber(){ return  $('#credit-card-number'); }
    get month(){ return  $('#expiration-month');}
    get year(){ return  $('#expiration-year');}
    get cvv(){ return  $('#cvv');}
    get postalCode(){ return  $('#postal-code');}

    get payNowBtn(){ return $('#submit'); }

    get editPlans(){ return  $('#change-plan-button'); }

    get plansPopupId(){ return  $('#change-plan-popup')}

    get btneditplan(){
        return $("#change-plan-button");
    }


    verifypageTitle = async(titile) => {
        const browserTitle = browser.getTitle();
        expect(await(await(await (browserTitle)).match(titile)));
    }

  
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
    
    async setPaymentInfo(cardNumber,expirationMonth,expirationYear,cvv,postalCode){
        await this.cardNumber.setValue(cardNumber);
        await this.month.setValue(expirationMonth);
        await this.year.setValue(expirationYear);
        await this.cvv.setValue(cvv);
        await this.postalCode.setValue(postalCode)
    }

    async verifyPaymentInfo(usercardNumber,usermonth,useryear,usercvv,userpostalCode){
        
       const cardNumber = await (await this.cardNumber).getValue();
       const month = await (await this.month).getValue();
       const year = await (await this.year).getValue();
       const cvv = await (await this.cvv).getValue();
       const postalCode = await (await this.postalCode).getValue();

        assert.equal(usercardNumber,cardNumber);
        assert.equal(usermonth,month); 
        assert.equal(useryear,year);
        assert.equal(usercvv,cvv); 
        assert.equal(userpostalCode,postalCode)
    }

    async payNowBtnClk(){
        await this.payNowBtn.click();
    }


    async editPlansBtnClk(){
        await this.editPlans.click();
    }
    async checkPlansPopupExists(){
        const doesExist = await (this.plansPopupId);
    
        let isDisplayed = await doesExist.isDisplayed();
        console.log("popupdisplayec",isDisplayed); 
        expect(isDisplayed).toEqual(true);
     }

}
export default new SignupPage();
