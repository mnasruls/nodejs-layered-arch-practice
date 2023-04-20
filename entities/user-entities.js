class User{
    constructor(object = false){
        if (object){
            const {name, username, email, address, desc, id, dob}= object
            this.id = id
            this.name = name
            this.username = username
            this.email = email
            this.address = address
            this.desc = desc
            this.dob = dob
        }
    }

    setName = (name) =>{
        this.name = name
        return this
    }
    getName = ()=> {
        return this.name
    }

    setUsername = (username) =>{
        this.username = username
        return this
    }
    getUsername = ()=> {
        return this.username
    }

    setEmail = (email) =>{
        this.email = email
        return this
    }
    getEmail = ()=> {
        return this.email
    }

    setAddres = (address) =>{
        this.address = address
        return this
    }
    getAddres = ()=> {
        return this.address
    }

    setDesc = (desc) =>{
        this.desc = desc
        return this
    }
    getDesc = ()=> {
        return this.desc
    }

    setDob = (dob) =>{
        this.dob = dob
        return this
    }
    getDob = ()=> {
        return this.dob
    }
}

module.exports = User