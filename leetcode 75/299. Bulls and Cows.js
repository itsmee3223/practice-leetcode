// You are playing the Bulls and Cows game with your friend.

// You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:

// The number of "bulls", which are digits in the guess that are in the correct position.
// The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.
// Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.

// The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.

// Example 1:

// Input: secret = "1807", guess = "7810"
// Output: "1A3B"
// Explanation: Bulls are connected with a '|' and cows are underlined:
// "1807"
//   |
// "7810"
// Example 2:

// Input: secret = "1123", guess = "0111"
// Output: "1A1B"
// Explanation: Bulls are connected with a '|' and cows are underlined:
// "1123"        "1123"
//   |      or     |
// "0111"        "0111"
// Note that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.

// Constraints:

// 1 <= secret.length, guess.length <= 1000
// secret.length == guess.length
// secret and guess consist of digits only.
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  var bulls = 0;
  var cows = 0;

  const map = {};
  for (i = 0; i < guess.length; i++) {
    s = Number(secret[i]);
    g = Number(guess[i]);

    console.log(map[s], map[g]);
    if (s === g) {
      bulls++;
    } else {
      if (map[s] < 0) cows++;
      if (map[g] > 0) cows++;
      map[s] = Number(map[s] || "0") + 1;
      map[g] = Number(map[g] || "0") - 1;
    }
    console.log(map);
    console.log(bulls, cows);
  }
  console.log(`${bulls}A${cows}B`);
};
getHint("1807", "7810");
// secret = "1807", guess = "7810"
/*
undefined undefined
{ '1': 1, '7': -1 }        
0 0

undefined undefined        
{ '1': 1, '7': -1 }        
1 0

undefined 1
{ '0': 1, '1': 0, '7': -1 }
1 1

-1 1
{ '0': 0, '1': 0, '7': 0 }
1 3

1A3B
*/

// solution from another user
// ==============================================================================
let bull = 0,
  cow = 0;
const arrSecret = secret.split(""),
  arrGuess = guess.split(""),
  mapSecret = {},
  bullIndex = [];
// declare first but use later
const findCow = (num) => {
  let index = -1;
  Object.keys(mapSecret).forEach((k) => {
    if (mapSecret[k] === num) {
      index = Number(k);
    }
  });
  return index;
};
// dictionary for index of secret
arrSecret.forEach((s, index) => {
  mapSecret[index] = s;
});
// start from here, get the bull first; get rid of the bull from secret dictionary;
for (let i = 0; i < secret.length; i++) {
  mapSecret[i] = arrSecret[i];
  if (arrSecret[i] === arrGuess[i]) {
    bull++;
    mapSecret[i] = -1;
    bullIndex.push(i);
  }
}
// get the cow
for (let i = 0; i < secret.length; i++) {
  // ignore those that were already defined as a bull
  if (bullIndex.includes(i)) continue;
  if (arrSecret.includes(arrGuess[i])) {
    const cowIndex = findCow(arrGuess[i]);
    if (cowIndex > -1) {
      cow++;
      mapSecret[cowIndex] = -1;
    }
  }
}
return `${bull}A${cow}B`;
