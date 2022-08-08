import { When, Then } from '@wdio/cucumber-framework';
import plansPopup from '../pageobjects/plansPopup';


When(/^we click on Edit Plan & Explore Add-Ons$/, async() => {
    await plansPopup.editPlansBtnClk();
 });
 
 Then(/^We should able to see plans popup$/, async() =>{
     await plansPopup.checkPlansPopupExists();
 });
 