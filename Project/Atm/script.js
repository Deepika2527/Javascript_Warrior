let correctPin = 4321;
let attempts = 0;
let balance = 5000;



try {
    //pin validate


    while (attempts < 3) {
        let entered = Number(prompt("Enter Your PIN No:"));
        attempts++;

        if (entered === correctPin) {
            alert("PIN Verified!Welcome to XYZ Bank....");
            break;
        }
        alert("Incorrect PIN.Try again..")

    }
    if (attempts === 3) {
        throw new Error('Card blocked due to 3 attempts')
    }
    //Main Menu
    let choice;

    do {
        choice = Number(prompt("ATM Menu:\n" +
            "1. Check Balance\n" +
            "2. Deposit Balnce\n" +
            "3. Withdrawl Money\n" +
            "4. Exit\n\n" +
            "Enter your choice(1-4)"
        ));
        if (choice === 1) {
            alert("Your current balance is:" + balance)
        }
        else if (choice === 2) {
            let amount = Number(prompt("Enter the amount to deposit:"));

            if (isNaN(amount) || amount <= 0) {
                alert('Invalid deposit amount!');
                continue;
            }
            balance += amount;
            alert('Depost Sucesfull1\n New Balance:'+ balance)
        }
        //3.Withdrawl
        else if(choice === 3){
            let amount = Number(prompt("Enter the withdrawl amount"));
            if(isNaN(amount) || amount<=0){
                alert("Invalid amount!");
                continue;
            }
            if(amount > balance){
                alert("Insufficeint amount...")
                continue;
            }
            balance -= amount;
            alert("Withdrawl successfully\n Remaining amount:"+balance)
        }
        else if(choice === 4){
            alert("Thank you!collect your card");
            break;

        }
        else{
            alert("Invalid option! Select option 1-4")
        }
    }while(true);
    
}
catch(err){
    alert(err.message)
}
finally{
    console.log("Atm session ended..Thank you..");
    
}