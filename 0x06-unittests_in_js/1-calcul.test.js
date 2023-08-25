const assert = require('assert');
const sumOfNumber = require('./1-calcul');

describe("Tests advanced sumOfNumber function:", function(){
    describe("Tests SUM function:", function(){
        it("Returns 6.", function(){
            assert.strictEqual(sumOfNumber('SUM', 1.4, 4.5), 6)
        })
    })
    describe("Tests SUBTRACT function:", function(){
        it("Returns -4.", function(){
            assert.strictEqual(sumOfNumber('SUBTRACT', 1.4, 4.5), -4)
        })
    })
    describe("Tests DIVIDE function:", function(){
        it("Returns 0.2.", function(){
            assert.strictEqual(sumOfNumber('DIVIDE', 1.4, 4.5), 0.2)
        })
    })
    describe("Tests DIVIDE function W 0:", function(){
        it("Returns 'Error'.", function(){
            assert.strictEqual(sumOfNumber('DIVIDE', 1.4, 0), 'Error')
        })
    })
})
