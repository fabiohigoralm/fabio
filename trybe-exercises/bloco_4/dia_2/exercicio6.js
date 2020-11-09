 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] 

/*let numbers=[]*/

let numeroImpar = []

for(let index = 0 ; index<numbers.length ; index ++){
    if(numbers[index]%2 !=0 ){
        numeroImpar.push(numbers[index]) 
    }  
}
    
if(numeroImpar == 0){
    console.log("nenhum numero impar ")
}else{

    console.log(numeroImpar)
}

