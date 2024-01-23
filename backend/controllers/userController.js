
const test = (req , res) =>{
    return res.json({'message' : 'This API is tested successfully'});
}

const anotherTest = (req , res) => {
    return res.json({'message' : 'This API in this second controller is tested succcesfully'});
}

module.exports = {test , anotherTest}