function task (n){
    lr = "<<<<<<<<<<<<<<<<<<<<<<<< "
    rr = " >>>>>>>>>>>>>>>>>>>>>>>>"

    console.log (lr+ "Task# "+ n + rr);
    

}
function findTargetSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return true;
            }
        }
    }
    return false;
}
function  sumWithFirstNeg(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i]>0){
            sum=sum+arr[i];

        }else{
            break;
        }
        
    }
    console.log(sum)
}
//7


function taskStringFor(str){
    let resultString = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            resultString += str[i] + " ";
        } else {
            resultString += " ";
        }
    }
    console.log(resultString.trim());

}
function addSpacesForOf(str) {
    let resultString = "";

    for (const char of str) {
        if (char !== " ") {
            resultString += char + " ";
        } else {
            resultString += " ";
        }
    }

    return resultString.trim();
}
function addSpacesForIn(str) {
    let resultString = "";

    for (const index in str) {
        const char = str[index];
        if (char !== " ") {
            resultString += char + " ";
        } else {
            resultString += " ";
        }
    }
    return resultString;

}
function addSpacesWhile(str) {
    let resultString = "";
    let i = 0;

    while (i < str.length) {
        if (str[i] !== " ") {
            resultString += str[i] + " ";
        } else {
            resultString += " ";
        }
        i++;
    }

    return resultString
}









module.exports ={
    findTargetSum,
    task,
    sumWithFirstNeg,
    taskStringFor,addSpacesForOf,
    addSpacesForIn,
    addSpacesWhile
}