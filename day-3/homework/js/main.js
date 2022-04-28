const getData = async () => {
    let year = document.querySelector('#year').value
    let round = document.querySelector('#round').value
    let response = await axios.get(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`)
    console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings

}

// Create Constant to hold DOM Elements
const DOM_Elements = {
    driver: '.ranks', // referencing the HTML class
    clearDriver: 'new-rank'
}

// Create driver List HTML //
const create_driver = (position, name, lastName, nationality, sponsor, points) => {
    const morehtml = `<div class="row new-rank">
<h4 class="newposition col-12 col-md-2">${position}</h4>
<h4 class="new-item driver_name col-12 col-md-3">${name} ${lastName}</h4>
<h4 class="new-item nationality col-12 col-md-3">${nationality}</h4>
<h4 class="new-item sponsor col-12 col-md-2">${sponsor}</h4>
<h4 class="new-item points col-12 col-md-2" id="points">${points}</h4>
</div>`
    // 'Paste' new list-item ^ on document
    // document.querySelector(DOM_Elements.drivers).insertAdjacentHTML("beforeend",html)
    document.querySelector(DOM_Elements.driver).insertAdjacentHTML("beforeend",morehtml)
}


// Function to load each driver //
const loadData = async () => {
    const driverList = await getData();
    driverList.forEach(driver => create_driver(driver.position, driver.Driver.givenName, driver.Driver.familyName,
                         driver.Driver.nationality, driver.Constructors[0]['name'], driver.points));
     
}

const clearData = () => {
    const div = document.querySelector('div');
    div.classList.remove('new-rank');
    const h4 = document.querySelector('h4');
    h4.classList.remove('new-item');
}