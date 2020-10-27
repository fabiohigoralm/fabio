function salarioLiquido(a){
    let salarioBruto = a
    
        if(salarioBruto <= 1556.94){
            let aliquotaINSS =0.08
            let base = salarioBruto -(salarioBruto * aliquotaINSS) 
            console.log("salario Liquido "+base)
        }


        else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
            let aliquotaINSS = 0.09
            let base = salarioBruto -(salarioBruto * aliquotaINSS)
            
            if (base<= 1903.98){
                console.log("salario Liquido "+base)
            }
            else if(base >= 1903.99 && base <= 2826.65){
                let aliquotaIR = 0.075
                let valorIr = 142.80
                let calculo =(aliquotaIR*base)-valorIr
                let liquido = base - calculo
                console.log("salario Liquido "+liquido)
            }
        }







        else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
            let aliquotaINSS = 0.11
            let base = salarioBruto -(salarioBruto * aliquotaINSS)
               
                if(base >= 1903.99 && base <= 2826.65){
                    let aliquotaIR = 0.075
                    let valorIr = 142.80
                    let calculo =(aliquotaIR*base)-valorIr
                    let liquido = base - calculo
                    console.log("salario Liquido "+liquido)
                }
                else if(base >= 2826.66 && base <= 3751.05){
                    let aliquotaIR = 0.15
                    let valorIr = 354.80
                    let calculo =(aliquotaIR*base)-valorIr
                    let liquido = base - calculo
                    console.log("salario Liquido "+liquido)
                }
                else if(base >= 3751.06 && base <= 4664.68){
                    let aliquotaIR = 0.225
                    let valorIr = 636.13
                    let calculo =(aliquotaIR*base)-valorIr
                    let liquido = base - calculo
                    console.log("salario Liquido "+liquido)
                }
                else if(base > 4664.68 ){
                    let aliquotaIR = 0.275
                    let valorIr = 869.36
                    let calculo =(aliquotaIR*base)-valorIr
                    let liquido = base - calculo
                    console.log("salario Liquido "+liquido)
             }
        }

    


        else if(salarioBruto >= 5189.82){     
            let base = salarioBruto - 570.88
             if(base >= 3751.06 && base <= 4664.68){
                let aliquotaIR = 0.225
                let valorIr = 636.13
                let calculo =(aliquotaIR*base)-valorIr
                let liquido = base - calculo
                console.log(liquido)
            }
            else if(base > 4664.68 ){
                let aliquotaIR = 0.275
                let valorIr = 869.36
                let calculo =(aliquotaIR*base)-valorIr
                let liquido = base - calculo
                console.log(liquido)
            }
        }
}   
salarioLiquido(3000)