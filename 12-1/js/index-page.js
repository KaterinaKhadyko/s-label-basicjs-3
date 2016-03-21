var indexProducts = new Products('products');
indexProducts.selector = ".features_items";

var indexSideBar = new SideBar(indexProducts);
var indexContentTemplate = new Template("templates/index.html");

var indexContent = new Page (indexContentTemplate, indexProducts, indexSideBar);
