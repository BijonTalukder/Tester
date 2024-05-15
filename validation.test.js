import { it,expect,describe } from "vitest";
import { validteEmail } from "./validation";
describe("validteEmail(email)",()=>{
    it('should validate a correct email',()=>{
        const email = 'example@gmail.com'
        const result =()=> validteEmail(email)
      expect(result).not.toThrow()
    
    })
    it('should validate a correct email thorw error',()=>{
        const email = 'example'
        const result =()=> validteEmail(email)
      expect(result).toThrow()
    
    })
    it('throw an error for undefined',()=>{
        const email = 'example'
        const result =()=> validteEmail(undefined)
      expect(result).toThrow('invalid email address')
    
    })
})
