let RICK_URL = 'https://rickandmortyapi.com/api/character/1';

async function downloadRickData() {
    let response = await fetch(RICK_URL);
    console.log(response);
    console.log(response.headers.get('Content-Type'));
    console.log(response.headers.get('Date'));

    console.log(response.status);
    console.log(response.statusText);
    console.log(response.type);
    console.log(response.url);
}
