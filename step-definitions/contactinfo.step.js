import { Given, When, Then } from '@wdio/cucumber-framework';
// import SignupPage from '../pageobjects/SignupPage';
import ContactInfo from '../pageobjects/ContactInfo';
import PayNow from '../pageobjects/PayNow';
// import PaymentInfo from '../pageobjects/PaymentInfo';

// Given(/^I am on the signup page$/, async() => {
//   // await SignupPage.openSignupPage();

// });
When(/^we set data in all the required fields$/, async() => {
   await ContactInfo.setContactInfo("Airbus","kaushik","kaushik@gmail.com","6301991139")
  // await PaymentInfo.setPaymentInfo("4111 1111 1111 1111","02","2023","123","500054");
});

Then(/^on click of paynow button all the fiels should be verified$/, async() =>{
    await PayNow.payNowBtnClk();
    await ContactInfo.verifyContactInfo("Airbus","kaushik","kaushik@gmail.com","6301991139");
   // await PaymentInfo.verifyPaymentInfo("4111 1111 1111 1111","02","2023","123","500054");
});

 