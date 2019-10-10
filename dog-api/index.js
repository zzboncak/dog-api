function handleFormSubmit() {
    $('.dog-form').submit(event => {
        event.preventDefault();
        let numDogs = $('#dog-number').val();
        for (let i=1; i<=numDogs; i++) {
            fetch ('https://dog.ceo/api/breeds/image/random')
                .then(response => response.json())
                .then(responseJson => console.log(responseJson.message))
                .catch(error => console.log(`Something went wrong!`));
        }
    })
}

function main() {
    handleFormSubmit();
}

$(main);

//<img src="placeholder" alt="placeholder"> image template