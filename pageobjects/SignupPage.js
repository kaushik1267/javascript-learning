import helper from '../helper';
import Helper from  '../helper'
import utils from '../utils';

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
    async openSignupPage(url){
        await Helper.openInBrowser(url);
    }
    verifypageTitle = async(titile) => {
        const browserTitle = browser.getTitle();
        expect(await(await(await (browserTitle)).match(titile)));
    }
  
    async setContactInfo(companyName,fullName,email,phone){
        await  helper.setElementValue(this.companyName,companyName,utils.waitTime);
        await  helper.setElementValue(this.fullName,fullName,utils.waitTime);
        await  helper.setElementValue(this.email,email, utils.waitTime ); 
        await  helper.setElementValue(this.phone,phone, utils.waitTime);  
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
        await helper.setElementValue(this.cardNumber,cardNumber, utils.waitTime);
        await helper.setElementValue(this.month,expirationMonth, utils.waitTime);
        await helper.setElementValue(this.year,expirationYear, utils.waitTime);
        await helper.setElementValue(this.cvv,cvv,  utils.waitTime);
        await helper.setElementValue(this.postalCode,postalCode,utils.waitTime);
    }

    async verifyPaymentInfo(usercardNumber,usermonth,useryear,usercvv,userpostalCode){
        
       const cardNumber =     await   helper.getElementValue(this.cardNumber,usercardNumber,utils.waitTime);
       const month = await helper.getElementValue(this.month,usermonth,utils.waitTime); 
       const year = await  helper.getElementValue(this.year,useryear,utils.waitTime);  
       const cvv = await  helper.getElementValue(this.cvv,usercvv,utils.waitTime);
       const postalCode = await helper.getElementValue(this.postalCode,userpostalCode,utils.waitTime);

        assert.equal(usercardNumber,cardNumber);
        assert.equal(usermonth,month); 
        assert.equal(useryear,year);
        assert.equal(usercvv,cvv); 
        assert.equal(userpostalCode,postalCode)
    }
    
    async checkPlansPopupExists(){
        const doesExist = await (this.plansPopupId);
    
        let isDisplayed = await doesExist.isDisplayed();
        console.log("popupdisplayec",isDisplayed); 
        expect(isDisplayed).toEqual(true);
     }

}
export default new SignupPage();
