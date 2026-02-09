let products =
 [


   {
    id: 1,
    title : 'Oneplus',
    desc :'it is a really good mobile...',
    image : './mobile.jpg',
    price: 30000,
    inStock: true,
    storage : '6gb'

   },

    {
    id: 2,
    title : 'Iphone',
    desc :'it is a really good mobile...',
    image : './mobile.jpg',
    price: 100000,
    inStock: true,
    storage : '8gb'

   },
    {
    id: 3,
    title : 'Motrolla',
    desc :'it is a really good mobile...',
    image : './mobile.jpg',
    price: 50000,
    inStock: true,
    storage : '4gb'

   },
    {
    id: 4,
    title : 'Samsung',
    desc :'it is a really good mobile...',
    image : './mobile.jpg',
    price: 30000,
    inStock: true,
    storage : '8gb'

   },
    {
    id: 5,
    title : 'Realmi',
    desc :'it is a really good mobile...',
    image : './mobile.jpg',
    price: 25000,
    inStock: true,
    storage : '6gb'

   },
    {
    id: 6,
    title : 'Redmi',
    desc :'it is a really good mobile...',
    image : './mobile.jpg',
    price: 40000,
    inStock: true,
    storage : '8gb'

   },
    {
    id: 7,
    title : 'Oneplus',
    desc :'it is a really good mobile...',
    image : './mobile.jpg',
    price: 30000,
    inStock: true,
    storage : '6gb'

   },
    {
    id: 8,
    title : 'Iphone',
    desc :'it is a really good mobile...',
    image : './mobile.jpg',
    price: 30000,
    inStock: true,
    storage : '6gb'

   },

]
console.log(products);


let container = document.getElementById('container');

function renderProduct(prodcut){
    container.innerHTML = ''
    prodcut.map((item)=>{
        container.innerHTML += `
        <div class="col-3 mb-4">
        <div class="card h-100 border rounded shadow p-1" >
  <img src="${item.image}" class="card-img-top" alt="...">
  <div class="card-body d-flex flex-column">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text"> ${item.desc}</p>
    <a href="#" class="btn btn-primary mt-auto">Add to cart</a>
  </div>
</div>

        <div>
        
        
        
        
        
        `
    })

    



}

renderProduct(products);




// filter


let filterPro = () =>{

    let search = document.getElementById('input').value.toLowerCase();
    console.log(search);

    let filterItem = products.filter(item=> item.title.toLowerCase().includes(search));
    renderProduct(filterItem)
    

}
