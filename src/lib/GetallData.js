const GetallData = async () => {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    let newdata = await data.products;
    return await newdata;

}

export default GetallData