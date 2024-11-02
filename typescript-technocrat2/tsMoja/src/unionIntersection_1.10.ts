{

    //1-10 Union and Intersection types

    //union means othoba type---> | (1t hobe)

    type FrontendDeveloper = 'fakibazdeveloper' | 'juniorDeveloper';
    type FullstackDeveloper = 'frontendDeveloper' | 'fullstackDeveloper';
    type Developer = FrontendDeveloper | FullstackDeveloper;

    const newDeveloper : FrontendDeveloper = 'juniorDeveloper'

    type User = {
        name:string;
        email:string;
        age:number;
        contactNumber?:"string";
        bloodGroup:"O+"|"A+"|"B-"

    } 

    const user : User = {
        name:"shahid",
        email:"a@b.c",
        age:35,
        bloodGroup:"O+"
    }

    //intersection means common type--------> & (1t hobe)

    type FrontendDeveloper2 = {
        skills:string[],
        designation1 :"frontend developer"
    }
    type BackendDeveloper2 = {
        skills:string[],
        designation2:"backend developer"
    }

    type FullstackDeveloper2 = FrontendDeveloper2 & BackendDeveloper2;

    const fullstackDeveloper2 :FullstackDeveloper2={
        skills:["html","css","js","express js","posrgresql"],
        designation1:"frontend developer",
        designation2:"backend developer"
    }



}