function lucro(a,b){

    if (a<=0 || b<=0){
        console.log("valores inadequados")
    }else{

    let valorCusto = a
    let valorVenda = b
    let impostoSobreOCusto = 0.2

    let valorCustoTotal = valorCusto + valorCusto*impostoSobreOCusto
    let lucro = valorVenda -valorCustoTotal
    console.log("seu lucro é " + lucro)
    }


}

lucro(0,2)