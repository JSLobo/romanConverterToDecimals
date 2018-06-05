var assert = require('assert');
var converterAPI = require('../functionTest/converter');
var numero = 0;
var app = require('../index.js');

describe('converterTest', function () {
    describe('succesfulTests', function () {
        
        it('"MCCXXXIV" return 1234', function () {
            assert.equal(converterAPI.romanToDecimals("MCCXXXIV"), 1234);
        });
        it('"CXXIII" return "Debe ingresar un número entre 1000 y 5000."', function () {
            assert.equal(converterAPI.romanToDecimals("CXXIII"), "Debe ingresar un número entre 1000 y 5000.");
        });
        it('vD return "Debe ingresar un número entre 1000 y 5000."', function () {
            assert.equal(converterAPI.romanToDecimals("vD"), "Debe ingresar un número entre 1000 y 5000.");
        });
        it('"M" return 1000', function () {
            assert.equal(converterAPI.romanToDecimals("M"), 1000);
        });
        it('"CMXCIX" return "Debe ingresar un número entre 1000 y 5000."', function () {
            assert.equal(converterAPI.romanToDecimals("CMXCIX"), "Debe ingresar un número entre 1000 y 5000.");
        });
        it('"v return 5000', function () {
            assert.equal(converterAPI.romanToDecimals("v"), 5000);
        });
        it('"vI" return "Debe ingresar un número entre 1000 y 5000."', function () {
            assert.equal(converterAPI.romanToDecimals("vI"), "Debe ingresar un número entre 1000 y 5000.");
        });
        it('"MMMM" return 4000', function () {
            assert.equal(converterAPI.romanToDecimals("MMMM"), 4000);
        });
        it('"MMCCXXII" return 2222', function () {
            assert.equal(converterAPI.romanToDecimals("MMCCXXII"), 2222);
        });
        it('"MMMCCCXXXIII" return 3333', function () {
            assert.equal(converterAPI.romanToDecimals("MMMCCCXXXIII"), 3333);
        });
    });
});