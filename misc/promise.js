const promise = new Promise((resolve, reject) => {
setTimeout(()=> {
    reject(new Error("Oops!!!"))
}, 1500);
})

promise
.then(name => {
    console.log(name);
})
.catch(err => console.log(err.message));


