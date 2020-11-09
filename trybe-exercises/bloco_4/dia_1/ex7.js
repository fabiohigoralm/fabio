function notas(a){
    

if (a >= 90 && a <= 100){
    console.log("Nota A")
    }
else if(a>=80 && a<90){
    console.log("Nota B")
    }
else if(a>=70 && a<80){
    console.log("Nota C")
    }
else if(a>=60 && a<70){
    console.log("Nota D")
    }
else if(a>=50 && a<60){
    console.log("Nota E")
    }
else if (a<50 && a>=0){
    console.log("Nota F")
        }
else {
    console.log("valor invalido ,digite de 0 A 100")
    }         
}   
notas("-4")