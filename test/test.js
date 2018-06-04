var assert = require('assert');
var converterAPI = require('../functionTest/converter');
var numero = 0;
var app = require('../index.js');

describe('converterTest', function () {
    describe('succesfulTests', function () {
        
        it('1234 return "MCCXXXIV"', function () {
            assert.equal(converterAPI.toRoman(1234), "MCCXXXIV");
        });
        it('123 return "Debe ingresar un número entre 1000 y 5000."', function () {
            assert.equal(converterAPI.toRoman(123), "Debe ingresar un número entre 1000 y 5000.");
        });
        it('12345 return "Debe ingresar un número entre 1000 y 5000."', function () {
            assert.equal(converterAPI.toRoman(12345), "Debe ingresar un número entre 1000 y 5000.");
        });
        it('1000 return "M"', function () {
            assert.equal(converterAPI.toRoman(1000), "M");
        });
        it('999 return "Debe ingresar un número entre 1000 y 5000."', function () {
            assert.equal(converterAPI.toRoman(999), "Debe ingresar un número entre 1000 y 5000.");
        });
        it('5000 return "v"', function () {
            assert.equal(converterAPI.toRoman(5000), "v");
        });
        it('5001 return "Debe ingresar un número entre 1000 y 5000."', function () {
            assert.equal(converterAPI.toRoman(5001), "Debe ingresar un número entre 1000 y 5000.");
        });
        it('4000 return "iv"', function () {
            assert.equal(converterAPI.toRoman(4000), "iv");
        });
        it('2222 return "MMCCXXII"', function () {
            assert.equal(converterAPI.toRoman(2222), "MMCCXXII");
        });
        it('3333 return "MMMCCCXXXIII"', function () {
            assert.equal(converterAPI.toRoman(3333), "MMMCCCXXXIII");
        });

    });
});
