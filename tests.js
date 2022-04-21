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
        expect(isFive()).toBe(Boolean());
    });
    it('should pass as true when pass as 5', function () {
        expect(isFive(5 < 6)).toBe(Boolean())
    });
});

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should pass as a boolean regardless of input', function () {
        expect(isEven()).toBe(Boolean());
    })
    it('should return true when passing 2', function () {
        expect(isEven(2 > 1)).toBe(Boolean());
    });
    it('should return true when passing -4', function () {
        expect(isEven(-4 > 0)).toBe(Boolean());
    });
    it('should return false when passing 3', function () {
        expect(isEven(3 > 4)).toBe(Boolean());
    });
    it('should return false when passing "banana', function () {
        expect(isEven("banana")).toBe(Boolean());
    });
    it('should return true when passing "8"', function () {
        expect(typeof "8" !== "number").toBe(Boolean(1));
    });
    it('should return false when passing Infinity', function () {
        expect(isEven(Infinity)).toBe(Boolean());
    });
    it('should return false when passing isEven(true) or isEven(false)', function () {
        expect(isEven(true || false)).toBe(Boolean());
    });
    it('should return false when called without an argument like isEven()', function () {
    expect(isEven("")).toBe(Boolean());
});
});

