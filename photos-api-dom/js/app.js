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
   const detailsPhoto = document.getElementById('photo-details');
   const div = document.createElement('div');
   detailsPhoto.textContent = '';
   div.classList.add("details-photo")
   div.innerHTML = `
   <img src="${details.url}" class="mb-3" alt="...">
   <img src="${details.thumbnailUrl}" class="" alt="...">
   <div class="card-body">
       <h5 class="card-title">${details.title}</h5>
   </div>
   <div class = "text-center"><span class="badge bg-secondary">${details.id}</span></div>
   `;
   detailsPhoto.appendChild(div);
}
