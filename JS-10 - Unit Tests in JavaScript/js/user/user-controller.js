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
        for (i = 0; i < this.users.length; i++) { 
            if(this.users[i].email === email)
                return this.users[i];
        } 
    }

    findById(id){
        for (i = 0; i < this.users.length; i++) { 
            if(this.users[i].id === id)
                return users[i];
        } 
    }


}


module.exports = UserController;