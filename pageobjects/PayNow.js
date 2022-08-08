class PayNow {

    get payNowBtn(){ return $('#submit'); }

    async payNowBtnClk(){
        await this.payNowBtn.click();
    }
}
export default new PayNow();
