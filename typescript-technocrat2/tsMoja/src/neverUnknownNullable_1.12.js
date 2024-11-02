"use strict";
{
    //1-12 Never,unknown and nullable type
    //nullable type
    const searchName = (value) => {
        if (value) {
            console.log("searching");
        }
        else {
            console.log("name not found");
        }
    };
    // console.log(searchName("shahid"))
    searchName("a");
    searchName(null);
    //unknown type------->typeof()
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`converted speed is ${convertedSpeed}`);
        }
        else if (typeof value === "string") {
            const valueInNumber = value.split(" ");
            console.log(valueInNumber);
            const [val, unit] = valueInNumber;
            // console.log(val,typeof val)
            // console.log(Number(val),typeof val)
            console.log(Number(val), typeof Number(val));
            const convertedSpeed = (parseFloat(val) * 1000) / 3600;
            console.log(`converted speed is ${convertedSpeed}`);
        }
        else {
            console.log("your input is wrong");
        }
    };
    getSpeedInMeterPerSecond(80);
    getSpeedInMeterPerSecond(`95 kmh`);
    getSpeedInMeterPerSecond(undefined);
    //never type
    const throwNever = (val) => {
        throw new Error(val);
    };
    throwNever("enjoy error");
}
