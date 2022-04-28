const getData = async () =>{
    let response = await axios.get(`https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers`)
    console.log(response.data)
    return response.data
}

// Create a constant to hold DOM elements
const DOM_Elements = {
    rangers: '.ranger-list'
}

// Create Ranger List HTMl
const createRanger = (id, name, color, powercoin) =>{
    const html = `<a href='#' class= 'list-group-item list-group-item-action list-group-item-light' id="${id}">${name}>${color}>${powercoin}</a>`
    // past list item on document
    document.querySelector(DOM_Elements.rangers).insertAdjacentHTML('beforeend', html)
}


//create function to loop over rangers and create each element 
const loadData = async () => {
    clearData
    const rangerList = await getData();

    rangerList.forEach(ranger => {
    if (ranger["morp-coin"]){
        createRanger(ranger.id, ranger.name, ranger.color,ranger["morp-coin"] )
    }else{
        createRanger(ranger.id, ranger.name, ranger.color,ranger["power-coin"] )}
})
        
}

//Clear the data
const clearData = () =>{
    document.querySelector(DOM_Elements.rangers).innerHTML = '';
}