class  Helper  {

    async onClickOfElement(locator) {
        await locator.click();
    }

    async openInBrowser(path) {
        await browser.url(path);
    }

    async clickElement(element, time) {
        await element.waitForDisplayed({ timeout: time });
        await element.click();
      }
    
      async setElementValue(element, text, time) {
        await element.waitForDisplayed({ timeout: time });
        await element.clearValue();
        await element.setValue(text);
      }
    
      async getElementValue(element, time) {
        await element.waitForDisplayed({ timeout: time });
        const received_value = await element.getValue();
        return received_value;
      }

      async getText(element) {
        await element.waitForDisplayed({ timeout: time });
        const text = await element.getText();
        return text;
      }

}

export default new Helper();
