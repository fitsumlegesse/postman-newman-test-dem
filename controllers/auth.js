// the message/content that will be served when a client
// req the "/:message route. The response is exported to
// the auth.js file in routes

// we are importing the user model we created in models/users.js

import jwt from 'jsonwebtoken'


export const register = async (req,res)=>{
    
    // the contents the client submited are acced using req.body we will then destracture the contents we will need 
    const {name, email, password} = req.body

    //verifying the contents posted/sent by the client is correct
    if(!name)return res.status(400).send('Name is required')
    if(!password || password.length < 6)
        return res
            .status(400)
            .send("Password is required and should be min 6 chars long")
    let userExist = await User.findOne({email}).exec()
    if(userExist) return res.status(400).send('Email is taken')


    //Once the contents submitted/posted are verified, we will create the account using the user schema
    const user = new User(req.body)

    // Once we created the user, we will save it to the database 
    try {
        await user.save()
        console.log("User created", user.name)
        return res.json({user})
        
    } catch (error) {
        console.log("Create User Failed", user)
        return res.status(400).send("Error. Try again")
    }
}

export const somedata = async (req,res)=>{
    const responseData = {
        id:5687785632,
        name: "Fitsum Legesse",
        age: "25",
        role: "Consultant I",
        resportsTo: "Mike T",
        office: "PNW"
    }
     
    const jsonContent = JSON.stringify(responseData);
    res.end(jsonContent);
  };

