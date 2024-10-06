import User from "../models/user_model.js"; // Ensure the correct file extension
import bcrypt from "bcryptjs";


export const signup = async (req, res) => {   
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        // console.log(user);  
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 12); 

        const newUser = await new User({ fullname: fullname, email: email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.log("Error:  " , error.message);
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);
        if(!user || !isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        else {
        res.status(200).json({ message: "Login successful" , user: {id : user._id, fullname: user.fullname, email: user.email} });




        }
    }
    catch (error) {
        console.log("Error:  " , error.message);
        res.status(500).json({ message: "Something went wrong" });
    }

}




