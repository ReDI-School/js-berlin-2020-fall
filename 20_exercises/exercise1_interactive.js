console.group('Sync function');

function download() {
    // console.log('2');
    let result = fetch('https://rickandmortyapi.com/api/character/1');
    console.log({ result });

    // console.log('3');
    return;
}

// console.log('1');

download();
// console.log({ result });


// console.log('4');
console.groupEnd('Sync function');


//================================================

console.group('Async function');

async function studentsFunction() {
    return await 10;
}

async function download2() {
    // console.log('2');


    let result = await fetch('https://rickandmortyapi.com/api/character/1');
    // let result = await studentsFunction();

    console.log({ result });
    // console.log(result);


    // console.log('3');
    console.groupEnd('Async function');
    return;
}

async function download22() {
    // console.log('2');

    let result = await fetch('https://rickandmortyapi.com/api/character/1');
    // let result = await sitorasFunction();

    console.log({ result });
    // console.log(result);


    // console.log('3');
    console.groupEnd('Async function');
    return;
}
// console.log('1');



download2();
download22()




// console.log('4');


