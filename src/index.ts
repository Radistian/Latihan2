// sub class
// merupakan tururnan dari class baik itu property maupun method

class Smartphone{
  color:string
  brand:string
  model:string
  isTKDN:boolean

  constructor(color:string, brand:string, model:string,) {
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.isTKDN= true;
  }

  charging():void{
    console.log(`Smartphone ${this.brand} di cas`);
  }
}

const sumsang = new Smartphone('biru','sumsang','a55',)
console.log("sumsang",sumsang); 

class Android extends Smartphone{
  splitScreen(){
    console.log("Split screen berhasil");
  }
}

const xiaomi = new Android('black','xiaomi','mi')
console.log("xiaomi",xiaomi);
sumsang.charging() 
xiaomi.splitScreen()

class Ios extends Smartphone{
  airdrop(){
    console.log("Airdrop berhasil");
  }
}

// Polymophism

//merupakan suatu keadaan dimana sub class ingin mengubah sifat perilaku dari class

class Androids extends Smartphone{
  layar :number

  constructor(color:string, brand:string, model:string, layar:number){
    super(color,brand,model);
    this.layar = layar
  }
  splitScreen(){
    console.log("Split screen berhasil");
  }
  
  showBrand(){
    console.log(`Brand handphone ini adalah ${this.brand} dan ukuran ${this.layar}`);
  }

  charging():void{
    super.charging()
    console.log(`Smartphone ${this.brand} di cas dengan fast charging`);
  }
}

const onePlus = new Androids("gray","OnePlus","5",5.5)
console.log("Oneplus",onePlus);

onePlus.splitScreen()
onePlus.showBrand()
onePlus.charging()


//Latihan soal

// 1.
function minimal(a:number, b:number){
  return a < b ? a : b
} 

const min1 = minimal(1,4)
const min2 = minimal(3,2)
const min3 = minimal(3,3)
// console.log(min1)
// console.log(min2)
// console.log(min3)

// 2.
function power(a:number, b:number){
  return Math.pow(a,b)
}

const pow1 = power(7, 3) 
const pow2 = power(3, 3)
const pow3 = power(4, 0.5)
// console.log(pow1);
// console.log(pow2);
// console.log(pow3);

// 3.
function penjumlahanBilangan(a:number[],b:string){
  return 
}

// 4.
class Animal{
  name:string
  age:number
  isMammal:boolean

  constructor(name:string,age:number){
    this.name = name
    this.age = age
    this.isMammal = true
  }
}

// 5.
class Rabbit extends Animal{

  constructor(name:string,age:number){
    super(name,age)
    this.isMammal = true
  }

  eat():string{  
    return `${this.name} yang berumur ${this.age}, sedang makan!`
  }
}

// 6.
class Eagle extends Animal{
  speed:number

  constructor(name:string,age:number,speed?:number){
    super(name,age)
    this.speed = 220
  }

  fly():string{
   return `${this.name} yang berumur ${this.age} sedang terbang!`
  }

  run(){
    return `${this.name} Berlari dengan kecapatan ${this.speed} km`
  }
}

// 7.
class EagleRun extends Eagle{

  constructor(name:string,speed:number){
    super(name,speed)
  }
  fly():string{
    return `${this.name} yang berumur ${this.age} sedang terbang!`
  }

  runEagle(){
    return super.run()
  }
}

// 8.
const myRabbit = new Rabbit("Labi",2)
myRabbit.eat()

// 9.
const myEagle = new Eagle("Elo",4,220)
myEagle.fly()

// 10.
const speedTes = new EagleRun("Labi",220)
speedTes.runEagle()