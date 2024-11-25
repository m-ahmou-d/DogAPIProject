async function fetchDogs() {
    try {
        const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=5');
        const data = await response.json();

        const container = document.getElementById('dog-container');
        container.innerHTML = ''; // Clear previous results

        data.forEach(dog => {
            const img = document.createElement('img');
            img.src = dog.url;
            img.alt = 'A cute dog';
            img.style.width = '200px';
            img.style.margin = '10px';
            container.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching dogs:', error);
    }
}