function computeTotalCost(costs, dateNow, saleDiscount) {
    // your solution here

    //Get the date value
      let d = new Date(dateNow);
      let month = d.getMonth() + 1;
      let day = d.getDate();
           
    //Compute the total cost
      let total = 0;
          for (i=0; i<costs.length; i++) {
          total +=costs[i];
      }

      //Verify if the day == month
      if (month == day){
          
          //Get the discountedAmount
          let discount = total * saleDiscount;         
          let discountedAmount = (total - discount)  
        
          //if discountedAmount <500 a 50.00 shipping fee will be added.
          if(discountedAmount <= 500){
               totalDiscountedPrice =discountedAmount + 50
            //Convert the value to 2 decimal places
              let roundedPrice = Math.round((totalDiscountedPrice + Number.EPSILON) * 100) / 100;
                           
              return roundedPrice;

          }
          else{
              
              return discountedAmount;
          }      
  
        }
      //if the total price is < 500 but not sale date 50.00 shipment fee will be added
      else if (total <= 500){
              finalTotal =  total + 50
              let roundedPrice = Math.round((finalTotal + Number.EPSILON) * 100) / 100;
              
              return roundedPrice;
            }
        else
        {
            //return total no delivery fee
            return total;
        }
}


console.log(computeTotalCost([23.54, 47.85, 76.46],"09/09",0.10));
console.log(computeTotalCost([213.54, 12.88, 310.36, 103.22],"07/07",0.20));
console.log(computeTotalCost([45.35, 78.80, 349.50, 120.70, 85.65],"01/31",0.30));