
// Part 1

function addName(names, name) {
    names.push(name);
}
// Part 2

function findName(names, name) {
    let found = false;
    names.forEach(element => {
        if (element === name) {
            found = true;
        }
    });
    return found;
}


// Part 3

function findCommon(list1, list2) {
    let commonElements = [];
    list1.forEach(element1 => {
        list2.forEach(element2 => {
            if (element1 === element2) {
                commonElements.push(element1);
            }
        });
    });
    return commonElements;
}


var names = ["Maria", "Antony", "Joy", "Juan"];

var myName = "Elise";
addName(names, myName);

console.log(findName(names,"Elise"));

var names2 = ["Maria", "Elise", "Carlos"];

console.log(findCommon(names, names2));

