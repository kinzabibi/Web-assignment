console.log("Hello");

// Task 1

let form = document.getElementById("contactForm");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let msg = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let userName = nameInput.value;
    let email = emailInput.value;
    let birthYear = document.getElementById("birth-year");
    let year = parseInt(birthYear.value);
    let age = 2026 - year;
    if (userName && email) {
        msg.textContent = "Thank you for visiting, " + userName + "! We will contact you at " + email + ".";
    }

    if (age >= 18 && age <= 25) {
        msg.textContent += " You also qualify for a student discount!";
    }
    else if (age >= 60) {
        msg.textContent += " You also qualify for a senior discount!";
    }
    else {
        msg.textContent += " You do not qualify for a special discount.";
    }


});

//task 2

let rows = document.querySelectorAll("tr");
for (let i = 0; i < rows.length; i++) {

    rows[i].addEventListener("mouseover", function () {
        rows[i].style.backgroundColor = "#eee1d5";
    });

    rows[i].addEventListener("mouseout", function () {
        rows[i].style.backgroundColor = "";
    });

}


//task3

let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

//task 4
let items = document.querySelectorAll(".menuItem");
let total = 0;
let totalelemts = document.getElementById("total");

for (let i = 0; i < items.length; i++) {

    items[i].addEventListener("change", function () {
        if (items[i].checked) {
            total = total + Number(items[i].value);
        }
        else {
            total = total - Number(items[i].value);
        }

        totalelemts.textContent = "Total Rs= " + total;
    });

}

//task 5 task 1 k andar hai....
//task6

let extraText = document.getElementById("extraText");
let readMore = document.getElementById("readMoreBtn");
extraText.style.display = "none";

readMore.addEventListener("click", function () {
    if (extraText.style.display === "none") {
        extraText.style.display = "block";
        readMore.textContent = "Read less";
    }
    else {
        extraText.style.display = "none"
        readMore.textContent = "Read more..";
    }

})


//task 7
let allBtn = document.getElementById("allBtn");
let drinksBtn = document.getElementById("drinksBtn");
let pastriesBtn = document.getElementById("pastriesBtn");

let drinkRows = document.querySelectorAll(".drink");
let pastryRows = document.querySelectorAll(".pastry");
allBtn.addEventListener("click", function () {

    for (let i = 0; i < drinkRows.length; i++) {
        drinkRows[i].style.display = "";
    }

    for (let i = 0; i < pastryRows.length; i++) {
        pastryRows[i].style.display = "";
    }

});


drinksBtn.addEventListener("click", function () {

    for (let i = 0; i < drinkRows.length; i++) {
        drinkRows[i].style.display = "";
    }

    for (let i = 0; i < pastryRows.length; i++) {
        pastryRows[i].style.display = "none";
    }

});

pastriesBtn.addEventListener("click", function () {
    for (let i = 0; i < drinkRows.length; i++) {
        drinkRows[i].style.display = "none";
    }

    for (let i = 0; i < pastryRows.length; i++) {
        pastryRows[i].style.display = "";
    }
});

//task8
let currentTime = new Date();
let hours = currentTime.getHours();
let status1 = document.getElementById("status");
if (hours >= 8 && hours < 22) {
    status1.textContent = "We are Open!";
    status1.style.color = "green";
}
else {
    status1.textContent = "Closed - Open at 8 AM";
    status1.style.color = "red";
}

//task9
let specialNotes = document.getElementById("special-notes");
let charCount = document.getElementById("charCount");

specialNotes.addEventListener("input" , function()
{
let remaining= 100- specialNotes.value.length;
charCount.textContent= remaining + " caharcters remaining.."
});