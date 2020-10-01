
console.log('fetching a random fact');
const factURI = 'https://uselessfacts.jsph.pl//random.json?language=en';
const getFact = async() =>{
    try{
    const response  = await fetch(factURI)
    const obj = await response.json()
    console.log (response)
    const fact = obj.text ||'No fact for you' // 
    return fact
}
catch (error) {console.error(error)}
}
const updateWithFact = async (event) => {
    try {
      document.querySelector('#getFact').innerHTML = ''
      const answer = await getFact()
      document.querySelector('#getFact').innerHTML = answer
    } catch (error) { console.error(error) }
}
