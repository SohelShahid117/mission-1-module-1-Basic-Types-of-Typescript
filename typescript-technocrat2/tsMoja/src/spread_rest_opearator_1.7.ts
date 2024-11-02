{
   
//1-7 Spread and Rest Operator
    
const poorUser = {
    name:"shahid",
}

//spread operator 
let brothers1 = ["tarek","arif","rakib","sayed"]

//  const brothers1:string[] = ["tarek","arif","rakib","sayed"]
//  const brothers2:string[] = ["alamgir","jahangir","arafat","iqbal"]

 let brothers2:string[] = ["alamgir","jahangir","arafat","iqbal"]

//  brothers1.push(brothers2)--->this is wrong
brothers1.push(...brothers2)

const mentors1 = {
    typescript:"mezbah",
    redux:"nahid",
    dbms : "mir"
}

const mentors2 = {
    nextJS :"firoz",
    prisma:"tanmoy",
    cloud:"mizan"
}

const mentorList = {
    ...mentors1,
    ...mentors2
}
console.log(mentorList)


//rest operator

/*
const amarFriend=(frnd1,frnd2,frnd3)=>{
    console.log(`hello ${frnd1},hi ${frnd2},how r u ${frnd3}`)
}
*/
const amarFriend=(...frnds:string[])=>{
    // console.log(`hello ${frnd1},hi ${frnd2},how r u ${frnd3}`)
    frnds.forEach((element:string)=> {
        console.log(`hi ${element}`)
    });
}
amarFriend("abul","babul","bulbul")
amarFriend("abul","babul","bulbul","makbul","kabul","jambul");



}