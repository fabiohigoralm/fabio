let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
//console.log(Math.max.apply(null, numbers))
let menorNumero=1000
for(let index = 0 ; index<numbers.length ; index ++){

    if(numbers[index]<menorNumero){
        menorNumero=numbers[index]
    }

}
console.log(menorNumero)