// part I
// t1
let name;
let admin;
name = "Джон";
admin = name;
console.log(admin); 

// t2

let a = 1;
let b = 2;

console.log(Number(a) + Number(b));

// t3

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// t4

let i = 0;
while (i < 3) {
    console.log( `number ${i}!` );
    i++;
    }

// t5

let bolshe100 = null;
while (bolshe100 <= 100) {
    bolshe100 = 1;
    if (bolshe100 != null){
        console.log("НЕПРАВИЛЬНО, ПЕРЕДЕЛАЙ");
        bolshe100 = 101;
    }
    //bolshe100 = prompt("введи число большее 100", 101);
}

// t6

function isprime(num) {
    if (num <= 1){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

//a = prompt("Граница интервала?", 10);
a = 10;
for (let i = 0; i <= a; i++) {
    if (isprime(i) == true) {
        console.log(i);
    }
}

// part II
// t1

function conv(num) {
    return Number(num.toString().split('').reverse().join(''));
}

a = 123;
console.log(conv(a))

// t2

function remove_repeat(num) {
    
    let help = num.toString().split('');
    console.log(help);
    let unique = help.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
    return Number(unique.join(''));
}

a = 111333345677;
console.log(remove_repeat(a))

// t3

function count_repeat(num1, num2) {

}

a = 123;
b = 5;
count_repeat(a, b);

// t4

function count_null(num) {

}

a = 5;
count_null(a);