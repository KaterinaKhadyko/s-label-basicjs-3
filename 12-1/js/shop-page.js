var shopProducts = new Products('shopProducts');
shopProducts.selector = "#products-holder";

var shopContentTemplate = new Template("templates/shop.html");
var shopSideBar = new SideBar(shopProducts);

var shopContent = new Page (shopContentTemplate, shopProducts, shopSideBar);