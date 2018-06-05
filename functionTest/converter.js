module.exports={

    romanToDecimals:function(str) {
        if(str == null) return -1;
        var result = this.charToInt(str.charAt(0));
        var pre, curr;
        
        for(var i = 1; i < str.length; i++){
            curr = this.charToInt(str.charAt(i));
            pre = this.charToInt(str.charAt(i-1));
            if(curr <= pre){
                result += curr;
            } else {
                result = result - pre*2 + curr;
            }
        }
        if (result<1000 || result>5000) {
            result = 'Debe ingresar un número entre 1000 y 5000.'
        }
        return result;
    },
        
    charToInt:function(c){
        switch (c){
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            case 'v': return 5000;
            default: return -1;
        }
    }
}