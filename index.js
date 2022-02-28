const express= require("express");
const app = express();
const myModule = require("./arithmeticFunctions");

let myCalculations = [];

app.use(express.urlencoded({extended:false}));

app.listen(3000, function(){
    console.log('The server is running');
});

app.get('/', function(req,res){
    res.send(myCalculations);
});

app.post("/", function(req,res) {
    let newCalculation = req.body;
    myCalculations.push(newCalculation);
    showCalculations();
});

function showCalculations(){
    
    for (i = 0; i < myCalculations.length; i++){
        let myOperation = myCalculations[i].operation;
        let myValue_1 = parseInt(myCalculations[i].value_1);
        let myValue_2 = parseInt(myCalculations[i].value_2);
    
        switch (myOperation){
            case "add":
                console.log("Operation: Addition");
                console.log("value 1: " + myValue_1);
                console.log("value 2: " + myValue_2);
                console.log("Result: " + myModule.add(myValue_1, myValue_2));
                break;
    
            case "sub":
                console.log("Operation: Subtraction");
                console.log("value 1: " + myValue_1);
                console.log("value 2: " + myValue_2);
                console.log("Result: " + myModule.sub(myValue_1, myValue_2));
                break;
    
            case "mul":
                console.log("Operation: Multiplication");
                console.log("value 1: " + myValue_1);
                console.log("value 2: " + myValue_2);
                console.log("Result: " + myModule.mul(myValue_1, myValue_2));
                break;
    
            case "div":
                console.log("Operation: Division");
                console.log("value 1: " + myValue_1);
                console.log("value 2: " + myValue_2);
                console.log("Result: " + myModule.div(myValue_1, myValue_2));
        }
    }

}


