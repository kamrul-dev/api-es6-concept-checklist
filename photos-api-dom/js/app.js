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
    getPhotos.forEach(photo => {
        const divSection = document.getElementById('display-photos');
        const div = document.createElement('div');
        div.classList.add("col");
        div.innerHTML = `
            <div class="card photo-card  h-100 p-2">
                <img onclick= "loadPhotDetails('${photo.id}')" src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
                <div class = "text-center"><span class="badge bg-secondary">${photo.id}</span></div>
            </div>
        `;
        divSection.appendChild(div);

    })
}

//load photo details data
const loadPhotDetails = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res => res.json())
        .then(data => displayPhotoDetails(data));
}

// display photo details
const displayPhotoDetails = (details) => {
    document.getElementById('photo-details').innerHTML = `
    <img src="${details.url}" class="" alt="...">
    <img src="${details.thumbnailUrl}" class="" alt="...">
    <div class="card-body">
        <h5 class="card-title">${details.title}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
}
