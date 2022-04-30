// create global ssong variables
let song;
let playSong;

//spotify client credentials...(keep these secret from github)
const clientId ='b5510c15a4f64ac193c2adc0d2544c18';
const clientSecret ='85dd19cafe1b4592bef7cae5aa053e32';

const getToken = async() => {
    const result = await fetch(`https://accounts.spotify.com/api/token`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    })
    const data = await result.json()
    console.log(data)
    return data.access_token
}

/**
 * function to get songs from Spotify using the image index from gallery
 * Then finding the correct item_index from the objectreturned from spotify
 * This will produce a preview url for the ssong to play
 * @param {number} img_index - index of image in gallery
 * @param {number} item_index - index of spotify object holding our song preview 
 * 
 */
let clickedEvent = async(img_index,item_index) => {
    //Get the track name
    let track = document.getElementsByTagName('img')[img_index].attributes[1].value;
    console.log(`searching for track: ${track}`)

    let token = await getToken();

    let headers = new Headers([
        ['Content-Type','application/json'],
        ['Accept', 'application/json'],
        ['Authorization',`Bearer ${token}`]
    ]);

    let request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=10`,{
        method: 'GET',
        headers: headers
    })

    let result = await fetch(request)
    let response = await result.json();
    console.log(response.tracks)
    song = response.tracks.items[item_index].preview_url
    console.log(song)

    if (playSong){
        stopSnippet();
    }
    songSnippet(song)
}


/**
 * 
 * @param{string} id - image id for gallery image
 * @param{Object} event - mouse event given by action from user
 * 
 * function produces songs from the clicked event based on image index
 */
let getSong = (id,event) => {
    event.stopPropagation();
    switch(id){
        case 'fig1':{
            clickedEvent(0,0)
            break;
        }
        case 'fig2':{
            clickedEvent(1,1)
            break;
        }
        case 'fig3':{
            clickedEvent(2,0)
            break;
        }
        case 'fig4':{
            clickedEvent(3,0)
            break;
        }
        case 'fig5':{
            clickedEvent(4,1)
            break;
        }
        case 'fig6':{
            clickedEvent(5,3)
            break;
        }
    }
}

/**
 * @param {string} url - song preview url 
 * function will return a playing audio clip
 * 
 */
let songSnippet = url =>{
    playSong = new Audio(url)
    return playSong.play()
}

/**
 * function sstopps song from playing
 * 
 * 
 */
let stopSnippet = () => playSong.pause();