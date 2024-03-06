clefs: c2f80ec0
const search = document.getElementById('Search')
const input = document.getElementById('Search')
const prefs = document.getElementById('')

axios.get('https:http://img.omdbapi.com/?apikey=[c2f80ec0]&')

    .then(response =>
        console.log(response.data))
    .catch(error => console.log(error))