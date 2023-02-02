function reverseNumber(n)
{
    //Convert a number to a string
    n = n + "";
    revNumber = n.split("").reverse().join("");
   	return revNumber;
}

console.log((reverseNumber(456)));