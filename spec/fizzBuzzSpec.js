describe("fizzBuzzProblem", function() {
    describe("fizzBuzz", function() {

        it("30 should return FizzBuzz", function() {
            expect(mod(30)).toBe("FizzBuzz");
        })

        it("6 should return Fizz", function() {
            expect(mod(6)).toBe("Fizz");
        })

        it("10 should return Buzz", function() {
            expect(mod(10)).toBe("Buzz");
        })
        it("text should reurn Error!", function() {
            expect(mod("text")).toBe("Error!")
        })
        it("4 should reurn 4", function() {
            expect(mod(4)).toBe(4)
        })

    })
})
