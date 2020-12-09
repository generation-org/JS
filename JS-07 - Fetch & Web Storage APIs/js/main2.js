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

// runs if online
function fetchColorsList() {
    fetch('https://reqres.in/api/data')
        .then((response) => response.json()) // transforms data into json
        .then(response => {
            // reset html so page is blank
            itemsContainer.innerHTML = '';
            for (let i = 0; i < response.data.length; i++) {
                addItem(response.data[i]);
            }
            const colorsJson = JSON.stringify(response.data);
            localStorage.setItem('colors', colorsJson);
        });
}

// render if offline
function loadColorsFromStorage() {
    if (localStorage.getItem('colors')) {
        const colorsJson = localStorage.getItem('colors');
        const colors = JSON.parse(colorsJson);
        // reset html
        itemsContainer.innerHTML = '';
        for (let i = 0; i < colors.length; i++) {
            addItem(colors[i]);
        }
    }
}
fetchColorsList();
loadColorsFromStorage();