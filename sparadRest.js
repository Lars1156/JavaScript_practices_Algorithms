function number(a,b , ...restNumber){
    console.log(restNumber);
    console.log(restNumber[0]);
    console.log(restNumber[0]+restNumber[1]);
    
    return a+b
}

console.log(number(2,3,4,5,6));


const student = {
    name: "kishan",
    age : 23,
    hubbies :['cricket' , 'fotball']
}
console.log('origanal object' , student);

const newStudent ={
    ...student,
    name:"particular"
}
console.log("" , newStudent);
