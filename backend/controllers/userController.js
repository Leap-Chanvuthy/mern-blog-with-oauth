
const getUsers = async (req , res , next) =>{
   return res.json({"message" : "Hello from users"});
}

module.exports = {getUsers};