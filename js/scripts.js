var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

var dinosaurUpperCased = dinosaur.toUpperCase();
// console.log(dinosaurUpperCased);

var changedText = text.replace('Velociraptor', dinosaurUpperCased);
//console.log(changedText.length/2); 

var halfOfChangedText = changedText.slice(0, changedText.length / 2);

console.log(halfOfChangedText);
