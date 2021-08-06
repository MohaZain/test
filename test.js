
class Test {
    
    constructor(users){
        this.users = users;
    }
    
    showUsers(){
        return this.users.map((user) => user.name);
    }
    
}


let test = new Test([
                     {name: 'Mashael', age: 12},
                     {name: 'Moahmmed', age: 10},
                     {name: 'khaled' , age:9}
                     ]);
console.log(test.showUsers());
