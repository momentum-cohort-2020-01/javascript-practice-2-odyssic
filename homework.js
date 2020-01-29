// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.

//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

function remove(names, name) {
    while (names.includes(name)) {
        let i = names.indexOf(name);
        names.splice(i, 1);
    }
    return names;
}

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

function remove(names, name) {
    let newarray = names.slice();
    while (newarray.includes(name)) {
        let i = newarray.indexOf(name);
        newarray.splice(i, 1);
    }
    return newarray;
}

//newarray = arr.splice() *for instance

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Let scores = [1,2,3,4,5,]
// Let sum = scores.reduce(function(total, score){return total + score} , 0)

// function sum()
// returns total.sum

// function sum(list) {
//     return total.sum(list);
// }

// int arraySum(int[] array) {
//     int sum = 0;
//     for (int i = 0; i <= array.length; i++) {
//         sum = sum + array[i];
//     }

//     return sum;
// }

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average(numbers) {
    if (numbers.length > 0) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum / numbers.length;
    }
}

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

// function minimum(array) {

// }

//Isn’t that a nice looking line of code, Math.min.apply(null, numbers)?

//It’s pretty to look at and very easy to understand. Math.min(a, b, c[, ...])

function minimum(numbers) {
    if (numbers.length > 0) {
        return Math.min(...numbers);
    }
}

//spread operator

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

function selectionSort(numbers) {
    var sortednumbers = numbers.slice(0);
    for (let i = 0; i < numbers.length; i++) {
        let m = Math.min(...sortednumbers.slice(i));
        sortednumbers.splice(i, 0, m);
        sortednumbers.splice(sortednumbers.slice(i + 1).indexOf(m) + i + 1, 1);
    }
    return sortednumbers;
}
console.log(selectionSort([12, 4, 5, 8, 9, 2]));
[2, 4, 2, 8, 2, 2];

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Mari

function textList(numbers) {
    if (numbers.length == 0) {
        return "";
    }
    return numbers.join();
}

console.log(textList(["test", "frank", "john"]));