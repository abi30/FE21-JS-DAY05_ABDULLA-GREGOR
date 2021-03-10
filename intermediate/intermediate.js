
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


// showMessage(){
//     return super.showMessage() + " and my email is "+ this.email;
// }


class Motorbike extends car{

constructor(name, mdl, dr, clr,fuel,made_in) {
            super(name, mdl, dr, clr);
            this.Fuel=fuel;
            this.Made_in=made_in;
}

about(){

// return super.about()+ "it needs "+this.Fuel +" and made in "+this.made_in;
    return super.about()+` it needs ${this.Fuel} and made in ${this.Made_in}`;
  } 
}


var car1 =new car("FARRARI","570i",2,"red");
var car2 =new car("BMW","370i",2,"silver");
var car3 =new car("VW","470i",4,"black");
var car4= new Motorbike("BMW","170i",0,"silver","octen","germany");
// document.getElementById()
console.log(car4);



 document.getElementsByClassName("car1")[0].innerHTML = car1.about();
 document.getElementsByClassName("car2")[0].innerHTML = car2.about();
 document.getElementsByClassName("car3")[0].innerHTML = car4.about();







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



class Fish extends animal{

    constructor(name,orgin_country,weight,clr,inhabits){
      super(name,orgin_country,weight,clr);
        this.inhabits=inhabits;

    }

    living(){
            return `${this.Name} fish live in ${this.inhabits}`;
    }

}


var anml1= new animal("tiger","bangladesh",70,"white");
var anml2= new animal("lion","Africa",68,"golden");
var anml3= new animal("Cangaroo","Austrilia",30,"silver");
var anml4= new Fish("Shark","Austrilia",60,"silver","water");


document.getElementsByClassName("anml1")[0].innerHTML = anml1.living();
document.getElementsByClassName("anml2")[0].innerHTML = anml2.living();
document.getElementsByClassName("anml3")[0].innerHTML = anml4.living();



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

class status extends Person {
    
    constructor(name, age, jobTitle, gym,married){
        super(name, age, jobTitle, gym);
       this.married=married;
     
   }
   showMessage(){
       return `Hey, My name is ${this.fName} and my myrriage status is ${this.married}.`;
   }
}


var per1 =new Person("gregor",30,"developer",false);
var per2 =new Person("mike müller",23,"marketing",false);
var per3 =new Person("abdulla",32,"webdeveloper",true);
var per4 =new status("abdulla",32,"webdeveloper",true,true);



document.getElementsByClassName("per1")[0].innerHTML = per1.showMessage();
document.getElementsByClassName("per2")[0].innerHTML = per2.showMessage();
document.getElementsByClassName("per3")[0].innerHTML = per4.showMessage();


console.log(per1.showMessage());







