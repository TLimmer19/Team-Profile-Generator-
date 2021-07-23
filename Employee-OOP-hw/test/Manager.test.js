//require Manager 
const Manager = require("../lib/Manager");
//create test on manager class

//test to see if you can set officeNumber using our constructor
test("Can set office number using constructor", () => {
    const testValue = "Office Number";
    const e = new Manager("Thomas", 1, 'Thomas@me.com', 'officeNumber');
    expect(e.getOfficeNumber()).toBe(testValue);
})

//test to see if getRole() returns "Manager"
test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Christyn", 1, "Christyn@me.com", "officeNumber");
    expect(e.getRole()).toBe(testValue);
});

//test to see if getOfficeNumber() returns officeNumber test value
test("Can getOfficeNumber () return the office number", () => {
    const testValue = "OfficeNumber";
    const e = new Engineer("Jessamyn", 1, "Jessamyn@me.com", "officeNumber");
    expect(e.getOfficeNumber()).toBe(testValue);
});