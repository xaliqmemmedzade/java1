// Task 01
let userFullName="My name is Xaliq"
console.log(userFullName)
//

//Task 02
const name="Xaliq";
console.log(name)
//
//Task 04
let bookPrice="1022"
console.log(bookPrice)
let bookAmount="20"
console.log(bookAmount)
//

//Task 08
let ad="Sizin adınız:[firstName]-[lastName] \n 1.[Xaliq] \n2.[Məmmədzadə] \n Tanışlığımıza çox şadam!";
console.log(ad)
//

//Task 10
let fullName="Xaliq Memmedzade"
console.log(fullName.length-1)
//

//Task 11
let fullNameX="Xaliq Memmedzade"
console.log(fullNameX[0])
console.log(fullNameX[6])
//

//Task 12
let fullNameS=prompt("Zəhmət olmasa adınızı və soyadınızı qeyd edin")
let spaceIndex=fullNameS.indexOf("")
let firstNameA=fullNameS.slice(0, spaceIndex)
let lastNameA=fullNameS.slice(spaceIndex + 1)
console.log(`${lastNameA} ${firstNameA}`);
//

//Task 13
let userName=prompt("Zəhmət olmasa adınızı daxil edin")
console.log(userName)
//

//Task 15
let number1="12345"
let number2="98765"
console.log(number1 * number2 )


const number1 = 12345;
const number2 = 98765;

// Ədədlərin hasilini hesablayırıq
const product = number1 * number2;

// Hasilin mətin şəklini alırıq
const productStr = product.toString();

// Hasilin uzunluğunu yoxlayırıq
if (productStr.length < 6) {
    console.log("Hasilin 6-cı rəqəmi yoxdur.");
} else {
    // 6-cı rəqəmi tapırıq (indeks 5-ə uyğun gəlir)
    const sixthDigit = productStr[5];
    console.log("Hasilin 6-cı rəqəmi:", sixthDigit);
}


//Task 14


