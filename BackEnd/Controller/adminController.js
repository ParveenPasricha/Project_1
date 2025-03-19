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
        const admins = await adminModel.find();
        res.status(200).json(admins);
    } catch (error) {
        console.log("Error fetching admin data", error);
        res.status(500).json({ msg: "Error fetching data" });
    }
};
const updateAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedAdmin = await adminModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedAdmin) {
            return res.status(404).json({ msg: "Admin record not found" });
        }

        res.status(200).json({ msg: "Admin updated successfully", updatedAdmin });
    } catch (error) {
        console.log("Error updating admin", error);
        res.status(500).json({ msg: "Update failed", error });
    }
};
const deleteAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAdmin = await adminModel.findByIdAndDelete(id);

        if (!deletedAdmin) {
            return res.status(404).json({ msg: "Admin record not found" });
        }

        res.status(200).json({ msg: "Admin deleted successfully" });
    } catch (error) {
        console.log("Error deleting admin", error);
        res.status(500).json({ msg: "Delete failed", error });
    }
};

module.exports = {createAdmin, getAdmin, updateAdmin, deleteAdmin}