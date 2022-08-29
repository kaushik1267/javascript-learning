import { Given, When, Then } from '@wdio/cucumber-framework';
import SignupPage from '../pageobjects/SignupPage';
import utils from '../utils'
import Helper from '../helper';

Given(/^I am in the signup page$/, async() => {
    await SignupPage.openSignupPage(utils.answerconnectSignupUrl);
});

Then(/^I should see signup page$/, async() =>{
    await SignupPage.verifypageTitle("AnswerConnect");
});

When(/^we set data in all the required fields$/, async() => {
    await SignupPage.setContactInfo(utils.testData.companyName,utils.testData.firstName,utils.testData.email,utils.testData.phoneNumber);
 });
 
 Then(/^on click of paynow button all the fiels should be verified$/, async() =>{
   //  await SignupPage.payNowBtnClk();
   await Helper.onClickOfElement(SignupPage.payNowBtn);
   await SignupPage.verifyContactInfo(utils.testData.companyName,utils.testData.firstName,utils.testData.email,utils.testData.phoneNumber);
    // await PaymentInfo.verifyPaymentInfo("4111 1111 1111 1111","02","2023","123","500054");
 });
 
 When(/^we click on Edit Plan & Explore Add-Ons$/, async() => {
    await Helper.onClickOfElement(SignupPage.editPlans, utils.waitTime);
 });
 
 Then(/^We should able to see plans popup$/, async() =>{
     await SignupPage.checkPlansPopupExists();
 });
 