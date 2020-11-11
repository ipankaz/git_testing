const {Users,Posts} = require('../db/models')

async function createNewPost(userId,title,body){
    const post = await Posts.create({
        userId,
    title,
    body
    })
    return post

}
async function findAllPost(){
    // TO-DO query handle params
    const posts = await Posts.findAll({
        include:[Users]
    })
        return posts
}

//Test Code

// async function task(){
 //     console.log(await createNewPost(1,'This is 1st sample Title','This is 1st sample body'));
//     console.log(await createNewPost(2,'This is 2nd sample Title','This is 2nd sample body'));
 //     console.log(await createNewPost(3,'This is 3rd sample Title','This is 3rd sample body'));
// const poste = await findAllPost();
// for (const p of poste) {
//     console.log(`Title : ${p.title} | author : ${p.user.username} | body : ${p.body}\n`);
// }
// }
// task();

module.exports ={ 
    findAllPost,createNewPost
}

