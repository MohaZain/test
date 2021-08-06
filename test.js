class Test {
    
    constructor(users){
        this.users = users;
    }
    
    showUsers(){
        let usersNames = [];
        for (let i = 0; i < this.users.length; i++){
            usersNames.push(this.users[i].name);
        }
        return usersNames;
    }
}


let test = new Test([
                     {name: 'Mashael', age: 12},
                     {name: 'Moahmmed', age: 10}
                     ]);
console.log(test.showUsers());
