class Cylinder{

    getVolume(radius, height){
    if (isNaN(radius) || isNaN(height)){
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
            
            let volume = (Math.PI * (parseFloat(radiusInCm*radiusInCm)))*parseFloat(heightinCm);

            return volume.toFixed(2);
    }
    else{

        if(Number(radius) > 0 && Number(height) > 0){
            let volume = (Math.PI * (Number(radius*radius)))*Number(height);
            return volume.toFixed(2);}
        else{
            return "Invalid Input";
        }

        }
    }

}


const cylinder = new Cylinder();

console.log(cylinder.getVolume("200cm", "100cm"));
console.log(cylinder.getVolume("200cm", "1m"));
console.log(cylinder.getVolume("2m", "1m"));
console.log(cylinder.getVolume(200,100))
console.log(cylinder.getVolume(-200,-100));
console.log(cylinder.getVolume(0,0));