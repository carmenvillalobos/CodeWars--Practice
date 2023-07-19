// UMPIRE

// Understand
// This problem is asking that if I am given two strings to identify whether they have the same exact letters. If they have the exact same letters, then we will output true. If they do not have the exact same letters, we will output false.
// Case 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Case 2:
// Input: s = "rat", t = "car"
// Output: false

// Case 3:
// Input: s = "a", t = "a"
// Output: true

// Case 4:
// Input: s = "ab", t = "b"
// Output: false

// Match
// Brute force: split the string into its own elements within an array, sort from alphabetical order, put back into a string, and then compare both strings 
// Optimize solution by using a hashmap instead for a faster time complexity

// Plan/Pseudocode

//Brute Force way; Time Complexity: NlogN + MlogM (b/c sorting runs in NlogN time)
function Anagram(s,t){ //s="ab", t="ba"
    let string1 = s.split("").sort().join("")
    let string2 = t.split("").sort().join("")
  
    // console.log(string1)
    if (string1 === string2){
      return true
    }
    else{
      return false
    }
  }
  
  console.log(Anagram("ab", "ba"))
  
  //Hashmap way; Time Complexity: O(n) (i.e., linear)
  function isAnagram(s,t){
    if(s.length !== t.length){ //if the lengths are !=, cannot be anagrams
      return false
    }
  
    let sCount = {} //define each hashmap
    let tCount = {}
  
    for (let i=0; i < s.length; i++){ //s.length represents t.length also?
      if (!sCount[s[i]]){ //these count how many times each charac is seen
        sCount[s[i]] = 0 //sCount[s[0]=a]
      }
      if (!tCount[t[i]]){
        tCount[t[i]] = 0
      }
      sCount[s[i]]++
      tCount[t[i]]++
    }
  
    for(let ch in sCount) {
      if(sCount[ch] !== tCount[ch]){
        return false
      }
      else{
        return true
      }
    }
    
  }