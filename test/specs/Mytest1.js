
describe('Demo Tests', function(){

    it('My First Test', async () => {

        await browser.url('https://google.com');

        await $('[id = "APjFqb"]').setValue('WebdriverIO')

        

        await browser.pause(8000)

    });


});