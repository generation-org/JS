const itemsContainer = document.getElementById("list-items");

function addItem(item) {
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + item.name + '</h5>\n' +
        '        <p class="card-text">' + item.pantone_value + '</p>\n' +
        '        <div style="background:' + item.color + ';">' + item.color + '</div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    itemsContainer.innerHTML += itemHTML;
}

function render(items) {
    // reset html
    itemsContainer.innerHTML = '';
    for (let i = 0; i < items.length; i++) {
        addItem(items[i]);
    }
}

addItem();

// remove hard coded data once fetch is working
// addItem({
//     "id": 1,
//     "name": "cerulean",
//     "year": 2000,
//     "color": "#98B2D1",
//     "pantone_value": "15-4020"
// });

function fetchColorsList() {
    fetch('https://reqres.in/api/unknown')
        .then((response) => response.json()) // transforms data into json
        .then(response => {
            render(response.data);
            const colorsJson = JSON.stringify(response.data);
            localStorage.setItem('colors', colorsJson);
        });
}

function loadColorsFromStorage() {
    if (localStorage.getItem('colors')) {
        const colorsJson = localStorage.getItem('colors');
        const colors = JSON.parse(colorsJson);
        render(colors);
    }
}
fetchColorsList();
loadColorsFromStorage();