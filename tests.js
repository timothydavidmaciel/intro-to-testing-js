// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return a string that says "Hello, Jane!"', function () {
        expect(sayHello("Jane")).toBe('Hello, Jane!');
    });
    it('should return a string that says "Hello, Alex!"', function () {
        expect(sayHello("Alex")).toBe('Hello, Alex!');
    });
    it('should return a string that says "Hello, Pat!"', function () {
        expect(sayHello("Pat")).toBe('Hello, Pat!');
    });
    it("should return the string 'Hello, World!'", function () {
        expect(sayHello("")).toBe('Hello, ' + "" + '!');
    });
    it("should never return 'undefined' when called", function () {
        expect(sayHello()).not.toBe(undefined);
    });
});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
it('should pass as a boolean regardless of input', function () {
    expect(isFive(5 < 6)).toBe(Boolean())
});
});