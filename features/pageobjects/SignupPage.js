class SignupPage {
    openSignUppage(){
        browser.url("https://signup.staging.answerconnect.com/signup?directSignup=true")
    }
    verifypageTitle = async(titile) => {
        const browserTitle = browser.getTitle();
        expect(await(await(await (browserTitle)).match(titile)));
    }

    get btneditplan(){
        return $("#change-plan-button");
    }

}
export default new commonpage1();
