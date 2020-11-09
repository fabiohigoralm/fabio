let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
//console.log(Math.max.apply(null, numbers))

let maiorNumero = 0
for(let index = 0 ; index<numbers.length ; index ++){

    if(numbers[index]>maiorNumero){
        maiorNumero=numbers[index] 
    }  
}
console.log(maiorNumero)