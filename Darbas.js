let characters = [`Jon Snow`, `Cersei Lannister`, `Daenerys Targaryen`, `Theon Greyjoy`, `Tyrion Lannister`, `Arya Stark`,]

console.log(characters[0]);
console.log(characters[characters.legth - 1]);

let characterSelect = prompt(`ivesti skaiciu nuo 1 iki 6`);
characterSelect = Number(characterSelect);

console.log(characters[characterSelect-1]);
