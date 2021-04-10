describe("calculater", function () {


    it("check the sum of 5 and 5 equal to 10", function () {
        const calc = new Calculator(5, 5);
        // assert.strictEqual(calc.a, 20);
        // assert.strictEqual(calc.b, 30);
        assert.strictEqual(calc.sum(), 50);
    });
})