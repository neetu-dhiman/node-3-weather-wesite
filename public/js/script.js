
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const msgOne = document.querySelector('#msg-1');
const msgTwo = document.querySelector('#msg-2');


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    console.log(location);
    const url = '/weather?address=' + location;

    msgOne.textContent = 'loading ...';
    msgTwo.textContent = '';

    fetch(url).then((response) => {
        response.json().then(data => {
            if (data.error) {
            } else {
                search.value = '';
                msgOne.textContent = data.city ;
                msgTwo.textContent = 'The temperature is' + data.temperature + ' and the weather is ' + data.weather_descriptions;
            }
        })
    });
});