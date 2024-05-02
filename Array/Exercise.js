// 1. Write a JavaScript function to check whether an `input` is an array or not.

function is_array(arr) {
    return typeof (arr) === 'object' && Array.isArray(arr);
};
console.log('1: ', is_array('w3resource'));
console.log('1: ', is_array([1, 2, 4, 0]));
console.log('1: ', is_array({}));

console.log("-------------------------------");

// 2. Write a JavaScript function to clone an array.

function array_Clone(arr) {
    return arr.slice(0);
};
console.log("2: ", array_Clone([1, 2, 4, 0]));
console.log("2: ", array_Clone([1, 2, [4, 0]]));

console.log("-------------------------------");

// 3. Write a JavaScript function to get the first element of an array.
// Passing the parameter 'n' will return the first 'n' elements of the array.

function first(arr, n) {
    if (n == null) {
        return arr.slice(0, 1);
    } else {
        return arr.slice(0, n);
    };
};
console.log('3: ', first([7, 9, 0, -2]));
console.log('3: ', first([], 3));
console.log('3: ', first([7, 9, 0, -2], 3));
console.log('3: ', first([7, 9, 0, -2], 6));
console.log('3: ', first([7, 9, 0, -2], -3));

console.log("-------------------------------");

// 4. Write a JavaScript function to get the last element of an array. 
//Passing the parameter 'n' will return the last 'n' elements of the array.

function last(arr, n) {
    if (n == null) {
        return arr.slice(-1);
    } else {
        return arr.slice(-n);
    };
};
console.log('4: ', last([7, 9, 0, -2]));
console.log('4: ', last([7, 9, 0, -2], 3));
console.log('4: ', last([7, 9, 0, -2], 6));

console.log("-------------------------------");

// 5. Write a simple JavaScript program to join all elements of the following array into a string.

const myColor = ["Red", "Green", "White", "Black"];
function joinArray(arr) {
    return arr.join(' ');
};
console.log('5: ', joinArray(myColor));

console.log("-------------------------------");

// 6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. 

function addingDashes(num) {
    const str = num.toString();
    const result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
            result.push('-');
            result.push(str[i]);
        } else {
            result.push(str[i]);
        }
    }
    return result.join('');
}
console.log('6: ', addingDashes(2436780));

console.log("-------------------------------");

// 7. Write a JavaScript program to sort the items of an array.

const arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
function sortArray(arr) {
    return arr.sort((x, y) => x - y);
};
console.log('7: ', sortArray(arr1));

console.log("-------------------------------");

// 8. Write a JavaScript program to find the most frequent item in an array.

const arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 3];
function mostFrequent(arr) {
    let count = 0;
    let mostFrequent = 1;
    let item;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            };
            if (mostFrequent < count) {
                mostFrequent = count;
                item = arr[i];
            };
        };
        count = 0;
    };
    return item;
};
console.log('8: ', mostFrequent(arr2));

console.log("-------------------------------");

// 9. Write a JavaScript program that accepts a string as input and swaps the case of each character. 
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function swapCase(args) {
    const letters = args.split("");
    let str = [];
    for (let i = 0; i < args.length; i++) {
        if (args[i] === args[i].toUpperCase()) {
            str.push(args[i].toLowerCase());
        } else {
            str.push(args[i].toUpperCase());
        }
    }
    const finalStr = str.join("");
    return finalStr;
}
console.log('9: ', swapCase('The Quick Brown Fox'));

console.log("-------------------------------");

// 10. Write a JavaScript program that prints the elements of the following array.

let arr3 = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7], 3];

function printElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        if (Array.isArray(ele)) {
            console.log(`row ${i}`);
            for (let j = 0; j < ele.length; j++) {
                console.log('10: ', ele[j]);
            };
        } else {
            console.log(`10: row ${i}`);
            console.log('10: ', ele);
        }
    };
};
printElements(arr3);

console.log("-------------------------------");

// 11. Write a JavaScript program to find the sum of squares of a numerical vector.

function sumOfSquareOfElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 2);
    };
    return sum;
};
console.log('11: ', sumOfSquareOfElements(arr1));

console.log("-------------------------------");

// 12. Write a JavaScript program to compute the sum and product of an array of integers.

function sumAndProduct(arr) {
    let sum = 0;
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        product *= arr[i];
    };
    return `12: sum is: ${sum} and product is: ${product}`;
};
console.log(sumAndProduct(arr1));

console.log("-------------------------------");

// 13. Write a JavaScript program to add items to a blank array and display them.

const arr4 = [];
function addingElements() {
    const input = document.getElementById('input');
    const element = input.value;
    arr4.push(element);
    input.value = '';
};

function displayElements() {
    for (let i = 0; i < arr4.length; i++) {
        console.log('13:', `element${i} = ${arr4[i]}`);
    };
};

console.log("-------------------------------");

// 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

const arr6 = ["Blue", "Orange", "Green", "Orange", "Purple", "Black", "Purple", "white", "Black"];

function removeDuplicate(arr) {
    return arr.filter((ele, index) => arr.indexOf(ele) === index);
}
console.log('14: ', removeDuplicate(arr6));

console.log("-------------------------------");

// 15. Write a JavaScript program to display the colors in the following way .

const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
const o = ["th", "st", "nd", "rd"];
function colorPosition(position) {
    switch (position % 10) {
        case 1: return position + o[1];
        case 2: return position + o[2];
        case 3: return position + o[3];
    }
    return position + o[0];
}
function choices(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`15: ${colorPosition(i + 1)} choice is ${arr[i]}`);
    }
}
choices(color);

console.log("-------------------------------");

// 16. Write a JavaScript program to find the leap years in a given range of years.

function leapYears(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 4 === 0) {
            console.log('16: ', i);
        };
    };
};
leapYears(1980, 2024);

console.log("-------------------------------");

// 17. Write a JavaScript program to shuffle an array.

const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function shuffle(arr) {
    let length = arr.length;
    let index;
    let temp;
    while (length > 0) {
        index = Math.floor(Math.random() * length);
        length--;
        temp = arr[length];
        arr[length] = arr[index];
        arr[index] = temp;
    }
    return arr;
}
console.log('17:', shuffle(myArray));

console.log("-------------------------------");

// 19. There are two arrays with individual values. 
// Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// Expected Output :
// [4, 5, 8, 10, 12]

const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8];
function sumOfArrays(arr1, arr2) {
    const arrayOfSum = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (i === j) {
                const sum = arr1[i] + arr2[j];
                arrayOfSum.push(sum);
            }

        }
    }
    return arrayOfSum;
}
console.log('19: ', sumOfArrays(array1, array2));

console.log("-------------------------------");

// 20. Write a JavaScript program to find duplicate values in a JavaScript array.

const arr8 = ["Blue", "Orange", "Green", "Orange", "Purple", "Black", "Purple", "white", "Black"];

function findDuplicate(arr) {
    return arr.filter((ele, index) => arr.indexOf(ele) !== index);
}
console.log('20: ', findDuplicate(arr8));

console.log("-------------------------------");

// 21. Write a JavaScript program to flatten a nested (any depth) array.
//  If you pass shallow, the array will only be flattened to a single level.

function flatten(arr, shallow, isArray) {
    if (!isArray) {
        isArray = [];
    };
    if (shallow) {
        return isArray.concat.apply(isArray, arr);
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].constructor == Array) {
            flatten(arr[i], shallow, isArray);
        } else {
            isArray.push(arr[i]);
        }
    }
    return isArray;
}

console.log('21: ', flatten([1, [2], [3, [[4]]], [5, 6]]));
console.log('21: ', flatten([1, [2], [3, [[4]]], [5, 6]], true));

console.log("-------------------------------");

// 22. Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// [1, 2, 3, 10, 100]

function union(arr1, arr2) {
    const result = [];
    result.push(...arr1);
    result.push(...arr2);
    return result.sort((x, y) => x - y);
}
console.log('22: ', union([1, 2, 3], [100, 2, 1, 10]));

console.log("-------------------------------");

// 23. Write a JavaScript function to find the difference between two arrays.

function differenceOf2Arrays(arr1, arr2) {
    let temp = [];
    arr1 = arr1.toString().split(',').map(Number);
    arr2 = arr2.toString().split(',').map(Number);

    for (let i in arr1) {
        if (arr2.indexOf(arr1[i]) === -1) temp.push(arr1[i]);
    }
    for (let i in array2) {
        if (arr1.indexOf(arr2[i]) === -1) temp.push(arr2[i]);
    }
    return temp.sort((a, b) => a - b);
}

console.log('23: ', differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
console.log('23: ', differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5]]));

console.log("-------------------------------");

// 24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Expected result : [15, -22, 47]

const array = [NaN, 0, 15, 23, false, -22, '', undefined, 47, null];
function removeElements(arr) {
    const arr1 = arr.filter((ele, index, array) => (!isNaN(ele) && ele !== false && ele !== '' && ele !== null && ele !== undefined));
    return arr1;
}
console.log('24: ', removeElements(array));

console.log("-------------------------------");

// 25. Write a JavaScript function to sort the following array of objects by title value.

const library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];
function sortingObjectsByTitle(arr) {
    const arr1 = arr.sort((ele1, ele2, index, array) => ele1.title.localeCompare(ele2.title));
    return arr1;
}
console.log('25: ', sortingObjectsByTitle(library));

console.log("-------------------------------");

// 26. Write a JavaScript program to find a pair of elements (indices of the two numbers) 
// in a given array whose sum equals a specific target number.

function twoSum(nums, target_num) {
    let map = [];
    let indexnum = [];
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] != null) {
            let index = map[nums[i]];
            indexnum[0] = index;
            indexnum[1] = i;
            break;
        }
        else {
            map[target_num - nums[i]] = i;
        }
    }
    return indexnum;
}

console.log('26: ', twoSum([10, 20, 10, 40, 50, 60, 70], 50));

console.log("-------------------------------");

// 27. Write a JavaScript function to retrieve the value of a given property from all elements in an array.

function retrieveProperty(arr) {
    const arr1 = arr.filter((ele, index, array) => (!isNaN(ele) && ele !== false && ele !== '' && ele !== null && ele !== undefined));
    return arr1;
}
console.log('27: ', retrieveProperty(array));

console.log("-------------------------------");

// 28. Write a JavaScript function to find the longest common starting substring in a set of strings.

function longest_common_starting_substring(arr1) {
    let arr = arr1.concat().sort();
    let a1 = arr[0];
    let a2 = arr[arr.length - 1];
    let length = a1.length;
    let i = 0;
    while (i < length && a1.charAt(i) === a2.charAt(i)) {
        i++;
    }
    return a1.substring(0, i);
}

console.log(longest_common_starting_substring(['28: ', 'go', 'google']));
console.log(longest_common_starting_substring(['28: ', 'SQLInjection', 'SQLTutorial']));

console.log("-------------------------------");

// 29. Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.

function num_string_range(start, end, step) {
    let range = [];
    if ((step === 0) || (typeof (start) === "undefined" || typeof (end) === "undefined") || (typeof (start) !== typeof (end))) {
        return false;
    }
    if (end < start) {
        step = -step;
    }
    if (typeof (start) === "number") {

        while (step > 0 ? end >= start : end <= start) {
            range.push(start);
            start += step;
        }
    }
    else if (typeof (start) == "string") {
        if (start.length != 1 || end.length != 1) {
            throw TypeError("Strings with one character are supported.");
        }
        start = start.charCodeAt(0);
        end = end.charCodeAt(0);
        while (step > 0 ? end >= start : end <= start) {
            range.push(String.fromCharCode(start));
            start += step;
        }
    }
    else {
        throw TypeError("Only string and number are supported");
    }
    return range;
}

console.log('29: ',num_string_range('a', "z", 2));
console.log('29: ',num_string_range("Z", "A", 2));
console.log('29: ',num_string_range(0, -5, 1));
console.log('29: ',num_string_range(0, 25, 5));
console.log('29: ',num_string_range(20, 5, 5));

console.log("-------------------------------");

// 30. Write a JavaScript function that merges two arrays and removes all duplicate elements.

function merge_array(arr1, arr2) {
    let result = [];
    let arr = arr1.concat(arr2);
    let length = arr.length;
    let assoc = {};

    while(length--) {
        let item = arr[length];

        if(!assoc[item]) 
        { 
            result.unshift(item);
            assoc[item] = true;
        }
    }

    return result;
}

console.log('30: ',(merge_array([1, 2, 3], [2, 30, 1])));

console.log("-------------------------------");


// 31. Write a JavaScript function to remove a specific element from an array.

function remove_array_element(arr, ele) {
    const arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== ele) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
console.log('31: ', remove_array_element([2, 5, 9, 6], 2));

console.log("-------------------------------");

// 32. Write a JavaScript function to find an array containing a specific element.

function contains(arr, ele) {
    return arr.includes(ele) ? true : false;
}
console.log('the array: ', arr1, 'element: 0');
console.log('32: ', contains(arr1, 0));

console.log("-------------------------------");

// 33. Write a JavaScript to empty an array while keeping the original.

const arr7 = [1, 2, 3, 4, 5]
arr7.length = 0;
console.log('31: ', arr7);

console.log("-------------------------------");

// 34. Write a JavaScript function to get the nth largest element from an unsorted array.

function nthlargest(arr, index) {
    arr.sort((x, y) => x - y);
    return arr.at(index);
}
console.log('34: ', nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 5));

console.log("-------------------------------");

// 35. Write a JavaScript function to get random items from an array.

const items = [254, 45, 212, 365, 2543];
function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
};
console.log('35: ', random_item(items));

console.log("-------------------------------");

// 36. Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array.

function array_filled(num1, num2) {
    const arr1 = [];
    for (let i = 1; i <= num1; i++) {
        arr1.push(num2);
    }
    return arr1;
}
console.log('36: ', array_filled(6, 0));
console.log('36: ', array_filled(4, 11));

console.log("-------------------------------");

// 37. Write a JavaScript function to create a specified number of elements with a pre-filled string value array.

function array_filled_str(num, str) {
    const arr1 = [];
    for (let i = 1; i <= num; i++) {
        arr1.push(str);
    }
    return arr1;
}
console.log('37: ', array_filled_str(3, 'default value'));
console.log('37: ', array_filled_str(4, 'password'));

console.log("-------------------------------");

// 39. Write a JavaScript function to filter false, null, 0 and blank values from an array.

function isEligible(value) {
    if (value !== false || value !== null || value !== 0 || value !== "") {
        return value;
    }
}
function filter_array_values(arr) {
    arr = arr.filter(isEligible);
    return arr;
}

console.log('39: ', filter_array_values([58, '', 'abcd', true, null, false, 0]));

console.log("-------------------------------");

// 40. Write a JavaScript function to generate an array of integer numbers, 
// increasing one from the starting position, of a specified length.

function range(start, len) {
    const arr = new Array(len);
    for (let i = 0; i < len; i++, start++) {
        arr[i] = start;
    }
    return arr;
}
console.log('40: ', range(1, 4));
console.log('40: ', range(-6, 4));

console.log("-------------------------------");

// 44. Write a JavaScript function to create an object from an array, 
// using the specified key and excluding it from each value.

const indexOn = (arr, key) => arr.reduce((obj, value) => {
    const { [key]: id, ...data } = value;
    obj[id] = data;
    return obj;
}, {});
console.log('44: ', indexOn([
    { id: 10, name: 'apple' },
    { id: 20, name: 'orange' }
], x => x.id))

console.log("-------------------------------");

// 45. Write a JavaScript program to find all the unique values in a set of numbers.

const unique_Values = arr => [...new Set(arr)];

console.log('45: ', unique_Values([1, 2, 2, 3, 4, 4, 5]));
console.log('45: ', unique_Values([1, 2, 3, 4, 5]));
console.log('45: ', unique_Values([1, -2, -2, 3, 4, -5, -6, -5]));

console.log("-------------------------------");

// 47. Write a JavaScript program to remove all false values from an object or array.

const obj = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
    h: [null, false, '', true, 1, 'a'],
    i: { j: 0, k: false, l: 'a' }
};
// output: {"c":true,"e":1,"g":"a","h":[true,1,"a"],"i":{"l":"a"}}
function remove_false_values(obj) {
    const data = Array.isArray(obj) ? obj.filter(Boolean) : obj;
    return Object.keys(data).reduce(
        (acc, key) => {
            const value = data[key];
            if (Boolean(value))
                acc[key] = typeof value === 'object' ? data[value] : value;
            return acc;
        },
        Array.isArray(obj) ? [] : {}
    );
};
console.log(remove_false_values(obj))

console.log("-------------------------------");

// 48. Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.

const arr9 = [2, 3, 5, 7];
const arr10 = [2, 3, 5, 7, 8];
function prime(nums) {
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] > 2 && nums[i] % 2 === 0);
        return false;
    }
    return true;
};

console.log('48: ', arr9);
console.log('48: ', "In the said array check every numbers are prime or not!: " + prime(arr9));
console.log('48: ', arr10);
console.log('48: ', "In the said array check every numbers are prime or not!: " + prime(arr10));

console.log("-------------------------------");

// 49. Write a JavaScript program that takes an array of numbers and returns the third smallest number.

const arr11 = [2, 3, 5, 7, 1];
const arr12 = [2, 3, 0, 5, 7, 8, -2, -4];
function smallest_num(arr) {
    return arr.sort((x, y) => y - x)[arr.length - 3];
};
console.log('49: ', arr11)
console.log('49: ', "Third smallest number of the said array of numbers: " + smallest_num(arr11));
console.log('49: ', arr12)
console.log('49: ', "Third smallest number of the said array of numbers: " + smallest_num(arr12));

console.log("-------------------------------");

// 50. Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

const arr13 = [2, "11", 3, "a2", false, 5, 7, 1];
const arr14 = [2, 3, 0, 5, 7, 8, true, false];
function calculates(arr) {
    let total = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (typeof arr[i] === "number") {
            total += arr[i];
        }
    }
    return total;
}
console.log('50: ', arr13);
console.log('50: ', "Sum of array: " + calculates(arr13));
console.log('50: ', arr14);
console.log('50: ', "Sum of array: " + calculates(arr14));

console.log("-------------------------------");

// 51. Write a JavaScript program to check if an array is a factor chain or not.

const nums1 = [2, 4, 8, 16, 32];
const nums2 = [2, 4, 16, 32, 64];
function factor(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] % nums[i] === 0) {
            return true;
        }
    }
    return false;
};
console.log('51: ', nums1);
console.log('51: is it a factor chain?', factor(nums1));
console.log('51: ', nums2);
console.log('51: is it a factor chain?', factor(nums2));

console.log("-------------------------------");

// 52. Write a JavaScript program to get all the indexes where NaN is found in a 
// given array of numbers and NaN.

function getIndex(arr) {
    return arr.map(function (ele, index, array) {
        if (isNaN(ele))
            return index;
        return false;
    }).filter(function (ele) {
        return ele;
    });
}
const arr15 = [2, NaN, 8, 16, 32, NaN, 3, 4, NaN, 7]
console.log('52: ', arr15)
console.log('52: ', "Find all indexes of NaN of the array: " + getIndex(arr15));


console.log("-------------------------------");

// 53. Write a JavaScript program to count the number of arrays inside a given array.

const arr16 = [2, 8, [6], 3, 3, 5, 3, 4, [5, 4]];
const arr17 = [2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]];
function test(arr) {
    return arr.filter(arr => Array.isArray(arr)).length;
}
console.log('53: ', "Number of arrays inside the array: " + test(arr16));
console.log('53: ', "Number of arrays inside the array: " + test(arr17));