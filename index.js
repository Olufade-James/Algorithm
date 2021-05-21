const pass = 0

if (typeof pass === 'number') {
    function convertFahrToCelsius(celsius) {
        const finalResult = (celsius - 32) * 5 / 9;
        return finalResult
    }
    const result = convertFahrToCelsius(40);
    console.log(`${pass} value is not a number but a ${typeof(pass)}`)
}


function checkYuGiOh(n) {
    const final = []
    const arr = final.push(Array(n).fill([1, 'Yu', 'Gi', 'Oh']))
    return final 
}

console.log(checkYuGiOh(5));