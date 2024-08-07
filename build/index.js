"use strict";
var _a;
let age = 12345;
let nama = "12345";
console.log(nama);
let siswa = {
    nama: "rizky",
    umur: 17,
    isPelajar: false,
    alamat: "cikarang"
};
siswa = {
    nama: "raffa",
    umur: 17,
    isPelajar: true
};
const produk1 = {
    id: 1,
    name: "samsung",
    price: 100000,
    isPremium: true,
};
const produk2 = {
    id: 2,
    name: "tv",
    price: 200000,
    isPremium: true,
    note: "bagus"
};
const produk3 = {
    id: 3,
    produkName: "ultragear",
    price: 300000,
    detail: {
        manufacture: "lg",
        year: 5
    }
};
console.log("Pabrik", (_a = produk3.detail) === null || _a === void 0 ? void 0 : _a.manufacture);
