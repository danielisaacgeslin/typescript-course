/* object assign */

const object = { a: 1, b: 2 };
const newObject = { ...object };
const mergedObj = { ...object, c: 3 };

/* array concat */
const array = [1, 2, 3, 4];
const newArray = [...array];
const mergedArray: number[] = [...array, 5, 6, 7];

/* async & await */
async function waitForMe() {
    console.log('start');
    await loading();
    console.log('end');
}

function loading() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('i am ready now');
            resolve();
        }, 5000);
    })
}