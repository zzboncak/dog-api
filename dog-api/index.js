function handleFormSubmit() {
    $('.dog-form').submit(event => {
        event.preventDefault();
        let numDogs = $('#dog-number').val();
        fetch(`https://dog.ceo/api/breeds/image/random/${numDogs}`)
            .then(response => response.json())
            .then(responseJson => buildImages(responseJson.message))
            .catch(error => console.log(`Something went wrong!`));
        
    })
}

function buildImages(array) {
    let images = [];
    for (let i=0; i<array.length; i++) {
        images[i] = `<img src="${array[i]}" alt="dog image">`
    }
    let imagesString = images.join("");
    //console.log(imagesString);
    $('.js-results').html(imagesString);
    $('.results').removeClass('hidden');
}

function main() {
    handleFormSubmit();
}

$(main);