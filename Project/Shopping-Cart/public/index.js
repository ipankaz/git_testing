$(function(){
    let productList = $('#product-list')
    
    fetchproducts(function(products){
        productList.empty()
        for(product of products){
           productList.append( createProductCard(product))
        }
    })
})