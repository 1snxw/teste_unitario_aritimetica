const {som,sub,mult,div} = require('./aritimetica')

describe("teste das operacoes aritimeticas caso 8 OP 2",()=>{
    test('O valor da soma de 8 + 2 = 10', ()=>{
        expect(som(8,2))
        .toBe(10)
    })
    test("o valor da subtracao de 8 - 2 = 6",()=>{
        expect(sub(8,2))
        .toBe(6)
    })
    test("o valor da multiplicacao de 8 * 2 = 16",()=>{
        expect(mult(8,2))
        .toBe(16)
    })
    test("o valor da subtracao de 8 / 2 = 4",()=>{
        expect(div(8,2))
        .toBe(4)
    })
})