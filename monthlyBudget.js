function wiseSpending(monthlyLimit, expenditures) {
    // your code here
    
    const weeklyLimit = monthlyLimit/4;
    let result = 'Monthly Limit: '+ monthlyLimit+'\n\n';
    let totalExpense = 0;
    let totalSaved = 0;
    let counter = 1;
    let limit = weeklyLimit;

    for(let i = 0; i < expenditures.length; i++ ){
          totalExpense += expenditures[i];
    
        if(expenditures[i] <= limit){
          result += 'Week '+counter+' Limit: '+(limit)+'\nWeek '+counter+' Expenses: '+expenditures[i]+'\nStatus: Under\n\n';
          if(expenditures[i] != limit){          
              limit += weeklyLimit-expenditures[i];
          }else{
              limit = weeklyLimit;
          }     
          
        }
        else if(expenditures[i] > limit){
            
          result += 'Week '+counter+' Limit: '+(limit)+'\nWeek '+counter+' Expenses: '+expenditures[i]+'\nStatus: Over\n\n';
          if(expenditures[i] > limit){
              limit -= expenditures[i] - weeklyLimit;
          }       
      
        }   
    counter++;
    };
    
    totalSaved = monthlyLimit - totalExpense;
    //+'Total Expenses:'+totalExpense+'\nTotal Saved: '+totalSaved
    result+='Total Expenses: '+totalExpense+'\nTotal Saved: '+totalSaved;
    return result;
  }

console.log(wiseSpending(2000,[500, 800, 200, 400]));
//console.log(wiseSpending(4000,[800, 1100, 1300, 1500]));
//console.log(wiseSpending(10_000,[1_000, 4_567, 2_450, 1_782]));
  