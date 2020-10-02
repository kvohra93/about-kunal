console.log('START')
console.log('FUNCTION DECLARATION')

function cal(x, y) {
    return x / (y * y);
}
var x = document.querySelector("#cal");
if(x){
x.addEventListener('click', () => {
    const s = document.querySelector('#guest').value
    const i = parseFloat(document.querySelector('#weight').value)
    console.log(`i=${i}`)
    const j = parseFloat(document.querySelector('#height').value)
    const l = cal(i, j)
    const m = l.toFixed(2)
    const ans = `${s} Your BMI is ${m}`
    document.querySelector('#result').innerHTML = ans
    console.log('Finished calculation of BMI')
})
document.querySelector('#clicker').addEventListener('click', () => {
    console.log('Starting clicker handler')
    const origCount = parseInt(localStorage.getItem('countOfClicks')) || 0
    const ct = origCount + 1
    const ans = `This button was pressed ${ct} times`
    document.querySelector('#result').innerHTML = ans
    localStorage.setItem('countOfClicks', ct)
    console.log('  Finished clicker click handler')
})}
y  = document.querySelector('#wiper')
if (y){
y.addEventListener('click', () => {
    console.log('  Starting wiper click handler')
    localStorage.removeItem('countOfClicks')
    console.log('  Finished wiper click handler - localStorage entries removed')
})}
document.addEventListener('click', event => {
    if (event.target && event.target.id === 'getRandomFact') {
        updateWithFact(event)
    }
})
console.log('script end')