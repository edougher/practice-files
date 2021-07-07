console.log("Start");


function login(email, password, callback){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('login');
        resolve({username: email})
        },1000)
    })
}




function getUserVids(email){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['vid1', 'vid2', 'vid3']);
        }, 1000);
    })
}
    



// let userLogin = login('stevo', '123456', user => {
//    console.log(user)
// })

login('ted', '123456')
.then(user => getUserVids(user.username))
.then(videos => console.log(videos[0]))



console.log("End");


