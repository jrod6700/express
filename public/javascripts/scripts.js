function search_book() {
    let input = document.getElementById('searchBar').value
    input=input.toLowerCase();
    let n = document.getElementsByClassName('books');

    document.querySelector('#searchBar').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            location.href = 'http://localhost:3000/searchResults';
        }
        });
}