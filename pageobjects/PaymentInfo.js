class PaymentInfo {

    get cardNumber(){ return  $('#credit-card-number'); }
    get month(){ return  $('#expiration-month');}
    get year(){ return  $('#expiration-year');}
    get cvv(){ return  $('#cvv');}
    get postalCode(){ return  $('#postal-code');}

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
    
}
export default new PaymentInfo();