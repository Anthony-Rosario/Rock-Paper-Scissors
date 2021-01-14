import { getRandomThrow, userWin } from '../get-random-throw.js';



const test = QUnit.test;



//Testing Throw random function
test('The function should return whatever the user has selected to play the game', (expect) => {
    
    const actual = getRandomThrow();
    expect.equal(typeof actual, 'string');
});


test('returns win if players throw beats computer throw', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = userWin('rock', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


