const getProducts =async()=>{
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
}
//getProducts();

fetch("https://fakestoreapi.com/products")
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error));