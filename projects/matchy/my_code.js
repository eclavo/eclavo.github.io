var animal = {};
animal.species = 'Snake';
//to use array syntax on an object you have to use a string
animal['name'] = 'Slitheryn';
animal['noises'] = [];

var noises = [];
noises[0] = 'Hissss';
noises.push('SSsss');
noises.unshift('Rattle');
noises[noises.length] = 'Pst';
console.log(noises.length);
console.log(noises[noises.length -1]);
console.log(noises);
animal['noises'] = noises;
console.log(animal);

var animals = [];
animals.push(animal);
console.log(animals);
var duck = {species: 'Duck', name: 'Jeroome', noises: ['quack', 'honk', 'sneeze', 'woosh']};
animals.push(duck);
var horse = {species: 'Horse', name: 'Colt', noises: ['nay', 'whzzz']};
animals.push(horse);
var dog = {species: 'Dog', name: 'Scruffy', noises: ['woof', 'bark']};
animals.push(dog);
console.log(animals.length);
console.log(animals);

var friends = [];

function randomAnimal(array) {
    return array[Math.floor(Math.random() * (array.length -1))].name;
}
friends.push(randomAnimal(animals));
console.log(friends);
animals[Math.floor(Math.random() * (animals.length -1))].friends = friends;
console.log(animals);


function search(name) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            return animals[i];
        }
    }    
    return null;
}
console.log(search('Scruffy'));



var rabbit = {species: 'Rabbit', name: 'Floppy', noises: ['squeak', 'sniff']};

function edit(name, obj) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            return animals[i] = obj;
        }        
    }
}
edit('Scruffy', rabbit);

function remove(animal) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === animal) {
            return animals.splice(i, 1)[0];
        }
    }
}
remove('Jeroome');

function create(obj) {
    for (var key in obj) {
        if (obj.species.length > 0 && obj.name.length > 0) {
            for (var i = 0; i < animals.length; i++) {
                if (obj.name !== animals[i].name) {
                    return animals.push(obj);
                }
            }
        }
    }
}
var lizard = {species: 'Lizard', name: 'Lewis', noises: ['click', 'growl']};
create(lizard);


