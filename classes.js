class User {
    constructor(username, email, password){          //
        this.username = username;
        this.email = email;
        this.password = password;
    }
      
     encryptPassword(){
        return `${this.password}abc`
     }

     changeUsername(){
        return `${this.username.toUpperCase()}`
     }

} 

const dipin = new User("dipin", "demo@gmail.com", "qwerty")
 console.log(dipin.encryptPassword());
 console.log(dipin.changeUsername());


     class Admin extends User{
        constructor(username, email, password, role){
            super(username, email, password)
            this.role = role
        }

        addMember(){
            console.log(`A new member was added by ${this.username}`);
        }
     }

     const member = new Admin("Jay", "jay@demo.com", "123")
     
     member.addMember()