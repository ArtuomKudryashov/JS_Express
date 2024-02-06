let name = "Artuom";
let age =  150;

if(age >0 && age < 120){
    if (age >0 && age <21 ){
        console.log("Please take a glass of juice");

    }else if(age >21 && age <=80){
        console.log("May I offer you a glass of wine");

    }else {
        console.log("Maybe kefir?")

    
    }
}else{
    console.log("Invalid input data.")
}

console.log ("<<<<<<<<<<<<<<<<<<<<<Task#2>>>>>>>>>>>>>>>>>>>>")
 
let weight = 123
if (weight >0 && weight < 100){
    if (weight >0 && weight <18.5 ){
        console.log("Мало каши ела");

    }else if(weight >=18.5 && weight <=24.9){
        console.log("Молодец! Так держать!");

    }else if(weight >=25.0&& weight <=29.9){
        console.log("А тортик лучше отдать соседке")
    } else {
        console.log("С завтрашнего дня -на воде  и огурцах!")
    }
}else{
    console.log("Invalid input data.")
}

console.log ("<<<<<<<<<<<<<<<<<<<<<Task#3>>>>>>>>>>>>>>>>>>>>")

age =14
let price = 1000

if(age >0 && age < 120){
    if (age >0 && age <2){
        console.log(`Цена билета =  ${price} * 10% = $${price * 0.1}`);

    }else if(age >=2 && age <=18){
        console.log(`Цена билета =  ${price} * 50% = $${price * 0.5}`);

    }else if(age >18 && age < 65){
        console.log(`Цена билета =  ${price} * 100% = $${price * 1}`);
    
    }else{
        console.log(`Цена билета =  ${price} * 65% = $${price * 0.65}`);

    }
}else{
    console.log("Invalid input data.")
}
