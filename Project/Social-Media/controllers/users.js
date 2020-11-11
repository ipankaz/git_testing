const { Users } = require('../db/models');
const {RandomUsernameGenerator} = require('../Utilities/username');



async function createAnonUser(){
    const user = await Users.create({
        username:RandomUsernameGenerator()
    })
    return user;
}

async function getUserById(id){
    return await Users.findOne({where:{id}})
}
async function getUserByName(username){
    return await Users.findOne({where:{username}})
}
// Test Code

// async function task(){
//     console.log(await createAnonUser());
//     console.log(await createAnonUser());
//     console.log(await createAnonUser());
// }
// task();

module.exports = {
    createAnonUser,
    getUserById,
    getUserByName
}