function wiseSpending(monthlyLimit, expenditures){
    let monthlyBudget = monthlyLimit;
    let weeklyLimit = monthlyBudget / 4;


    console.log('Monthly Limit: ' + monthlyLimit +'\n\n');

    
    for (let index = 0; index < expenditures.length; index++) {
       console.log('Week ' + (index+1) + ' Limit: ' + weeklyLimit);

       let overMoney = null;
       
       if (expenditures[index] < weeklyLimit) { // 500 - 200
            overMoney = weeklyLimit - expenditures[index]; // 300
            weeklyLimit = weeklyLimit + overMoney; // 500 + 300 = 800
            console.log('Week ' + (index+1) + ' Expenses: ' + expenditures[index]);
       } else {
            overMoney = expenditures[index] - weeklyLimit;
            weeklyLimit = weeklyLimit - overMoney;
            console.log('Week ' + (index+1) + ' Expenses: ' + expenditures[index]);
       }
     
       
       let remainingBalance = weeklyLimit - expenditures[index];
       if (remainingBalance >= 0) {
        console.log('Status: Under'+'\n\n');
       } else {
        console.log('Status: Over' +'\n\n');
       } 
    }

    let expenses = null;
    for (let indexExpense = 0; indexExpense < expenditures.length; indexExpense++) {
        expenses += expenditures[indexExpense];    
    }
    
    let saved = monthlyBudget - expenses;

    console.log('Total Expenses: ' + expenses);
    console.log('Total Saved: '+ saved);
}
console.log(wiseSpending(2000,[500, 800, 200, 400]));
//console.log(wiseSpending(4000,[800, 1100, 1300, 1500]));
//console.log(wiseSpending(10_000,[1_000, 4_567, 2_450, 1_782]));