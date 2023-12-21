// var word="test this"
// var word2=" test this"
// var word3="test this "
// var word4=" test this "

// console.log(word);
// console.log(word.trim());

// console.log(word2);
// console.log(word2.trim());

// console.log(word3.split(''));
// console.log(word3.trim().split(''));


// console.log(word4);
// console.log(word4.trim());


word='a man';
word=word.split('');
console.log(word);
sorted_characters=word.sort();
console.log(sorted_characters);

merged_string=sorted_characters.join('');
console.log(merged_string);

trimmed_word=merged_string.trim();
console.log(trimmed_word);