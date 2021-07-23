//Require Intern  
const Intern = require("../lib/Intern");

//create test on Intern class

//test to see if you can set school using our constructor
test("Can set school using constructor", () => {
    const testValue = "School";
    const e = new Intern('Celia', 1, 'Celia@me.com', 'School');
    expect(e.getSchool()).toBe(testValue);
});

//test to see if getRole() returns "Intern"
test('getRole() should return "Intern"', () => {
    const testValue = "Intern";
    const e = new Intern("Melissa", 1, "Melissa@me.com", "School");
    expect(e.getRole()).toBe(testValue);
});

//test to see if getSchool() returns school testvalue
test("Can get School Name via getSchool()", () => {
    const testValue = "School";
    const e = new Intern("Peter", 1, "Peter@me.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});