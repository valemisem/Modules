// jest-each allows you to provide multiple arguments 
// to your test/describe which results in the test/suite being run once per row of parameters.

// ax2+bx+c=0

function square (a,b,c) {
    let dics = b*b - 4*a*c
    if (dics < 0) {
        console.log('дискр меньше нуля, корней нет')
        return 'корней нет'
    } else if (dics == 0) {
        let x = (-b/2)*a
        console.log(`дискр ноль, корнеь ${x}`)
        return x
    } else {
        let x1 = (((-b) + Math.sqrt(dics))/2) * a
        let x2 = (((-b) - Math.sqrt(dics))/2) * a
        console.log(`имеем два корня, ${x1}, ${x2}`)
        return [x1, x2]
    }

}

module.exports = square

// square (1, -3, -4)
// square (9,6,1)
// square (9,6,2)