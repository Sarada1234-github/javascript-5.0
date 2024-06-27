// web bocket - 5 times

// console.log("web bocket")
// console.log("web bocket")
// console.log("web bocket")
// console.log("web bocket")
// console.log("web bocket")


//in loop

// let i = 1;
// for (i = 1; i <= 5; i++) {
//     console.log("web bocket")
// }

//calculate the sum of 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5 ; i++) {
//    sum = sum + i;
//  }
//   console.log("sum = " ,sum )


// let sum = 0;
// for (let i = 1; i <= 100 ; i++) {
//    sum = sum + i;
//  }
//   console.log("sum = " ,sum )


// let i = 1;
// while(i <= 5){
//     console.log("i = ", i)
//   i++;
// }

// let i = 5;
// do{
//     console.log("web bocket")
//     i++;
// }while (i <= 10);

//for-of loop --
// let str = "webbocket";
// ierate the characters
// for(let i of str){
//     console.log(i)
// }

// let str = "javascript"
// let size = 0;
// for(let i of str){
//     console.log("i = ",i)
//     size++;
// }
// console.log("string size = ",size  )

let student = {
    name: "jyotipriya",
    age: 20 ,
    sgpa: 9.1,
    ispass: true,
}

// left side pat is my keys and right side part is my values
// here name,age,sgpa,ispass is my keys
// jyotipriya ,20,9.1,true is my values



for(let key in student){
    console.log("key = ", "value = ", student[key])
}