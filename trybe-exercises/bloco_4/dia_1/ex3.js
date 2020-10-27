function maiorDeTres(a,b,c){
    
    if(a > b && a > c){
        console.log(a)
    }else if(b>a && b>c){
        console.log(b)
    }else if(c>a && c> b){
        console.log(c)
    }else{
        console.log("numeros iguais")
    }

}
console.log("a=5 ,b = 3 c=8")

maiorDeTres(5,3,8)