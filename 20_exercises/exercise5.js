let RICK_URL = 'https://rickandmortyapi.com/api/character/1';

async function downloadRickData() {
    let response = await fetch(RICK_URL);
    let rick = await response.json();
    console.table([rick]);
    return rick;
}

async function showRick() {
    let rick = await downloadRickData();
    let { id, name, status, species, location, image, episode } = rick;

    let insertionPoint = document.body;

    let charImg = document.createElement('img');
    charImg.src = image;
    insertionPoint.appendChild(charImg);

    let charName = document.createElement('h2');
    charName.textContent = name;
    insertionPoint.appendChild(charName);

    let statusSpecies = document.createElement('span');
    statusSpecies.textContent = status + ' - ' + species;
    insertionPoint.appendChild(statusSpecies);

    let charLastKnownLoc = document.createElement('div');
    charLastKnownLoc.textContent = 'Last known location: ' + location.name;
    insertionPoint.appendChild(charLastKnownLoc);


    let firstEpisodeURL = episode[0];
    let firstEpisodeData = await downloadEpisodeData(firstEpisodeURL);
    let firstEpisodeName = firstEpisodeData.name;

    let charFirstSeenIn = document.createElement('div');
    charFirstSeenIn.textContent = 'First seen in: ' + firstEpisodeName;
    insertionPoint.appendChild(charFirstSeenIn);
}

async function downloadEpisodeData(url) {
    let response = await fetch(url);
    let episode = await response.json();
    console.table([episode]);
    return episode;
}
