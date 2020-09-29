console.log('START')
console.log('FUNCTION DECLARATION')

const cal = (x, y) => { return x / y }

console.log('Declare event listeners')

window.addEventListener('load', (event) => {
    console.log('  Starting initialization ')
    if (localStorage.getItem('guest')) {
        document.querySelector('#guest').value = localStorage.getItem('guest')
        console.log(`  Stored guest = ${localStorage.guest}`)
    }
    if (localStorage.getItem('weight')) {
        document.querySelector('#weight').value = parseFloat(localStorage.number1)
        console.log(`  Stored height = ${localStorage.weight}`)
    }
    if (localStorage.getItem('height')) {
        document.querySelector('#height').value = parseFloat(localStorage.number2)
        console.log(`  Stored height = ${localStorage.height}`)
    }
    console.log('  Finished initialization')
})

document.querySelector('#clicker').addEventListener('click', () => {
    console.log('  Starting cal and click handler')
    const origCount = parseInt(localStorage.getItem('countOfClicks')) || 0
    const ct = origCount + 1
    const s = document.querySelector('#guest').value
    const i = parseFloat(document.querySelector('#weight').value)
    console.log(`i=${i}`)
    const j = parseFloat(document.querySelector('#height').value)
    const k = Math.pow(j, 2)
    console.log(`k=${k}`)
    const l = cal(i, k)
    const m = l.toFixed(2)
    const ans = `Hello ${s}! Your BMI is ${m}. BMI was calculated ${ct} times`
    document.querySelector('#result').innerHTML = ans
    localStorage.setItem('countOfClicks', ct)
    console.log('  Finished clicker click handler')
})
document.querySelector('#wiper').addEventListener('click', () => {
    console.log('  Starting wiper click handler')
    localStorage.removeItem('countOfClicks')
    console.log('  Finished wiper click handler - localStorage entries removed')
})
console.log('script end')