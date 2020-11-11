let RICK_URL = 'https://rickandmortyapi.com/api/character/1';

console.group('Sync function');
function download() {
    console.log('2');
    fetch(RICK_URL);
    console.log('3');
    return;
}
console.log('1');
download();
console.log('4');
console.groupEnd('Sync function');


console.group('Async function');
async function download2() {
    console.log('2');
    await fetch(RICK_URL);
    console.log('3');
    console.groupEnd('Async function');
    return;
}
console.log('1');
download2();
console.log('4');


