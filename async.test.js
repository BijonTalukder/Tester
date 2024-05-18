import { it,expect,beforeAll,afterAll,beforeEach,afterEach } from "vitest"
import { encryptMessage, encryptedMessagePromise } from "./async"
import CryptoJS from "crypto-js";

beforeAll(()=>{
    console.log('Before All')

})
afterAll(()=>{
    console.log('After All');
})
beforeEach(()=>{
    console.log('before each');
})
afterEach(()=>{
    console.log('After each');
})

it('should encrypt a message',async()=>{
    const message = 'hellow world'
    const secretKey= '34324'
    const encryptedData = await new Promise((resolve,reject)=>{
        encryptMessage(message,secretKey,(m)=>{
            resolve(m)
        })
    })
    expect(encryptedData).toBeDefined()
})

it('should also just pass',async()=>{
    const message = 'hellow world'
    const secretKey= '34324'
const encryptedData = await encryptedMessagePromise(message,secretKey)
expect(encryptedData).toBeDefined()
})
it('should encrypt msg correct',async()=>{
    const message ={
        name:'Bijon',
        password:'1234'
    }
    const secretKey='asdfghj'
const encryptedData = await encryptedMessagePromise(JSON.stringify(message),secretKey)
// const decryptedMessage  = ''
const decryptedMessage = CryptoJS.AES.decrypt(encryptedData,secretKey).toString(CryptoJS.enc.Utf8)
expect(decryptedMessage).toBe(JSON.stringify(message))
})