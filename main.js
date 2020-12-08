// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
};

const pAequorFactory = (num, array) => {
    return {
        specimenNum: num,
        dna: array,
        mutate() {
            const arr = this.dna;
            //console.log(arr);
            const dnaBases = ['A', 'T', 'C', 'G'];
            let r = Math.floor(Math.random() * 15);
            let i = dnaBases.indexOf(arr[r]);
            dnaBases.splice(i, 1);
            arr.splice(r, 1, dnaBases[Math.floor(Math.random() * 3)]);
            return arr;
        },
        compare(pAequor) {
            let counter = 0;
            for (let i = 0; i < 15; i++) {
                if (this.dna[i] === pAequor.dna[i]) {
                    counter += 1;
                }
            }
            //console.log(pAequor.dna);
            //console.log(this.dna);
            return `The spicemen 1 and the spicemen 2 have  ${Math.floor(counter / 15 * 100)} % DNA in common.`;
        },
        willLikelySurvive() {
            let counterC = 0,
                counterG = 0;
            for (let i = 0; i < this.dna.length; i++) {
                if (this.dna[i] === 'C') {
                    counterC += 1;
                } else if (this.dna === 'G') {
                    counterG += 1;
                }
            }
            //console.log(this.dna);
            if (counterC >= 9 || counterG >= 9) {
                return true;
            } else {
                return false;
            }
        },
    }
};
const instanceSurvivalAe = (num) => {
    let myArray = [];
    //const x = pAequorFactory(1, mockUpStrand()).willLikelySurvive();
    while (myArray.length !== num) {
        let x = mockUpStrand();
        pAequorFactory(1, x).willLikelySurvive();
        if (pAequorFactory(1, x).willLikelySurvive() === true) {
            myArray.push(x);
        }
    }
    return myArray;
    //return x;
}
console.log(instanceSurvivalAe(30));
  //console.log(pAequorFactory(1, mockUpStrand()).willLikelySurvive());
  //console.log(pAequorFactory(1, mockUpStrand()).compare({specimenNum : 2, dna : mockUpStrand()}));






