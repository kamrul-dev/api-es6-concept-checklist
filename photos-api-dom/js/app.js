// load the data from api
const loadPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data));
}
loadPhotos();

// display photos on UI
const displayPhotos = (photos) => {
    const getPhotos = photos.slice(0, 100);
    console.log(getPhotos);
    getPhotos.forEach(photo => {
        const divSection = document.getElementById('display-photos');
        const div = document.createElement('div');
        div.classList.add("col");
        div.innerHTML = `
            <div class="card photo-card  h-100 p-2">
                <img src="${photo.url}" class="card-img-top" alt="...">
                <div class = "text-center"><span class="badge bg-secondary">${photo.id}</span></div>
            </div>
        `;
        divSection.appendChild(div);

    })
}
