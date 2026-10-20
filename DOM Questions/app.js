// question 01


// let price = 250;

// let quantity = document.getElementById("quantity");
// let btn = document.getElementById("Calculate");
// let error = document.getElementById("error");
// let result = document.getElementById("result");

// btn.addEventListener("click", function() {

//     let qty = Number(quantity.value);

//     if (quantity.value === "" || qty <= 0) {
//         error.innerText = "Please enter valid quantity";
//         result.innerText = "";
//     } 
//     else {
//         error.innerText = "";

//         let total = price * qty;
//         let discount = 0;

//         if (total >= 1000) {
//             discount = total * 10 / 100;
//         }

//         let finalBill = total - discount;

//         console.log("Total Bill: Rs. " + total);
//         console.log("Discount: Rs. " + discount);
//         console.log("Final Bill: Rs. " + finalBill);

//         result.innerText = "Total: Rs. " + total +
//             " | Discount: Rs. " + discount +
//             " | Final Bill: Rs. " + finalBill;
//     }

// });


// question 02


// let btn = document.getElementById("generate");
// let result = document.getElementById("result");

// btn.addEventListener("click", function () {

//     let num = Math.floor(Math.random() * 100) + 1;

//     if (num > 50) {
//         result.innerText = num + " - High Number";
//     }
//     else {
//         result.innerText = num + " - Low Number";
//     }

// });


// question 03


// let marksInput = document.getElementById("marks");
// let btn = document.getElementById("check");
// let result = document.getElementById("result");

// btn.addEventListener("click", function() {

//     let marks = Number(marksInput.value);

//     if (marksInput.value === "" || marks < 0 || marks > 100) {
//         result.innerHTML = "Please enter marks between 0 and 100";
//     }
//     else if (marks >= 80) {
//         result.innerHTML = "Excellent";
//     }
//     else if (marks >= 60) {
//         result.innerHTML = "Good";
//     }
//     else if (marks >= 40) {
//         result.innerHTML = "Pass";
//     }
//     else {
//         result.innerHTML = "Fail";
//     }

// });
