
import {utils} from "./index"

describe("utils",()=>{
  test("isEmpty",()=>{
    const testCase1="";
    const testCase2="    ";
    const testCase3="test";
    expect(utils.isEmpty(testCase1)).toBeTruthy();
    expect(utils.isEmpty(testCase2)).toBeTruthy()
    expect(utils.isEmpty(testCase3)).toBeFalsy()
  })
})