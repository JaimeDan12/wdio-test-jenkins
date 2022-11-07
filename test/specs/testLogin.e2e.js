

const Login =require("../pageobjects/bootcamp/LoginPage");

const Inventory =require("../pageobjects/bootcamp/Inventory");


describe("l'utilisateur peut se connecter et se deconnecté",()=>{

    

it("ouverture du naviagteur",async function(){

    await Login.navigate();

})


it("verification si les cookies sont vides avant la connexion", async() => {

    expect(await browser.getCookies("session-username")).toEqual([]);

});

it("l'utilisateur renseigne son username et son password et clique sur le boutton connexion",async function(){

    await Login.imput_username.setValue("standard_user");

    await Login.imput_password.setValue("secret_sauce");

    await Login.btnConnexion.click();



});


it("verification si la personne c'est bien connecté via les cookies", async() => {

    expect(await browser.getCookies("session-username")).toHaveValue( [
     {
       domain: 'www.saucedemo.com',
       expiry: 1660217778,
       httpOnly: false,
       name: 'session-username',
       path: '/',
       secure: false,
       value: 'standard_user'
     }
   ]);




});

it('verification du nombre d\'article ', async() => {
  const list= await Inventory.listProduct;

  expect(list.length).toEqual(6);
});



it("logout/ deconnexion de l\'utilisateur",async ()=>{

    await Inventory.btnMenu
    await Inventory.btnLougout

  })



})



