function searchLibrary() {
    const searchInput = document.getElementById('search-input').value;
    const resultsContainer = document.getElementById('results');

    // Replace 'YOUR_API_KEY' with your actual Library of Congress API key
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://www.loc.gov/search/?fo=json&at=results,pagination&q=${searchInput}`;

    // Perform a simple fetch to the Library of Congress API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Process the data and display results
            displayResults(data.results);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (results && results.length > 0) {
        const ul = document.createElement('ul');
        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result.title || 'Untitled';
            ul.appendChild(li);
        });
        resultsContainer.appendChild(ul);
    } else {
        resultsContainer.textContent = 'No results found.';
    }
}

