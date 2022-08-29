import { Given, When, Then } from '@wdio/cucumber-framework';
import SignupPage from '../pageobjects/SignupPage';
import utils from '../utils'
import Helper from '../helper';

Given(/^I am in the signup page - answerforce$/, async() => {
   await SignupPage.openSignupPage1(utils.answerforceUSSignupUrl);
});

Then(/^I should see signup page - answerforce$/, async() =>{
    await SignupPage.verifypageTitle("AnswerForce");
});

When(/^we set data in all the required fields - answerforce$/, async() => {
    await SignupPage.setContactInfo(utils.testData.companyName,utils.testData.firstName,utils.testData.email,utils.testData.phoneNumber);
   // await PaymentInfo.setPaymentInfo("4111 1111 1111 1111","02","2023","123","500054");
 });
 
 Then(/^on click of paynow button all the fiels should be verified - answerforce$/, async() =>{
   //  await SignupPage.payNowBtnClk();
   await Helper.onClickOfElement(SignupPage.payNowBtn);
   //await helper.onClick(SignupPage.payNowBtn);
     await SignupPage.verifyContactInfo(utils.testData.companyName,utils.testData.firstName,utils.testData.email,utils.testData.phoneNumber);
    // await PaymentInfo.verifyPaymentInfo("4111 1111 1111 1111","02","2023","123","500054");
 });
 
 When(/^we click on Edit Plan & Explore Add-Ons - answerforce$/, async() => {
    //await SignupPage.editPlansBtnClk();
    await Helper.onClickOfElement(SignupPage.editPlans);
 });
 
 Then(/^We should able to see plans popup$ - answerforce$/, async() =>{
     await SignupPage.checkPlansPopupExists();
 });
 