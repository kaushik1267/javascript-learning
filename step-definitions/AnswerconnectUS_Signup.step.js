import { Given, When, Then } from '@wdio/cucumber-framework';
import SignupPage from '../pageobjects/SignupPage';
import helper from '../helper'

Given(/^I am in the signup page$/, async() => {
    await SignupPage.openSignupPage(helper.answerconnectSignupUrl);
});

Then(/^I should see signup page$/, async() =>{
    await SignupPage.verifypageTitle("AnswerConnect");
});

When(/^we set data in all the required fields$/, async() => {
    await SignupPage.setContactInfo("Airbus","kaushik","kaushik@gmail.com","6301991139")
   // await PaymentInfo.setPaymentInfo("4111 1111 1111 1111","02","2023","123","500054");
 });
 
 Then(/^on click of paynow button all the fiels should be verified$/, async() =>{
     await SignupPage.payNowBtnClk();
     await SignupPage.verifyContactInfo("Airbus","kaushik","kaushik@gmail.com","6301991139");
    // await PaymentInfo.verifyPaymentInfo("4111 1111 1111 1111","02","2023","123","500054");
 });
 
 When(/^we click on Edit Plan & Explore Add-Ons$/, async() => {
    await SignupPage.editPlansBtnClk();
 });
 
 Then(/^We should able to see plans popup$/, async() =>{
     await SignupPage.checkPlansPopupExists();
 });
 