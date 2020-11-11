let RICK_URL = 'https://rickandmortyapi.com/api/character/1';

async function downloadConvertRickData() {
    let response = await fetch(RICK_URL);
    let rick = await response.json();
    console.table([rick]);
    // return rick;
}
