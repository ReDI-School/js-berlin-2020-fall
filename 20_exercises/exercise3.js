let RICK_URL = 'https://rickandmortyapi.com/api/character/1';

async function downloadRickData() {
    let response = await fetch(RICK_URL);
    console.table([await response.text()]);
}
