let a = prompt("enter a complex number");

let arr = a.split("");

function revers_input(inputt) {
    let r_arr = [];
    for (let i = inputt.length; i >= 0; i--) {
        r_arr.push(arr[i]);
    }
    return r_arr.join("");
}

alert("Q1- " + revers_input(arr));


function odd_even() {
    for (let i = 0; i <= 15; i++) {
        if (i % 2 == 0) {
            console.log("Q2- " + i + " is even number");
        }
        else {
            console.log("Q2- " + i + " is odd number");
        }
    }
}

odd_even();


let q3_word = prompt("Enter a word");

function sort() {
    let q3_arr = q3_word.split("");



    return alert("Q3- " + q3_arr.sort().join());
}

sort();


let q4_num = prompt("Enter a complex number");

function splitt() {
    let resultt = "";

    for (let i = 0; i <= q4_num.length; i++) {

        if (Number(q4_num[i]) % 2 == 0 && Number(q4_num[i + 1]) % 2 == 0) {
            resultt += q4_num[i] + "-";

        }
        else {
            resultt += q4_num[i];
        }
    }

    return resultt;
}


alert("Q4- " + splitt())


let age = prompt("Enter your age");

function age_() {
    let message = (age >= 18) ? "You are an adult" : "You are a minor";
    console.log(message);
}

age_();