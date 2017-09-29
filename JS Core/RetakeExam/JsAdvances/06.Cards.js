let defineCards = (function(){

    let Suits = {
	    SPADES: '♠',
	    HEARTS: '♥',
	    DIAMONDS: '♦',
	    CLUBS: '♣'
    };

    let Faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card{
        constructor(face, suit){
            this.suit = suit;
            this.face = face;
        }
        get face(){
            return this._face;
        }
        set face(face){
            if(!Faces.includes(face)){
                throw new Error('Invalid face');
            }else{
               this._face = face;
            }
        }

        get suit(){
            return this._suit;
        }
        set suit(suit){
            if(!Object.keys(Suits).map(k => Suits[k]).includes(suit)){
                throw new Error ('Invalid suit');
            }else{
                this._suit = suit;
            }
        }

        toString(){
            return `${this._face}${this._suit}`
        }
    }

    return {
        Suits:Suits,
        Card:Card
    }
}());
let Suits = defineCards.Suits;
let Card = defineCards.Card;

let card = new Card('5', Suits.SPADES);
console.log(card.toString());