const { Builder, By, until } = require("selenium-webdriver");
const { expect } = require("chai");
describe("Positive test", async function(){
    const adName = By.className("title-info-title-text");
    const favoriteBtn = By.css(".desktop-usq1f1[title='Добавить в избранное']");
    const addMessage = By.className("desktop-1rs0evq");
    const favoriteBtnSuccess = By.css("button[data-marker='item-view/favorite-button'] span");
    const favoriteSection = By.className("desktop-1rdftp2");
    const adNameResult = By.className("styles-module-root-hwVld");
    it("Should add the good to the favorites", async function(){
        this.timeout(15000);

        const driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.avito.ru/nikel/knigi_i_zhurnaly/domain-driven_design_distilled_vaughn_vernon_2639542363");
        const adNameForCompare = await driver.findElement(adName).getText();
        await driver.findElement(favoriteBtn).click();
        await driver.sleep(2000);
        await driver.findElement(addMessage);
        const favoriteBtnChange = await driver.findElement(favoriteBtnSuccess).getText();
        expect(favoriteBtnChange).to.be.equal("В избранном", "Wrong button text");
        await driver.findElement(favoriteSection).click();

        const adNameResultForCompare = await driver.findElement(adNameResult).getText();
        expect(adNameResultForCompare).to.be.equal(adNameForCompare, "Wrong ad");
        await driver.quit();
    });
});