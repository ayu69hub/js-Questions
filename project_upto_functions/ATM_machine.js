// ATM Machine
let amount = 21000;

function ATMmachine() {

    while (true) {

        let choice = prompt(
            "ATM Menu:\n1. Check Balance\n2. Withdraw\n3. Deposit\n4. Exit"
        );

        switch (choice) {

            case "1":

                console.log(`Your balance is: ${amount}`);
                break;

            case "2":

                let withdraw = Number(
                    prompt("Enter withdraw amount")
                );

                if (withdraw <= 0) {

                    console.log("Invalid amount");

                } 
                else if (withdraw <= amount) {

                    amount = amount - withdraw;

                    console.log("Withdrawal successful");
                    console.log(`Remaining balance: ${amount}`);

                } 
                else {

                    console.log("Insufficient balance");

                }

                break;

            case "3":

                let deposit = Number(
                    prompt("Enter deposit amount")
                );

                if (deposit <= 0) {

                    console.log("Invalid amount");

                } 
                else {

                    amount += deposit;

                    console.log("Deposit successful");
                    console.log(`Updated balance: ${amount}`);

                }

                break;

            case "4":

                console.log("Thank you for using ATM");
                return;

            default:

                console.log("Invalid choice");

        }

    }

}

ATMmachine();