const chai = require('chai')
const calculator = require('../index.js')
const expect = chai.expect
const assert = chai.assert

describe('Plus', function () {
  it('Should add two numbers', function () {
    assert.equal(calculator.add(2, 3), 5)
  })
})

describe('Minus', function () {
  it('Should subtract two numbers', function () {
    assert.equal(calculator.subtract(10, 3), 7)
  })
})

describe('Gange', function () {
  it('Should multiplication two numbers', function () {
    assert.equal(calculator.multiplication(2, 3), 6)
  })
})

describe('Dividere', function () {
  it('Should division two numbers', function () {
    assert.equal(calculator.division(6, 3), 2)
  })
})
