// let age: number = 12345;
// let nama: string = "12345";

// // console.log(nama);

// let siswa: {
//   nama: string;
//   umur: number;
//   isPelajar: boolean;
//   alamat?: string;
// } = {
//   nama: "rizky",
//   umur: 17,
//   isPelajar: false,
//   alamat: "cikarang",
// };

// siswa = {
//   nama: "raffa",
//   umur: 17,
//   isPelajar: true,
// };

// //interface untuk mendefinisikan tipe data object

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   note?: string;
//   isPremium: boolean;
// }

// const produk1: Product = {
//   id: 1,
//   name: "samsung",
//   price: 100000,
//   isPremium: true,
// };

// const produk2: Product = {
//   id: 2,
//   name: "tv",
//   price: 200000,
//   isPremium: true,
//   note: "bagus",
// };

// // Nested Obeject

// interface ProductDetail {
//   manufacture: string;
//   year: number;
// }

// interface ProductItem {
//   id: number;
//   produkName: string;
//   price: number;
//   detail: ProductDetail;
// }

// const produk3: ProductItem = {
//   id: 3,
//   produkName: "monitor",
//   price: 300000,
//   detail: {
//     manufacture: "LG",
//     year: 2024,
//   },
// };

// // console.log("Pabrik", produk3.detail.manufacture);

// //array

// const ortu = ["ayah", "mama"];

// //square bracket

// let b: number[];
// b = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let c: string[];
// c = ["a", "b", "c", "d", "e"];

// let d: (string | number | boolean)[];
// d = [1, "a", true];

// // Rumus Volume Balok

//  function rumusbalok(panjang:number,lebar:number,tinggi:number) {
//   const volume = panjang*lebar*tinggi
//   return volume
// }

// let balok1 = rumusbalok(10,5,4)
// let balok2 = rumusbalok(32,10,9)
// let balok3 = rumusbalok(20,8,5)

// // console.log(balok1,balok2,balok3);
// // console.log(rumusbalok(50,10,5));

// function penjumlahan(a:number,b:number,c = 0){
//   const hasil = a+b+c;
//   return hasil
// }

// const hasil1 = penjumlahan(20,10,5)
// const hasil2 = penjumlahan(1,23,4)

// // console.log(hasil1,hasil2);

// function pembagian({a, b, c = 1}: {a: number; b:number; c?:number}) {
//   const hsl = (a/b)*c
//   return hsl
// }

// const kli1 = pembagian({a:10, b:10, c:5})
// const kli2 = pembagian({a:5, b:2,})

// console.log("kali1",kli1 ,"kali2", kli2);

// interface satuInterface{
//   a:number
//   b:string  
// }

// function satu({a,b}:satuInterface ): void{
//   console.log(a,b)
// }

// satu({a:10, b:"hai"})

// interface ResponseAPI{
//   msg:string;
//   status:string;
// }

// function dua({a,b}: satuInterface):ResponseAPI {
//   return{
//     msg:"hai",
//     status:"ok"
//   }
// }

// function tiga({a,b}:satuInterface):number{
//   return 10
// }

// function empat({a,b}:satuInterface):boolean{
//   return true
// }

// function cekAngka(ary:number[], angka:number):boolean {
//   return ary.includes(angka)
// }

// const arrr = [2,3,4,5]
// const angka = 10
// console.log(cekAngka(arrr,angka));


class User{
  id:number
  firstName:string
  lastName:string

  constructor(id:number, firstname:string, lastName:string){
    this.id = id,
    this.firstName = firstname,
    this.lastName = lastName
  }
  login():boolean{
    if (this.id===1) {
      return true
    }else{
      return false
    }
  }

  reLogin():boolean{
    return this.login()
  }

  // register():boolean{
  //   if (this.firstName) {
      
  //   }
  // }
}



const radis = new User(1,"radis","tian")

console.log(radis);
console.log(radis.login());
console.log(radis.reLogin());

class Profile{
  user: {
    username: string,
    password: string
  }[]

  constructor(){
    this.user = [{
      username:"radis",
      password:"12345"
    },
    {
      username:"raffa",
      password:"123456"
    },
    {
      username:"rayya",
      password:"1234567"
    },
    {
      username:"rizky",
      password:"12345678"
    },
    
  ]
  }


  login(username:string, password:string) {
    const userFound = this.user.find(
      (user) => user.username === username && user.password === password
    );

    if (userFound) {
      return{
        msg:"Login Berhasil",
      } 
    } else {
      return {
        msg:"Login Gagal",
      };
    }
  }
}

const tes = new Profile()
console.log(tes.login("raffa","122345"));