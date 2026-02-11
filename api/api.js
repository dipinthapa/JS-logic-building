/* Fatch API
 Provides an interface for fetching (sending/receiving) resources.
It uses request and response objects.
the fetch() method is used to fetch a resource.
 
Syntax: let promise = fetch(url.[option])        */

const URL = "https://fakestoreapi.com/products/1";
const dataP = document.querySelector("#desc");
const btn = document.querySelector("#btn");

const getSomething = async () => {
    let response = await fetch(URL);
    console.log(response)
    let aData = await response.json();
    console.log(aData.description);
    dataP.innerText = aData.description;
}

// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())            
//             .then(json=>console.log(json))

btn.addEventListener("click", getSomething);