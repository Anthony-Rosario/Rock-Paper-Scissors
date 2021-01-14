import { getRandomThrow } from '../get-random-throw.js';



const test = QUnit.test;



//Testing Throw random function
test('The function should return whatever the user has selected to play the game', (expect) => {
    
    const actual = getRandomThrow();
    expect.equal(typeof actual, 'string');
});


