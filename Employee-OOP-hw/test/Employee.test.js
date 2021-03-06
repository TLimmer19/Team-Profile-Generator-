//require Employee
const Employee = require("../lib/Employee");
// create test for employee 
test('creates Employee object containing "name, id, email')

// test to see if type of new employee is an object


// test if can set name via constructor
test("Can set name via constructor arguments", () => {
    const name = "Jacob";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

// test if can set id via constructor
test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Employee("Brandon", testValue);
    expect(e.id).toBe(testValue);
});

// test if can set email via constructor
test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Catherine", 1, testValue);
    expect(e.email).toBe(testValue);
});

//test to see if getName() returns name test value
test("Can get name via getName()", () => {
    const testValue = "Jacob";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

//test to see if getId() returns id test value
test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Christie", testValue);
    expect(e.getId()).toBe(testValue);
});

//test to see if getEmail() returns email test value
test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Christie", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

//test to see if getRole() returns "Employee"
test("getRole() should return Employee ", () => {
    const testValue = "Employee";
    const e = new Employee("Jacob", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});