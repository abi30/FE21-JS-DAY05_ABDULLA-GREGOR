
class car{

    constructor(name, mdl, dr, clr){
        this. BrandName = name;
        this. model = mdl;
        this. doors = dr;
        this. color = clr;
    }

    about() {
    return this.BrandName +' is one of the most mordern car and it has ' + this.doors +' doors';


}


}


var car1 =new car("FARRARI","570i",2,"red");
var car2 =new car("BMW","370i",2,"silver");
var car3 =new car("VW","470i",4,"black");


// document.getElementById()



 document.getElementsByClassName("car1")[0].innerHTML = car1.about();
 document.getElementsByClassName("car2")[0].innerHTML = car2.about();
 document.getElementsByClassName("car3")[0].innerHTML = car3.about();








class animal{

    constructor(name,orgin_country,weight,clr){

        this.Name=name;
        this.from=orgin_country;
        this.Weight=weight;
        this.color=clr;

    }

    living(){
            return `${this.Name} is living in ${this.from}`;
    }

}
var anml1= new animal("tiger","bangladesh",70,"white");
var anml2= new animal("lion","Africa",68,"golden");
var anml3= new animal("Cangaroo","Austrilia",30,"silver");


document.getElementsByClassName("anml1")[0].innerHTML = anml1.living();
document.getElementsByClassName("anml2")[0].innerHTML = anml2.living();
document.getElementsByClassName("anml3")[0].innerHTML = anml3.living();



class Person {
    
     constructor(name, age, jobTitle, gym){
        this.fName = name;
        this.age= age;
        this.jobTitle = jobTitle;
        this.gym = gym;
      
    }
    showMessage(){
        return `Hey, My name is ${this.fName}`;
    }
}



var per1 =new Person("gregor",30,"developer",false);
var per2 =new Person("mike müller",23,"marketing",false);
var per3 =new Person("abdulla",32,"webdeveloper",true);



document.getElementsByClassName("per1")[0].innerHTML = per1.showMessage();
document.getElementsByClassName("per2")[0].innerHTML = per2.showMessage();
document.getElementsByClassName("per3")[0].innerHTML = per3.showMessage();


console.log(per1.showMessage());







