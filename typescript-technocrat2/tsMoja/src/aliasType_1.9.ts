{

    //1-9 Type alias in typescript
    
    type std = {
        name:string;
        age:number;
        gender:string;
        contactNmbr? :string;
        address:string
    }
    
    /*
    const std1:{
        name:string;
        age:number;
        gender:string;
        contactNmbr :string;
        address:string
    }={
        name:"sohel",
        age:35,
        gender:"male",
        contactNmbr:"01823012222555",
        address:"rangunia,chattogram"
    }
        */
    const std1:std={
        name:"sohel",
        age:35,
        gender:"male",
        contactNmbr:"01823012222555",
        address:"rangunia,chattogram"
    }
    console.log(std1)

    // const std2:{
    //     name:string;
    //     age:number;
    //     gender:string;
    //     address:string
    // }
    
    const std2:std={
        name:"shahid",
        age:33,
        gender:"male",
        address:"uttara,dhaka"
    }
    console.log(std2)

    type Add = (x:number,y:number)=>number;
    // const add = (x,y)=>x+y;
    const add:Add = (x,y)=>x+y;
    add(4,5);
    console.log(add(1,44));



}