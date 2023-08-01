describe("Ebay Product search", () => {
    it('should open the main url and veriy the title', async () =>{
        browser.url('https://www.ebay.com/');
        await expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay');

        
        

     });

     it('should search for a product and verify the text' ,async () => {
        const searchProduct = $('//input[@id = "gh-ac"]') ;
        const searchBtn  = $('//input[@id ="gh-btn"]');
        await searchProduct.addValue("Laptop") 
        searchBtn.click();

        expect(searchProduct).toHaveValue("Shoes");
    });
    it("Should verify to the newpage and verify the title" ,async ()=> {
        await expect(browser).toHaveTitle('Laptop for sale | eBay')
    }) ;
    it("should update the search category",() =>{
        const categ = $("#gh-cat option:nth-child(1)");

        expect(categ).toHaveText("PC Laptops & Netbooks");
    })
    it("Buy Sneaker",)
    

});