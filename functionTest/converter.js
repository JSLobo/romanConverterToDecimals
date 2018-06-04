module.exports={

    toRoman:function(num) {  
        var result = '';
        var decimal = [5000,4000,3000,2000,1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        var roman = ["v","iv","MMM","MM","M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
        if (num<1000 || num>5000) {
            result = 'Debe ingresar un número entre 1000 y 5000.'
        }else{
        for (var i = 0;i<=decimal.length;i++) {
          while (num%decimal[i] < num) {     
            result += roman[i];
            num -= decimal[i];
          }
        }
    }
        return result;
      }
}