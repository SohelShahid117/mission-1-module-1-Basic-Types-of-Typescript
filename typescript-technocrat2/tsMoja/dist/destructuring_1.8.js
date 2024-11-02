"use strict";
{
    //1-8 Destructuring in typescript
    //object destructuring
    const user = {
        id: 117,
        name: {
            firstName: "sohel",
            lastName: "shahid"
        },
        email: "a@b.c",
        cont: "01778855690",
        address: "ctg"
    };
    const { address, name: { firstName, lastName } } = user;
    console.log(address);
    console.log(firstName);
    //array destructuring
    const myFrnds = ["abul", "babul", "bulbul", "makbul", "habul", "kabul", "karim,rahim"];
    // let myFrnds:string[] = ["abul","babul","bulbul","makbul","habul","kabul"]
    const [a, b, c] = myFrnds;
    console.log(b);
    const [, , , myBstFrnd, , ...others] = myFrnds;
    console.log(myBstFrnd);
    console.log(others);
}
