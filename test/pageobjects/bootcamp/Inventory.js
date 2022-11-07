

class InventoryPage{


    static get btnMenu(){
        return $("#react-burger-menu-btn");
    }

    static get btnLougout(){
        return $("#logout_sidebar_link");
    }

    static get listProduct(){
        return $$(".inventory_item");
    }
}

module.exports=InventoryPage