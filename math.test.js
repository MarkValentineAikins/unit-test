const {multiply, substratct, sum, div} = require("./math");
//jestjs.io website for testing purposes
// key words for test are "describe", "It", "test" 
describe ("math", () => {
    it("should sum 2 + 2 to be 4 ", ()=>{
        const result = sum(2,2);
        expect(result).toBe(4);
    });
    it("should multiply 3 * 3 to be 9", ()=>{
    const result = multiply(3,3);
    expect(result).toBe(9);
    });
    
    it("should div 3 / 3 to be 1", ()=>{
    const result = div(3,3);
    expect(result).toBe(1);
    });
    
    it("should substract 4 - 4 to be 0", ()=>{
        const result = substratct(4,4);
        expect(result).toBe(0);
    });

});
test("Array", () => {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    expect(days).toContain("Tuesday");
    expect(days).not.toBe(undefined);
});






