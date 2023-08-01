describe("My Sneakers ",  () => {
    it("Verifying the Sneaker Page is opening", async () => {

        await browser.url('https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=Sneakers&_sacat=0');
        await browser.pause(3000);

    });
    
    it('Verify Banner on Sneaker Page', async () => {

        const sneakBanner = $("//div[@class = 'srp-1p srp-1p__banner srp-1p--large']");
        expect(sneakBanner).toBeDisplayed();


    });

    it("Verify click on the Banner Title", async ()=> {
        const infotit = $('//div[@class = "srp-1p__title"]');
        await infotit.click();
        await browser.pause(4000);
    });
    
    it("Select Sneaker", async ()=> {
        const Sneakselect = $("(//a[@class='s-item__link'])[3]");
        const selectSize = $("#x-msku__select-box-1001 option:nth-child(2)");
       
        await Sneakselect.click();
        await selectSize.click();
        
        await browser.pause(400);
        

    })
    it("clicking buy now",async ()=>{
        const buyNow = $('//a[@id="binBtn_btn_1"]');
        await buyNow.waitForDisplayed({ timeout: 5000 })
        await buyNow.click();
        
        
    })
    it("Sign-In to Purchase",async ()=> {
        const SIgnin = $('(//a[@data-testid="ux-call-to-action"])[2]')
        expect(SIgnin).toBeClickable();
        await SIgnin.waitForDisplayed({ timeout: 3000 })
        await SIgnin.click();
        
        
    })
    it("Sign-In To google",async ()=>{
        const GooglesignIn = $('//button[@id="signin_ggl_btn"]');
        await GooglesignIn.click();
    })
    it("Input Google Email",async ()=>{
        const typeID = $('//input[@id="identifierId"]')
        await typeID.waitForDisplayed({ timeout: 1000 })
        await typeID.setValue("instadivyanshu@gmail.com");
        const clickNext =  $('//span[text()="Next"]');
        await clickNext.click();
        


    });
    it("Enter Password", async ()=>{
        const PasswordIn = $('//input[@type="password"]');
        await PasswordIn.waitForDisplayed({ timeout: 4000 })
        PasswordIn.setValue("Divyanshu9560467965");
        const clickNext =  $('//span[text()="Next"]');
        await clickNext.click();
    })

   



});

    