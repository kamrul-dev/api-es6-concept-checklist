// load the data from api
const loadPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data));
}
loadPhotos();

// display photos on UI
const displayPhotos = (photos) => {
    console.log(photos);
    photos.forEach(photo => {
        const div = document.createElement('div');
        div.classList.add("row");
        div.innerHTML = `
        <div class="col">
            <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
            </div>
        </div>
        `;
    })
}