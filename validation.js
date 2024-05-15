export function validteEmail(email){
    const emaiRegex = /\S+@\S+\.\S+/;
    if(!emaiRegex.test(email)){
        throw new Error("invalid email address")
    }

}
export function validationArrayNotEmpty(arr){
   if(!Array.isArray(arr)|| arr.length ===0)
    {
        throw new Error('Array can not be empty')
    }

}