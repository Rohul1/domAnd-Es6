
// ES6 practice day today



function add(first = 0, second = 10) {
    const total = first + second;
    return total
}
const result = add(10)
// console.log(result);

function add(firstName = "Rohul", lastName = "amin") {
    const fullName = firstName + " " + lastName;
    return fullName;
}
const name = add()
console.log(name);