var users = [
    {userName:'user1',age:20,gender:'female'},
    {userName:'user2',age:21,gender:'male'},
    {userName:'user3',age:22,gender:'female'},
    {userName:'user4',age:23,gender:'male'},
    {userName:'user5',age:24,gender:'female'},
    {userName:'user6',age:25,gender:'male'},
    {userName:'user7',age:26,gender:'female'},
    {userName:'user8',age:27,gender:'male'},
    {userName:'user9',age:28,gender:'female'},
    {userName:'user10',age:29,gender:'male'}
];
function gendersList(){
    var maleList;
    var femaleList;
    for(var index=0;index<users.length;index++){
    if(users[index].gender==='male'){
       maleList=users[index];
    }else if (users[index].gender==='female'){
      femaleList=users[index];
    }  
} 
    return {
        maleList:maleList,
        femaleList:femaleList
    }
}
function handleClick() {
    var liTag=document.createElement("li");
    var divValue=document.getElementById("box1").innerText;
    liTag.innerText=divValue;
    document.getElementById("box1").appendChild(liTag);

}
function handleClick2() {
    var liTag2=document.createElement("li");
    var divValue=document.getElementById("box2").innerText;
    liTag2.innerText=divValue;
    document.getElementById("box2").appendChild(liTag2);
}