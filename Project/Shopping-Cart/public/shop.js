function fetchproducts(done){
  
    $.get('/api/products',function(data){
      console.log(data);
        done(data)// here done is used to store data so that we can use it later , its special feature in js
    })
}



function createProductCard(product){
    return $(`
    <div class="col-4 m-4">
     <div class="card p-3">
       <div class="">${product.name}</div>
        <div class=" mb-1">${product.manufacturer}</div>
         <div class="row">
         <div class="col"><b>Rs. ${product.price}</b></div>
           <button  class="col btn btn-primary mr-3">Buy</button>
       </div>
     </div>
   </div>
  `)
}

