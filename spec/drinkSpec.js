describe("drink", function() {
    describe("ageCheck", function() {

        it("should return I can’t tell what drink because that age is incorrect", function() {
            expect(whatCanIDrink(0)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        })

        it("should return Drink Toddy", function() {
            expect(whatCanIDrink(14)).toBe("Drink Toddy");
        })

        it("should return Drink Coke", function() {
            expect(whatCanIDrink(18)).toBe("Drink Coke");
        })

        it("should return Drink Beer", function() {
            expect(whatCanIDrink(21)).toBe("Drink Beer");
        })

        it("should return Drink Whisky", function() {
            expect(whatCanIDrink(130)).toBe("Drink Whisky");
        })
        
        it("should return Sorry. I can’t tell what drink because that age is incorrect!", function() {
            expect(whatCanIDrink("text")).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        })

    })
})
