function myGeeks(radius, height) {
 
    
    let radiusVal = parseFloat(radius.match(/\d+/)[0]);
    let radiusUnit = radius.match(/[a-zA-Z]+/)[0];

    let heightVal = parseFloat(height.match(/\d+/)[0]);
    let heightUnit = height.match(/[a-zA-Z]+/)[0];
    
    //Convert the units to common units, for example in cm

    let radiusInCm;
    if (radiusUnit === "m")
    {
        radiusInCm = radiusVal*100;
    }
    else{
        radiusInCm = radiusVal
    }

    let heightinCm;
    if(heightUnit === "m"){
        heightinCm = heightVal*100;
    }
    else{
        heightinCm = heightVal
    }
    console.log(radiusInCm);
    console.log(heightinCm);
    volume = (Math.PI * (parseFloat(radiusInCm*radiusInCm)))*parseFloat(heightinCm);
    return volume.toFixed(2);
}
    
//console.log(myGeeks(50,100));
console.log(myGeeks("200cm", "100cm"));
console.log(myGeeks("200cm", "1m"));
console.log(myGeeks("2m", "1m"));
//console.log(myGeeks("5m", "1m"));