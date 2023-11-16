const square = require ('./mockSquare')

describe ('тестирование квадратного уравнения', () => {
    test ('дискр больше нуля', () => {
        result = [4, -1]
        expect(square (1, -3, -4)).toEqual(result)
    })
    test ('дискр меньше нуля', () => {
       
        expect(square (9, 6, 2)).toEqual('корней нет')
    })
    test ('дискр равен нулю', () => {
      
        expect(square (9, 6, 1)).toEqual(-27)
    })
})


describe ('test Square using each method', () => {
    test.each([
        [1,-3,-4, [4,-1]],
        [9,6,1,-27],
        [9,6,2, 'корней нет']
    ]) ("переменные %p, полученные корнни %p", (a,b,c, result) => {
        expect(square (a,b,c)).toEqual(result)


    })

})

//  Parametrized unit tests С ЛИТЕРАЛЬНЫМ СИНТАКСИСОМ

describe ('...', () => {
    test.each`
    a   |b  |c  |result
    ${1}   | ${-3}  | ${-4}  | ${[4, -1]}
    ${9}   | ${6}  | ${1}  | ${-27}
    ${9}   | ${6}  | ${2}  | ${'корней нет'}
    `(
        `передаём значения $a, $b, $c, result $result`,
        ({a, b, c, result}) => {
            expect(square(a, b, c)).toEqual(result)
        }
    )
    }) 