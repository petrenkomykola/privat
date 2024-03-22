9 + 16
const filterEvenNumbers = numbers => numbers.filter(isEven);
const removeDuplicates = array => Array.from(new Set(array));
true * false
const findLargestNumber = numbers => Math.max(...numbers);
const fetchData = async url => { const response = await fetch(url); return response.json(); }
true * banana

const squareRoot = num => Math.sqrt(num);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

banana

const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

banana

const greet = name => `Hello, ${name}!`;

95 * 26,57,66,60,95,50,52,28,28,20,39,10,83,34,99,84,78,29,1,47,5,80,30,21,54,1,90,55,85,32,79,35,38,99,65,39,71,82,35,58,74,59,58,16,29,97,17,40,10,22,35,81,92,28,62,5,98,38,32,36,68,14,98,25,78,26
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
88 - true
const formatDate = date => new Date(date).toLocaleDateString();
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const variableName = getRandomNumber();
52 * kiwi
const greet = name => `Hello, ${name}!`;
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

