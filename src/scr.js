class UserService {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    get username() {
      return this._username;
    }
  
    set username(username) {
      this._username = username;
    }
  
    get password() {
      throw "You are not allowed to get password";
    }

    set password(password) {
        this._password = password;
      }
} 
const p1 = new UserService('user')
console.log(p1.username)
    
