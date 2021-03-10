






class car{


    BrandName: "BMW",
    model: "340A",
    doors:2,
    color:"Black",
    available: ['austria', 'germany', 'usa'],
    about: function() {
    return this.BrandName +' is one of the most mordern car and it has ' + this.doors +'doors';



constructor(){

}
about(){

}

}

class animal{

    constructor(){

    }

    about(){

    }

}
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












