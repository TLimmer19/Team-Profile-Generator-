//require Manager 
const Manager = require("../lib/Manager");
//create test on manager class

//test to see if you can set officeNumber using our constructor
test("Can set office number using constructor", () => {
    const testValue = "Office Number";
    const e = new Manager("Foo", 1, 'test@test.com', 'officeNumber');
    expect(e.getOfficeNumber()).toBe(testValue);
})

//test to see if getRole() returns "Manager"
test("getRole() should return \"Intern\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", "officeNumber");
    expect(e.getRole()).toBe(testValue);
});

//test to see if getOfficeNumber() returns officeNumber test value
test("Can getOfficeNumber () return the office number", () => {
    const testValue = "OfficeNumber";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});