class Cylinder{

    constructor(radius, height){
        this.radius = radius;
        this.height = height;

    }
   
    //computes the volume of a cylidner
    getVolume(){
        
        //checks if the values are not numbers
        if(isNaN(this.radius) || isNaN(this.height)){
            
            //Used the regex to obtain number and unit of measurement and parse it float.
            let radiusVal = parseFloat(this.radius.match(/\d+/)[0]);
            let radiusUnit = this.radius.match(/[a-zA-Z]+/)[0];
    
            let heightVal = parseFloat(this.height.match(/\d+/)[0]);
            let heightUnit = this.height.match(/[a-zA-Z]+/)[0];
            
            //checks if the unit measurement is in centimeter or meter
            
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
            //compute the volume of the cylinder
            let volume = (Math.PI * (parseFloat(radiusInCm*radiusInCm)))*parseFloat(heightinCm);

            return volume.toFixed(2);

        }
        else{
            //if the given values are numbers and is greater than zero it will compute and if not will display an error.
            if(Number(this.radius) > 0 && Number(this.height) > 0){
                let volume = (Math.PI * (Number(this.radius*this.radius)))*Number(this.height);
                return volume.toFixed(2);}
            else{
                return "Cannot accept invalid Input!";
            }

        }
        
    }

}

//When the values are numbers
const cylinder = new Cylinder(5, 10);
console.log(cylinder.getVolume());

// //When the values are string
// const cylinder1 = new Cylinder("200cm","100cm");
// console.log(cylinder1.getVolume());

// //When the values have different units and are string the radius is in cm and the heigh is in m.
// const cylinder2 = new Cylinder("200cm", "1m")
// console.log(cylinder2.getVolume());

// //When the values have different units and are string the radius is in m and the height is in cm.
// const cylinder3 = new Cylinder("2m", "100cm")
// console.log(cylinder3.getVolume());

// //When the values are negative numbers
// const cylinder4 = new Cylinder(-200, -100)
// console.log(cylinder4.getVolume());

// //When the values are zero based
// const cylinder5 = new Cylinder(0,0)
// console.log(cylinder5.getVolume());

// //When the values are string and negative values when parsed.
// const cylinder6 = new Cylinder("-200","-100")
// console.log(cylinder6.getVolume());

