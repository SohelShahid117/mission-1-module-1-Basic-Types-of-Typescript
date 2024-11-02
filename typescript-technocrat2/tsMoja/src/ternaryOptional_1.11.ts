{
  //1-11 Ternary, optional chaining & nullish coalescing operator

  const age: number = 18;

  if (age >= 18) {
    console.log("adult");
  } else {
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
  const result = isAuthenticated ?? "guest";
  console.log(result);
  console.log({ result });

  const result2 = isAuthenticated ? isAuthenticated : "abc";
  console.log(result2);
  console.log({ result2 });

  //now optional chaining

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      permanentAddress?: string;
      presentAddress: string;
    };
  };

  const user: User = {
    name: "shahid",
    address: {
      city: "ctg",
      road: "abc",
      presentAddress: "ctg town",
    //   permanentAddress: "Rangunia",
    },
  };

//   const permaAdrs = user.address.permanentAddress;
  const permaAdrs = user?.address?.permanentAddress ?? "no permanent address";
  //here apply optional chaining & nullish coalescing operator
  console.log(permaAdrs)
  console.log({permaAdrs})





}
