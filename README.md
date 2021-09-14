# Caesar cipher

1. [Project description link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher)

2. Project Aim: Write a function which takes a ROT13 encoded string as input and returns a decoded strin.

3. Condition: All letters will be uppercase.

4. Condition: Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Solution Process:

1. use charCodeAt() to get code UTF code of a character

2. Add 13 to get ROT13 value of character if within alphbet range(65 <-> 91)

3. Get character from code usung String.fromCharcode().

4. Concatenate characters into a string.