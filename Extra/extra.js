
class Hotel{


numberOfNight=Math.floor(Math.random()*11);
// console.log(numberOfNight);

//     getRandomArbitrary(min, max) {
//     return Math.floor(Math.random() * (min - 10) + min);
// }

    constructor(hotelName,numberOfNight,address,image){
       
        this.hotelName=hotelName;
        this.numberOfNight=numberOfNight;
        this.address=address;
        this.image=image;
    }



    showAvailability(){

return "this.numberOfNight";

    }

}

var hot = new Hotel("rakib","vienna",true);
console.log(hot.showAvailability());