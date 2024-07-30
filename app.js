var users = [
    {userName:'Fateme',age:20,gender:'female'},
    {userName:'Ali',age:21,gender:'male'},
    {userName:'Zahra',age:22,gender:'female'},
    {userName:'Masoud',age:23,gender:'male'},
    {userName:'Zeinab',age:24,gender:'female'},
    {userName:'Mohammad',age:25,gender:'male'},
    {userName:'Mobina',age:26,gender:'female'},
    {userName:'Ahmad',age:27,gender:'male'},
    {userName:'Faeze',age:28,gender:'female'},
    {userName:'Saeed',age:29,gender:'male'},
];   
function showUsersList(){
    for(var index=0;index<users.length;index++){
        if(users[index].gender=='male'){
            var males=document.createElement("li");
            males.innerText=users[index].userName;
            document.getElementById("male-list").appendChild(males);     
        }else if (users[index].gender=='female'){
            var females=document.createElement("li");
            females.innerText=users[index].userName;
            document.getElementById("female-list").appendChild(females);    
        }  
    } 
};