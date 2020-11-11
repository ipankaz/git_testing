const mocha = require('mocha')
const chai = require('chai')
const fareutils = require('../public_static/fairutil')

const expect = chai.expect

describe('fareutils',()=>{
    it('expected fare to be 50 for 0 km',()=>{
        let fare = fareutils.calcfare(0,0)
        expect(fare).to.equal(50)
    })
    it('expected fare to be 100 for 10 km',()=>{
        let fare = fareutils.calcfare(10,0)
        expect(fare).to.equal(100)
    })
})

// npm run test = for unit test only . We need mocha for this
// unit test means testing one by one functions
// package.json ==> "test": "mocha"

// npm test cover = for coverage testing . we need nyc and nyc needs mocha 
// coverage testing means testin all parts of described functions at once 
// package.json ==>  "cover": "nyc --reporter=html --reporter=text --reporter=lcovonly mocha"