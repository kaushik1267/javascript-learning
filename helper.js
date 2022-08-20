const  helper  = {

    openSignupPage(url){
        browser.url(url)
    },

    async verifypageTitle (titile) {
        const browserTitle = browser.getTitle();
        expect(await(await(await (browserTitle)).match(titile)));
    }

};

export default helper;


