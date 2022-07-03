let cups = 9;
let water = 400;
let milk = 540;
let beans = 120;
let money = 550;

let form = document.querySelector("form");
form.addEventListener("submit", Choose);


function Choose(event) {
    event.preventDefault();
    let userInput = document.querySelector("#user-input");
    userInput = userInput.value.toLowerCase();
    let text = document.querySelector("#show-action");
    document.getElementById("extra-text").innerHTML="";
    do {
        if (userInput === "remaining") {
            let text = document.querySelector("#show-action");
            text.innerHTML = `The coffee machine has:
            ${water} ml of water
            ${milk} ml of milk
            ${beans} g of coffee beans
            ${cups} disposable cups\"
            $${money} of money`;
            let userInput = document.querySelector("#user-input");
            userInput.value = "";
            return Choose();
        } else if (userInput === "fill") {
            let addWater = parseInt(prompt("Write how many ml of water you want to add:"));
            water += addWater;
            let addMilk = parseInt(prompt("Write how many ml of milk you want to add:"));
            milk += addMilk;
            let addBeans = parseInt(prompt("Write how many g of beans you want to add:"));
            beans += addBeans;
            let addCups = parseInt(prompt("Write how many cups you want to add:"));
            cups += addCups;
            let text = document.querySelector("#show-action");
            text.innerHTML = "In process";
            setTimeout(function(){
                document.getElementById("extra-text").innerHTML="Added";
            },3000);
            setTimeout(function(){
                document.getElementById("show-action").innerHTML="";
            },3000);
            Choose();
            //let text = document.querySelector("#show-action");
            //text.innerHTML = "Write how many ml of water you want to add:";

            //document.getElementById("user-input").value = ""
            //text.innerHTML = "Write how many ml of water you want to add:";
            //let userInput = document.querySelector("#user-input");

            /*document.getElementById("myText").placeholder = "Type name here..";
            document.getElementById("search-text-input").value="";
            document.getElementById("search-text-input").placeholder= `${response.data.name}`;*/

        } else if (userInput === "take") {
            let text = document.querySelector("#show-action");
            text.innerHTML = `I gave you $${money}`;
            money = 0;
            let userInput = document.querySelector("#user-input");
            userInput.value = "";
            return Choose();
        } else if (userInput === "buy") {
            let options = prompt("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
            if (options === "1") {
                if (water >= 250 && beans >= 16 && cups >= 1) {
                    water -= 250;
                    beans -= 16;
                    cups -= 1;
                    money += 4;
                    alert("I have enough resources, making you a coffee!");
                    Choose();
                } else {
                    let notEnough = "";
                    if (water < 250) {
                        notEnough = "water";
                    } else if(beans < 16){
                        notEnough = "beans";
                    } else if(cups < 1){
                        notEnough = "cups";
                    }
                    alert(`Sorry, not enough ${notEnough}!`);
                    Choose();
                }
            } else if (options === "2"){
                let latteSize = prompt("Do you want small or big latte? small - 1, big -2");
                if (latteSize === "1"){
                    if (water >= 350 && beans >=20 && cups >= 1 && milk >= 75){
                        water -= 350;
                        milk -= 75;
                        beans -= 20;
                        cups -= 1;
                        money += 7;
                        alert("I have enough resources, making you a coffee!");
                        Choose();
                    } else {
                        let notEnough = "";
                        if (water < 350) {
                            notEnough = "water";
                        } else if(beans < 20){
                            notEnough = "beans";
                        } else if(cups < 1){
                            notEnough = "cups";
                        }
                        alert(`Sorry, not enough ${notEnough}!`);
                        Choose();
                    }
                }else if (latteSize === "2"){
                    if (water >= 450 && beans >=30 && cups >= 1 && milk >= 115){
                        water -= 450;
                        milk -= 115;
                        beans -= 30;
                        cups -= 1;
                        money += 11;
                        alert("I have enough resources, making you a coffee!");
                        Choose();
                    } else {
                        let notEnough = "";
                        if (water < 450) {
                            notEnough = "water";
                        } else if(beans < 30){
                            notEnough = "beans";
                        } else if(cups < 1){
                            notEnough = "cups";
                        }
                        alert(`Sorry, not enough ${notEnough}!`);
                        Choose();
                    }
                } else if (options === "3"){
                    if (water >= 200 && beans >= 12 && cups >= 1 && milk >= 100){
                        water -= 200;
                        milk -= 100;
                        beans -= 12;
                        cups -= 1;
                        money += 6;
                        alert("I have enough resources, making you a coffee!");
                        Choose();
                    } else {
                        let notEnough3 = "";
                        if (water < 200) {
                            notEnough3 = "water";
                        } else if(beans < 12){
                            notEnough3 = "beans";
                        } else if(cups < 1){
                            notEnough3 = "cups";
                        } else if(milk < 100) {
                            notEnough3 = "milk";
                        }
                        alert(`Sorry, not enough ${notEnough3}!`);
                        Choose();
                    }
                }
            }
        }




    }while (userInput !== "exit");
}
