"use strict";
var _a, _b;
{
    //1-11 Ternary, optional chaining & nullish coalescing operator
    const age = 18;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("child");
    }
    //Ternary operator
    const isAdult = age >= 18 ? "adultttt" : "childddd";
    console.log(isAdult);
    //nullish coalescing operator
    //null or undefined er opor base kore kono 1t decision make korte hole tokon nullish coalescing operator use hobe
    //r tuthy || falsy value er upor decision make korte hole ternary operator use korte hobe
    // const isAuthenticated = null;
    const isAuthenticated = undefined;
    // const isAuthenticated = "";
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "guest";
    console.log(result);
    console.log({ result });
    const result2 = isAuthenticated ? isAuthenticated : "abc";
    console.log(result2);
    console.log({ result2 });
    const user = {
        name: "shahid",
        address: {
            city: "ctg",
            road: "abc",
            presentAddress: "ctg town",
            //   permanentAddress: "Rangunia",
        },
    };
    //   const permaAdrs = user.address.permanentAddress;
    const permaAdrs = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "no permanent address";
    //here apply optional chaining & nullish coalescing operator
    console.log(permaAdrs);
    console.log({ permaAdrs });
}
