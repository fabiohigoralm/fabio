function pecaMovXadrez(a){
   let peca = a
   peca= peca.toLowerCase()
   peca = peca.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    

    switch (peca) {
        case 'rei':
            console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez,");
            break;
        case 'rainha':
            console.log("Pode mover-se em qualquer direção, quantas casas quiser");
            break;
        case 'torre':
            console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
            break;
        case 'bispo':
            console.log("Move-se na diagonal, quantas casas quiser.");
            break;
        case 'cavalo':
            console.log("O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”");
            break;
        case 'peao':
            console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.");
            break;
        case 'dama':
            console.log("Pode mover-se em qualquer direção, quantas casas quiser");     
            break; 
        default:
            console.log("digite uma das opções: rei / rainha ou sMW / bispo / torre / peão ")
    }
}
pecaMovXadrez("RaÌ")