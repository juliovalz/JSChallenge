const phone_price = 507.88;
const tax = .016;
const accesory_price = 31.22;
var amount = 0;
var bank_acount = 548;


while(amount<=bank_acount){
    if(amount+phone_price+accesory_price>bank_acount){
        if(amount==0){
            console.log("You don't have enough money")
        }
        break;
    }
    amount = amount+phone_price+accesory_price;
}


function calculateFinalAmount(amnt) {
    amnt = amnt + (amnt * tax);
    if(amnt<bank_acount){
        return amnt;
    }
    else {
        console.log("Sorry! you cant pay this!")
        return amnt;
    }

}

function format(amnt){
   console.log ("Final price: $" + amnt.toFixed( 2 ));
}

amount = calculateFinalAmount(amount);
format(amount);

