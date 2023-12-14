pattern_1=[' ',' ','*','*','*',' ',' '];
pattern_2=[' ','*',' ',' ',' ','*',' '];
pattern_3=[' ','*','*','*','*','*',' '];

letter=[pattern_1,pattern_2,pattern_2,pattern_3,pattern_2,pattern_2,pattern_2];

for (line of letter){
    console.log(line.join(''));
}
