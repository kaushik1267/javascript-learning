import { Given , When , Then } from '@wdio/cucumber-framework';
import SignupPage from '../pageobjects/SignupPage';

Given(/^I am in the browser$/, async() => {
    await SignupPage.openSignUppage();

});
When(/^I load the SignUp url$/, async() => {

});

Then(/^I should see signup page$/, async() =>{
    await SignupPage.verifypageTitle("AnswerConnect");


});





