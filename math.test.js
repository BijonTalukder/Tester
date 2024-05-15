import {it, test,expect } from "vitest";
import { add } from "./math";
it('should return the correct sum if array of number provided',()=>{
   //arrange
 const numbers = [1,2,3]
 const expectedResult = numbers.reduce((acc,cur)=>acc+cur)

 //actions
    const result = add(numbers)

    //assertion
    expect(result).toBe(expectedResult)
})
it('should should provide NANif at least one invalid number',()=>{
    //arrange
  const numbers = [1,'invalid',3]
  const expectedResult = numbers.reduce((acc,cur)=>+acc + +cur)
 
  //actions
     const result = add(numbers)
 
     //assertion
     expect(result).toBeNaN()
 })
 it('should should provide result if number is numaric',()=>{
    //arrange
  const numbers = ['1','2','3']
  const expectedResult = numbers.reduce((acc,cur)=>+acc + +cur)
 
  //actions
     const result = add(numbers)
 
     //assertion
     expect(result).toBe(expectedResult)
 })

 it('should should throw error if no arg passed',()=>{
  const result =()=>{
    add()
  }
  expect(result).toThrow()
  
//     try {
//     const result = add()
//    } catch (error) {
//     console.log(error);
//     expect(error).toBeDefined()
    
//    }
 })

 it('should should throw error if multiple arg passed',()=>{
    const result =()=>{
      add(1,2,3)
    }
    expect(result).toThrow(/is not iterable/i)
    
  //     try {
  //     const result = add()
  //    } catch (error) {
  //     console.log(error);
  //     expect(error).toBeDefined()
      
  //    }
   })