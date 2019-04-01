"use strict";

let _Id = 1;

function validateForm() {
    let x = document.forms["myForm"]["aname"].value;
    let y = document.forms["myForm"]["sname"].value;
    let f = document.forms["myForm"]["age"].value;
    let z = document.forms["myForm"]["email"].value;

    if (x, y, f, z == "") {
        alert("All must be filled out")
        return false;
    }
    // if (x, y != isNaN) {
    //     alert("Name,Surname for Don't import number")
    //     return false;
    // }
    // if (y != isNaN) {
    //     alert("SurName for Don't import number")
    //     return false;
    // }
    if (x == "") {
        alert("Name must be filled out")
        return false;
    }
    if (y == "") {
        alert("Surname must be filled out")
        return false;
    }
    if (f == "") {
        alert("Age must be filled out")
        return false;
    }
    if (z == "") {
        alert("Email must be filled out")
        return false;
    }
    // if (z != /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) {
    //     alert("Email is wrong format")
    //     return false;
    // }
    // if (f != /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)/) {
    //     alert("Age is wrong format")
    //     return false;
    // }
    getValue();
    
    document.forms["myForm"]["aname"].value = "";
    document.forms["myForm"]["sname"].value = "";
    document.forms["myForm"]["age"].value = "";
    document.forms["myForm"]["email"].value = "";
    return false;

}

function PersonObject(_name, _surname, _birthday, _email) {
    this.name = _name;
    this.surname = _surname;
    this.birthday = _birthday;
    this.email = _email;
    this.id = _Id++;
}


let personArray = [];
let wrapper = document.getElementById("personList");


function getValue() {
    let personName = document.forms["myForm"]["aname"].value;
    let personsurName = document.forms["myForm"]["sname"].value;
    let personAge = document.forms["myForm"]["age"].value;
    let personEmail = document.forms["myForm"]["email"].value;

    let PersonInfo = new PersonObject(personName, personsurName, personAge, personEmail);
    personArray.push(PersonInfo);
    console.log(personArray);

    displayTable();

}

function displayTable() {
    let list = "<table class='table table-danger'> <thead> " +
        '<tr>' +
        '<th scope="col">#</th>' + '<th scope="col">Id</th>' + '<th scope="col">Name</th>' + '<th scope="col">Surname</th>' + '<th scope="col">Age</th>' + '<th scope="col">Email</th>' +
        '</tr>' +
        '</thead> <tbody>';
    for (let i = 0; i < personArray.length; i++) {
        list += "<tr><th scope='row'>" + (i + 1) + "</th>+<td>" + personArray[i].id + "</td>+<td>" + personArray[i].name + "</td><td>" + personArray[i].surname + "</td>+<td>" + personArray[i].birthday + "</td>+<td>" + personArray[i].email + "</td>+</tr>";
    }
    list += "</tbody></table>";
    wrapper.innerHTML = list;

    // let list = "<ul class='list-group'>";
    // for (let i = 0; i < personArray.length; i++) {
    //     list += "<li class='list-group-item animated lightSpeedIn'>" +
    //         personArray[i].id + " " +
    //         personArray[i].name + " " + personArray[i].surname + " " + personArray[i].birthday + " " + personArray[i].email + "</li>";
    // }
    // list += "</ul>";
    // wrapper.innerHTML = list;
    // console.log(list);
}

//Delete by id
function deleteList() {
    let list = document.forms["deletListItem"]["listNumber"].value;
    personArray.splice(list - 1, 1);
    displayTable();

    if (list > personArray.length) {
        alert("It is not correct!!!")
        return false;
    } else if (isNaN(list)) {
        alert("Write number")
        return false;
    }
    document.forms["deletListItem"]["listNumber"].value = "";
}

//Sort for Name
function nameSort() {
    personArray.sort(function (a, b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
    console.log(personArray);
    displayTable()
}

//Sort for Surname
function surnameSort() {
    personArray.sort(function (a, b) {
        var x = a.surname.toLowerCase();
        var y = b.surname.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
    displayTable()
}
// Sort for Id but it is not working,because id begins from 1!
function idSort() {
    personArray.sort(function (a, b) { return b - a })
    displayTable()
}

