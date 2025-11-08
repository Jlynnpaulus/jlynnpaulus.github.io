const katForm = document.getElementById("katForm");
const katInput = document.getElementById("katInput");
const katList = document.getElementById("katList");

katForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const katText = katInput.value.trim();
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox)
    li.appendChild(document.createTextNode(' ' + katText));
    katList.appendChild(li);
    katInput.value = '';
});

const marForm = document.getElementById("marForm");
const marInput = document.getElementById("marInput");
const marList = document.getElementById("marList");

marForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const marText = marInput.value.trim();
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox)
    li.appendChild(document.createTextNode(' ' + marText));
    marList.appendChild(li);
    marInput.value = '';
});

const dadForm = document.getElementById("dadForm");
const dadInput = document.getElementById("dadInput");
const dadList = document.getElementById("dadList");

dadForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const dadText = dadInput.value.trim();
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox)
    li.appendChild(document.createTextNode(' ' + dadText));
    dadList.appendChild(li);
    dadInput.value = '';
});

const momForm = document.getElementById("momForm");
const momInput = document.getElementById("momInput");
const momList = document.getElementById("momList");

momForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const momText = momInput.value.trim();
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox)
    li.appendChild(document.createTextNode(' ' + momText));
    momList.appendChild(li);
    momInput.value = '';
});
