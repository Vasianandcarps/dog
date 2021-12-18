
// let simon = {
//   name: |"Simon",
//   age: 6,
//   breed:"mix",
//  bark:function(){
// alert("bark")
//  }
// };
function getRandomInt(max) {
    return Math.random() * max;
  }
function Dog(name, breed, weight,age) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function(){
        if (weight<25){
            alert("bark");
    }else if(weight>=25){
        alert("BARK");
    }
},
this.speed = 0,
this.start = function(){
    this.speed = 1;
},
this.chageSpeed = function(){
    
    if (weight<25){
        this.speed *= getRandomInt(4)
    } else if(weight>25){
        this.speed *= getRandomInt(20)
    }
},
this.showSpeed = function(){
   alert(this.speed);
},
this.toString = function () {
    return document.write(`  ${this.name}  ${this.breed}  ${this.weight} kg  ${ this.speed} <br>`);
  
}
// this.age = 0,
// this.setAge = function (a) {
//     if (a > 0) {
//       age = a;
//     } else {
//       alert("Эта собака, очевидно, еще не появилась на свет...");
//     }
//   };

//   this.getAge = function () {
//     return age;
//   };
};
  let  simon =new Dog ("Simon","Mixed",20);
  let limo =new Dog ("Limo","Mixed",25);
  let spot =new Dog ("Spot","Mixed",30);


 let dogs = [simon, limo, spot];
//  function speedChangeProgress(){
     for (let i = 0; i < dogs.length; i++) {
    alert(dogs[i].name);
    dogs[i].bark();
    dogs[i].start();
    dogs[i].chageSpeed();
    dogs[i].showSpeed();
    dogs[i].toString();
}
 

 
// return document.write("Dog " + " " + this.name + " " + this.breed + "kg" + " " +  this.weight + " " + this.speed + "<br>");
