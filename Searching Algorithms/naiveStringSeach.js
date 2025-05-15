function stringSearch(string1, string2) {
  let count = 0;
  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if (string1[i + j] !== string2[j]) {
        break;
      }
      if (j === string2.length - 1) {
        count++;
      }
    }
  }
  return count;
}

// Example usage:

const string1 = "wowomgzomg";
const string2 = "omg";

const ans = stringSearch(string1, string2);
console.log(ans);
