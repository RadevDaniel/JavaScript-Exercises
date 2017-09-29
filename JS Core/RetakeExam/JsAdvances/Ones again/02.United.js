class Rat{
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }

    unite(newRat){
        if(newRat instanceof Rat){
            this.unitedRats.push(newRat);
        }
    }
    getRats(){
        return this.unitedRats;
    }
    toString(){
        let result = this.name + '\n';
        let newResult = [];
        for(let rat of this.unitedRats){
            result += `##${rat.name}\n`;
            newResult.push(rat);
        }
        return newResult.sort((a, b) => a['name'] > b['name']);
        //return result.trim();
    }
}
let test = new Rat("Pesho");

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
test.unite(new Rat('BaiVan'));
//console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
