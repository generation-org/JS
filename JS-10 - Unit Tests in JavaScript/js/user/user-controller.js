class UserController{
    
    constructor(){
        this.users = [];
    }
    
    getUsers(){
        return this.users;
    }

    add(user){
        this.users.push(user);
    }

    remove(user){
        this.users = this.users.filter(function(ele){
            return ele != user; 
        });
    }

    findByEmail(email){
        for (i = 0; i < users.length; i++) { 
            if(users[i].email === email)
                return users[i];
        } 
    }

    findById(id){
        for (i = 0; i < users.length; i++) { 
            if(users[i].id === id)
                return users[i];
        } 
    }


}


module.exports = UserController;