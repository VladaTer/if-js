let user = 'John Doe'
console.log(user)

let student = 'Vlada'
console.log(student)

user = student //Vlada
console.log(user)

let test = 1
// test = test + 1
// test += 1
test++ //2
test += '1' //21
console.log(test)
test -= 1 //20
console.log(test)

// console.log('bool ', !!0)

test = !!test //true
console.log(test)

const array = [2, 3, 5, 8]
// console.log(array[3])
let sum = 1
for (let index = 0; index < array.length; index++) {
    console.log('index ', index)
    console.log('element ' , array[index] )
    sum = sum * array[index]

}
console.log(sum)

const arraysecond = [2, 5, 8, 15, 0, 6, 20, 3]

for (let index = 0; index <  arraysecond.length; index++) {
    if (arraysecond[index]> 5 && arraysecond[index] < 10) {
        console.log(arraysecond[index]);
    }
}
for (let index = 0; index <  arraysecond.length; index++) {
    if (arraysecond[index] % 2 == 0) {
        console.log(arraysecond[index]);
    }
}