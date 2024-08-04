class Numbers {
    constructor(...number) {
        this.arr = number;
    }

    addNumbers(number) {
        this.arr.push(number);
    }
///////FUNCTION OF ASSIGNMENT 1
    equalizeNumber() {
        let equalize 

        for (let i = 1; i < this.arr.length; i++) {
            let leftSumation = 0;
            let rightSumation = 0;

            for (let j = 0; j < i; j++) {
                leftSumation += this.arr[j];
            }

            for (let k = i + 1; k < this.arr.length; k++) {
                rightSumation += this.arr[k];
            }

            if (leftSumation == rightSumation) {
                equalize = this.arr[i];
                break;
            }
            console.log(`Index: ${i}, Left Summation: ${leftSumation}, Right Summation: ${rightSumation}`);
        }
        console.log(`Equalize Number: ${equalize}`)
      
        return equalize;
    }

}

let arr1 = new Numbers(1, 2, 3, 0,4,2, 10);
let arr2 = new Numbers(1,12,1, 2,5, 3, 0, 5);
console.log(arr1.equalizeNumber());
console.log(arr2.equalizeNumber());


///////FUNCTION OF ASSIGNMENT 2
function getRepeatedElements(arr) {
    if (!arr.length) {
        return [];
    }

    let repeated = [];
    let current = arr[0];
    let count = 1;

    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] === current) {
            count += 1;
        } else {
            if (count >= 3) {
                const times = (count / 3.0);
                for (let j = 0; j < times; j++) {
                    repeated.push(current.repeat(3));
                }
            }
            current = arr[i];
            count = 1;
        }
    }



    return repeated;
}

const inputArray = ['D', 'D', 'D', '8', '6', '9', 'J', '0', 'H', 'H', 'H', 'S', 'Y', 'Y', 'Y', 'Y'];
const result = getRepeatedElements(inputArray);
console.log(result);  // Output: [ 'DDD', 'HHH', 'YYY', 'YYY' ]


