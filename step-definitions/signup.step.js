import { Given  , Then } from '@wdio/cucumber-framework';
import SignupPage from '../pageobjects/signup.page';

Given(/^I am in the signup page$/, async() => {
    await SignupPage.openSignupPage();

});
// When(/^I load the SignUp url$/, async() => {

// });

Then(/^I should see signup page$/, async() =>{
    await SignupPage.verifypageTitle("AnswerConnect");
});





