describe("Calculator", function() {
    describe("Addition tests", function() {
        
        beforeEach(function(){
            calc = new Calculator;
        }),
        
        
        it("should return 42", function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        })
        it("should return 26", function() {
            calc.add(7);
            calc.add(19)
            expect(calc.value).toBe(26)
        })
        it ("should return and error if we done supply two nummbers", function() {
           spyOn(window,"alert");
           calc.add("Hitchhikers");
           expect(window.alert).toHaveBeenCalledWith("Error!");
        })
        
    })
})
