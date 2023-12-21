function isAnagram(str1, str2) {
    // Trim whitespace and  lowercase
    let normalizedStr1 = str1.trim().toLowerCase();
    let normalizedStr2 = str2.trim().toLowerCase();
    // Sort the characters in each string
    let sortedStr1 = normalizedStr1.split('').sort().join('').trim();
    let sortedStr2 = normalizedStr2.split('').sort().join('').trim();
    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}
console.log(isAnagram("Astronomer", "Moon starer")); // true
console.log(isAnagram("School master", "The classroom")); // true
console.log(isAnagram("The Morse Code", "Here come dots")); // true