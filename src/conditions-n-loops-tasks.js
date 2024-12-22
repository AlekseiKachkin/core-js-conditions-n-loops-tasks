/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let result = a > b ? a : b;
  result = result > c ? result : c;
  return result;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    king.x === queen.x ||
    king.y === queen.y ||
    king.x - king.y === queen.x - queen.y ||
    8 - king.x - king.y === 8 - queen.x - queen.y
  ) {
    return true;
  }
  return false;
}
/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  return (a === b || b === c || c === a) && c < a + b && b < c + a && a < b + c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let rest = num;
  let romaNum = '';
  while (rest > 0) {
    switch (true) {
      case rest - 10 >= 0:
        rest -= 10;
        romaNum = `${romaNum}X`;
        break;
      case rest === 9:
        rest -= 9;
        romaNum = `${romaNum}IX`;
        break;
      case rest === 8:
        rest -= 8;
        romaNum = `${romaNum}VIII`;
        break;
      case rest === 7:
        rest -= 7;
        romaNum = `${romaNum}VII`;
        break;
      case rest === 6:
        rest -= 6;
        romaNum = `${romaNum}VI`;
        break;
      case rest === 5:
        rest -= 5;
        romaNum = `${romaNum}V`;
        break;
      case rest === 4:
        rest -= 4;
        romaNum = `${romaNum}IV`;
        break;
      case rest === 3:
        rest -= 3;
        romaNum = `${romaNum}III`;
        break;
      case rest === 2:
        rest -= 2;
        romaNum = `${romaNum}II`;
        break;
      case rest === 1:
        rest -= 1;
        romaNum = `${romaNum}I`;
        break;
      default:
        break;
    }
  }
  return romaNum;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  let answer = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        result = `${result}minus `;
        break;
      case '0':
        result = `${result}zero `;
        break;
      case '1':
        result = `${result}one `;
        break;
      case '2':
        result = `${result}two `;
        break;
      case '3':
        result = `${result}three `;
        break;
      case '4':
        result = `${result}four `;
        break;
      case '5':
        result = `${result}five `;
        break;
      case '6':
        result = `${result}six `;
        break;
      case '7':
        result = `${result}seven `;
        break;
      case '8':
        result = `${result}eight `;
        break;
      case '9':
        result = `${result}nine `;
        break;
      case '.':
        result = `${result}point `;
        break;
      case ',':
        result = `${result}point `;
        break;
      default:
        break;
    }
  }
  for (let i = 0; i < result.length - 1; i += 1) {
    answer = `${answer}${result[i]}`;
  }
  return answer;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const { length } = str;
  for (let i = 0; i < length / 2; i += 1) {
    if (str[i] !== str[length - 1 - i]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = `${num}`;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === `${digit}`) return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  function getSumBetween(arrSlice, start, end) {
    let result = 0;
    for (let i = start; i <= end; i += 1) {
      result += arrSlice[i];
    }
    return result;
  }
  const startIndex = 0;
  const endIndex = arr.length - 1;
  let balancedIndex = 1;
  let startSum = getSumBetween(arr, startIndex, balancedIndex - 1);
  let endSum = getSumBetween(arr, balancedIndex + 1, endIndex);
  while (balancedIndex < endIndex) {
    if (startSum === endSum) return balancedIndex;
    balancedIndex += 1;
    startSum = getSumBetween(arr, startIndex, balancedIndex - 1);
    endSum = getSumBetween(arr, balancedIndex + 1, endIndex);
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const countElements = size * size;
  let currentElement = 1;
  let elementsPerLine = size;
  let currentLine = 0;
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = 0;
    }
  }
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let currentRow = 0;
  let currentCol = 0;
  let currentDirection = directions[currentLine % 4];
  while (currentElement <= countElements) {
    if (
      currentDirection === directions[1] ||
      currentDirection === directions[3]
    ) {
      elementsPerLine -= 1;
    }
    for (let j = 0; j < elementsPerLine; j += 1) {
      matrix[currentRow][currentCol] = currentElement;
      currentElement += 1;
      currentRow += currentDirection[0];
      currentCol += currentDirection[1];
    }
    currentRow -= currentDirection[0];
    currentCol -= currentDirection[1];
    currentLine += 1;
    currentDirection = directions[currentLine % 4];
    currentRow += currentDirection[0];
    currentCol += currentDirection[1];
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const result = [];
  const source = matrix;
  for (let i = 0; i < matrix[0].length; i += 1) {
    result[i] = [];
    for (let j = 0; j < matrix.length; j += 1) {
      result[i][j] = 0;
    }
  }
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      result[j][i] = matrix[matrix.length - i - 1][j];
    }
  }
  for (let i = 0; i < result.length; i += 1) {
    for (let j = 0; j < result[i].length; j += 1) {
      source[i][j] = result[i][j];
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */

function partition(arr, left, right) {
  const pivot = arr[Math.floor((right + left) / 2)];
  const doppler = arr;
  let start = left;
  let end = right;
  while (start <= end) {
    while (arr[start] < pivot) {
      start += 1;
    }
    while (arr[end] > pivot) {
      end -= 1;
    }
    if (start <= end) {
      [doppler[start], doppler[end]] = [arr[end], arr[start]];
      start += 1;
      end -= 1;
    }
  }
  return start;
}

function sortHelper(arr, left, right) {
  if (arr.length <= 1) {
    return arr;
  }
  const index = partition(arr, left, right);
  if (left < index - 1) {
    sortHelper(arr, left, index - 1);
  }
  if (index < right) {
    sortHelper(arr, index, right);
  }
  return arr;
}
function sortByAsc(arr) {
  return sortHelper(arr, 0, arr.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let odd = '';
  let even = '';
  let result = str;
  let countRepeat = 0;
  let countFind = false;
  for (let i = 0; i < iterations; i += 1) {
    for (let j = 0; j < result.length; j += 1) {
      if (j % 2 === 1) {
        odd = `${odd}${result[j]}`;
      } else {
        even = `${even}${result[j]}`;
      }
    }
    result = `${even}${odd}`;
    if (result === str) {
      countRepeat += 1;
      countFind = true;
      i = Math.floor(iterations / countRepeat) * countRepeat - 1;
    } else if (!countFind) {
      countRepeat += 1;
    }
    odd = '';
    even = '';
  }
  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let strN = `${number}`;
  if (strN.length === 1) {
    return number;
  }

  let i = strN.length - 1;
  while (i > 0) {
    if (strN[i - 1] < strN[i]) {
      break;
    }
    i -= 1;
  }
  if (i === 0) {
    return number;
  }
  for (let j = strN.length - 1; j >= i; j -= 1) {
    if (strN[i - 1] < strN[j]) {
      const digitsN = [];
      for (let d = 0; d < strN.length; d += 1) {
        digitsN[d] = strN[d];
      }
      [digitsN[i - 1], digitsN[j]] = [digitsN[j], digitsN[i - 1]];
      let end = digitsN.length - 1;
      let start = i;
      for (start; start < end; start += 1) {
        [digitsN[start], digitsN[end]] = [digitsN[end], digitsN[start]];
        end -= 1;
      }
      strN = '';
      for (let char = 0; char < digitsN.length; char += 1) {
        strN = `${strN}${digitsN[char]}`;
      }
      break;
    }
  }
  return +strN;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
