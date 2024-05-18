import CryptoJS from "crypto-js";
// const CryptoJS = require('crypto-js')
export function encryptMessage(message,key,callback){
    const encryptedMessage = CryptoJS.AES.encrypt(message,key).toString()
    callback(encryptedMessage)
}

export function encryptedMessagePromise(message,key){
    return new Promise((resolve,reject)=>{

setTimeout(() => {
    const encryptedMessage = CryptoJS.AES.encrypt(message,key).toString()
    if(encryptMessage){
        resolve(encryptedMessage)
    }
    else{
        reject(new Error('failed to encrypt message'))
    }
}, 2000);
    })
}


const message ={
    name:'Bijon',
    password:'1234'
}
const secretKey='asdfghj'
encryptMessage(JSON.stringify(message),secretKey,(encryptMessage)=>{
    console.log(encryptMessage);
})

encryptedMessagePromise(JSON.stringify(message),secretKey).then(e=>console.log(e))