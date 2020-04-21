const source = $('#result-template').html();
const template = Handlebars.compile(source)

const renderPeople = function (users) {
    $("#results").empty();
    const newHTML = template({ data: users });
    $('#results').append(newHTML);
}

let peopleArr = $.get('https://jsonplaceholder.typicode.com/users', renderPeople)


