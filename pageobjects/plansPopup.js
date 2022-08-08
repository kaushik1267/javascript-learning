class plansPopup {

    get editPlans(){ return  $('#change-plan-button'); }

    get plansPopupId(){ return  $('#change-plan-popup')}

    async editPlansBtnClk(){
        await this.editPlans.click();
    }
    async checkPlansPopupExists(){
        const doesExist = await (this.plansPopupId);
    
        let isDisplayed = await doesExist.isDisplayed();
        console.log("popupdisplayec",isDisplayed); 
        expect(isDisplayed).toEqual(true);
     }

}
export default new plansPopup();