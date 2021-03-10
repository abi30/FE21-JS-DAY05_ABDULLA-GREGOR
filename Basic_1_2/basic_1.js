
var person1 = new Object();

person1.firstName = 'john';
person1.lastName = "doe";
person1.age = 25;
person1.drivingLycinse = true;
person1.hobbies = ['swim', 'read', 'coding'];
person1.fullName = function() {
   return this.firstName +' '+ this.lastName;
};

const parent1=document.querySelector("#per1");
const childrens1=parent1.children;
console.log(parent);
for(value of childrens1){
    document.getElementsByClassName("per1")[0].innerHTML = person1["firstName"];
    document.getElementsByClassName("per1")[1].innerHTML =  person1['age'];
    document.getElementsByClassName("per1")[2].innerHTML = person1.fullName();

}






var person2 = new Object();

person2.firstName = 'abdulla';
person2.lastName = "rakib";
person2.age = 32;
person2.drivingLycinse = false;
person2.hobbies = ['gym', 'read', 'coding'];
person2.fullName = function() {
   return this.firstName +' '+ this.lastName;
};

// document.getElementById("personName").innerHTML = person2['firstName'];
// document.getElementById("age").innerHTML =  person2['age'];
// document.getElementById("message").innerHTML = person2.fullName();



const parent2=document.getElementById("per2");
const childrens2=parent2.children;
console.log(parent2);
for(value of childrens2){
    document.getElementsByClassName("per2")[0].innerHTML = person2["firstName"];
    document.getElementsByClassName("per2")[1].innerHTML =  person2['age'];
    document.getElementsByClassName("per2")[2].innerHTML = person2.fullName();

}


var person3 = new Object();

person3.firstName = "Mr";
person3.lastName = "grogor";
person3.age = 28;
person3.drivingLycinse = true;
person3.hobbies = ['swim', 'read', 'coding'];
person3.fullName = function() {
   return this.firstName +' '+ this.lastName;
};



const parent3=document.getElementById("per2");
const childrens3=parent3.children;
console.log(parent2);
for(value of childrens3){
    document.getElementsByClassName("per3")[0].innerHTML = person3["firstName"];
    document.getElementsByClassName("per3")[1].innerHTML =  person3['age'];
    document.getElementsByClassName("per3")[2].innerHTML = person3.fullName();

}


var car1 = {

    BrandName: "BMW",
    model: "340A",
    doors:2,
    color:"Black",
    available: ['austria', 'germany', 'usa'],
    about: function() {
    return this.BrandName +' is one of the most mordern car and it has ' + this.doors +'doors';

    }

};


const car_parent1=document.getElementById("car1");
const cars1=car_parent1.children;
console.log(parent2);
for(value of cars1){
    document.getElementsByClassName("car1")[0].innerHTML = car1["BrandName"];
    document.getElementsByClassName("car1")[1].innerHTML =`doors:${car1.doors}`;
    document.getElementsByClassName("car1")[2].innerHTML = car1.available[0];

}

var car2 = {

    BrandName: "VW",
    model: "180Gt",
    doors:4,
    color:"white",
    available: ['austria', 'uk', 'rasia'],
    about: function() {
    return this.BrandName +' is one of the most mordern car and it has ' + this.doors +'doors';

    }

}

const car_parent2=document.getElementById("car2");
const cars2=car_parent2.children;
console.log(parent2);
for(value of cars2){
    document.getElementsByClassName("car2")[0].innerHTML = car2["BrandName"];
    document.getElementsByClassName("car2")[1].innerHTML =`doors:${car2.doors}`;
    document.getElementsByClassName("car2")[2].innerHTML = car2.available[1];

}


var car3 = {

    BrandName: "Ferrari",
    model: "2020A",
    doors:2,
    color:"red",
    available: ['austria', 'germany', 'Australia'],
    about: function() {
    return this.BrandName +' is one of the fastest mordern car and it has ' + this.doors +'doors';

    }

}


const car_parent3=document.getElementById("car1");
const cars3=car_parent3.children;
console.log(parent2);
for(value of cars3){
    document.getElementsByClassName("car3")[0].innerHTML = car3["BrandName"];
    document.getElementsByClassName("car3")[1].innerHTML =`doors:${car3.doors}`;
    document.getElementsByClassName("car3")[2].innerHTML = car3.available[0];

}2

var animal1 = {

    Name: "cangaroo",
    area: "australia",
    color:"white",
    legs:2,
    about: function() {
    return this.name +' is found out in  ' + this.area;

    }

}



var animal2 = {

    Name: "tiger",
    area: "Bangladesh",
    color:"yellow and black",
    legs:4,
    about: function() {
    return this.name +' is found out in  ' + this.area;

    }

}


var animal3 = {

    Name: "Lion",
    area: "Africa",
    color:"golden",
    legs:4,
    about: function() {
    return this.name +' is found out in  ' + this.area;

    }

}












