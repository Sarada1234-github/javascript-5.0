

if (age >= 18){
    console.log("you can vote");

}else {
    console.log("you can not vote")
}

//let age = 12;

//if ( age >= 18){
    //console.log("i can apply for licence");

     //else{
  //  console.log("i can't apply for licence")
 








let node = "dark";
let color;
if(node === "dark"){
    color = "black";

} elseif(node === "blue"){  
    color = "blue";

} else if (node === "pink") {
    color = "pink";

}
console.log(color);

//write a code which cam give grades to student according to their scores:-
//80 - 100(a)
//70-89(b)
//60-69(C)
//50-59(D)
//0-49(f)


// make the above question in switch case


let score = 0;
let grade;

if (score >= 90 && score <= 100){
    grade = "A"

 } else if (score >=70 && score <= 89 ){
    grade = "B"
}else if (score >= 60 && score <= 79) {
    grade = "c"
} else if (score >= 50 && score <= 69) {
    grade = "D"
}else if (score >= 0 && score <= 49) {
    grade = "F"
}

console.log("according to your score , your grade is",grade)

