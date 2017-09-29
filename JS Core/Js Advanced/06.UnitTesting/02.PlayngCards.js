function cards(face, suit){
    const cardFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const cardSuit = ['S', 'H', 'D', 'C'];
    let strSuit = null;
    if(!cardSuit.includes(suit.toString())){
        throw new Error("Invalid card suit " + suit);
    }
    if(!cardFace.includes(face.toString())){
        throw new Error("Invalid card suit " + face);
    }
    switch (suit){
        case 'S':
            strSuit = '\u2660';
            break;
        case 'H':
            strSuit = '\u2665';
            break;
        case 'D':
            strSuit = '\u2666';
            break;
        case 'C':
            strSuit = '\u2663';
            break;

    }

    let result =  face.toString() + strSuit.toString() ;
    console.log(result);
}

cards('J', 'D');

