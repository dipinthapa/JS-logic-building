/* Fatch API
 Provides an interface for fetching (sending/receiving) resources.
It uses request and response objects.
the fetch() method is used to fetch a resource.
 
Syntax: let promise = fetch(url.[option])        */

const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts = async () => {
    let response = await fetch(URL);
    console.log(response)

}