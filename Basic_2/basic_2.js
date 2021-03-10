
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


var car1 =new car("BMW","570i",2,"black");


console.log(car1.about());



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


console.log(anml1.living());




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

console.log(per1.showMessage());







