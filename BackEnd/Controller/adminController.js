const adminModel = require("../Schema/adminSchema")

const createAdmin = async (req, res)=>{
    try {
        const {title, total_tests, free_tests, languages, details,users}= req.body
        if(!title || !total_tests || !free_tests || !languages || !details || !users){
            return res.status(400).json({msg: "Please Fill All Field"})
        }
        const newCourse = new adminModel({title, total_tests, free_tests, languages, details,users})
        await newCourse.save()
        
        res.status(201).json({msg: "Course Save Successfully"})
    } catch (error) {
        console.log("error found on admin Panel", error)
        res.status(500).json({msg: "Course not saved Successfully"})
    }
}
const getAdmin = async (req, res) => {
    try {
        const admins = await adminModel.find();  // Fetch all data from the database
        res.status(200).json(admins);
    } catch (error) {
        console.log("Error fetching admin data", error);
        res.status(500).json({ msg: "Error fetching data" });
    }
};
module.exports = {createAdmin, getAdmin}