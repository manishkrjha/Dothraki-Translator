//querySelectors
var input  = document.querySelector('#input')
    output = document.querySelector('#output')
    btn    = document.querySelector('#button')

//api 
var url = 'https://api.funtranslations.com/translate/dothraki.json'

//error handler
function errorHandler(error){
    alert('Oops! Looks like some error occured on our side. Please try again.')
    console.log(`error: ${error}`);
}

//generating request
function getApiResponse(text){
    console.log(text)
    return url + '?text=' + text;
}

//triggeting click event
function respond(){
    var text = input.value;
    fetch(getApiResponse(text))
        .then(response => response.json())
        .then(data => (output.innerText = data.contents.translated))
        // .then(data => console.log(data))
        .catch(errorHandler)
}

//adding evenetlistener
btn.addEventListener('click', respond)



