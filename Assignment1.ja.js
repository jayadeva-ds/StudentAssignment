import {question} from "readline-sync"
let students = [
    {
         rollNo: 101,
    name: "John",
    class: 10,
    gender: "M",
    testScores: [
      { subName: "Math", marks: null },
      { subName: "Science", marks: null },
      { subName: "English", marks: null }
    ]
    },
    {
        rollNo: 102,
   name: "Jai",
   class: 10,
   gender: "M",
   testScores: [
     { subName: "Math", marks: null },
     { subName: "Science", marks: null },
     { subName: "English", marks: null }
   ]
},
{
    rollNo: 103,
name: "pradeep",
class: 10,
gender: "M",
testScores: [
 { subName: "Math", marks: null },
 { subName: "Science", marks: null },
 { subName: "English", marks: null }
]
}

]
function displayMenu(){
    console.log(`****Display Menu ****\n
        1)take a test \n
        2)Generate Result \n
        3)view Result \n
    `);
    const userIp=question("enter ur option");
    if(userIp == 1){
        handleTakeTest

    }else if (userIp ==2){
        handleGenerateResult()
    }
    else if (userIp ==3){
        handleViewResult()
    } else {
        console.log("wrong input");
        displayMenu()
    }
}

