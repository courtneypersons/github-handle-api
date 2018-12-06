// get user input
function getInput(){
    $('form').submit(event => {
        event.preventDefault();
        let user = $('.userInput').val();
        getApi(user)
    })
}


// call api
function getApi(userName){
    const url = `https://api.github.com/users/${userName}/repos`;

    fetch(url)
    .then(response => response.json())
    .then(data => displayResults(data))
    .catch(error => console.log(error));
}

// show results
function displayResults(data){
    console.log(data)
    $('.searchList').empty();
    for (let i = 0;i < data.length; i++){
        $('.searchList').append(`
        <li>
            <h2>${data[i].name}</h2>
            <a href="${data[i].html_url}">${data[i].html_url}</a>
        </li>
        `)
    }
}

$(getInput)