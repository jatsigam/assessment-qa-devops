const {shuffleArray} = require('./utils')

// https://jestjs.io/docs/expect (Link for Jest Methods)

describe('shuffleArray should', () => {
    let newArr = [3,6,9,12,15]
    test("check that shuffleArray returns an array of the same length as the argument sent in", () => {
        expect(shuffleArray(newArr)).toHaveLength(newArr.length);
    });

    //check that the items have been shuffled around
    test("check that the items have been shuffled around", () => {
        expect(shuffleArray(newArr)).not.toEqual(newArr)
    });
})