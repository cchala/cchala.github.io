
describe("calculator of constructor function", function () {
    let calc;  
    before(function () {
        calc = new Calculator();
        calc.setValue(5,5)
        
    });

    it("The sum of 5 and 5 is 10", function () {
        assert.strictEqual(calc.a, 5);
        assert.strictEqual(calc.b, 5);
        assert.strictEqual(calc.sum(), 10);
    });
    it("Subtract of 5 and 5 is 0", function () {
        assert.strictEqual(calc.a, 5);
        assert.strictEqual(calc.b, 5);
        assert.strictEqual(calc.sub(), 0);
    });

    it("Divide 5 and 5 is 1", function () {
        assert.strictEqual(calc.a, 5);
        assert.strictEqual(calc.b, 5);
        assert.strictEqual(calc.div(), 1);
    });

    it("Multiplication of 5 and 5 is 25", function () {
        assert.strictEqual(calc.a, 5);
        assert.strictEqual(calc.b, 5);
        assert.strictEqual(calc.mul(), 25);
    });
   
    
});