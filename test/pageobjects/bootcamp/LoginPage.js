


class PageLogin{


   static get imput_username(){
        return $("#user-name");
    }

   static get imput_password(){
        return $("#password");
    }

    static get btnConnexion(){
        return $("#login-button");
    }

   static navigate(){
        return browser.url(`https://www.saucedemo.com/`)
    }
}

module.exports= PageLogin;