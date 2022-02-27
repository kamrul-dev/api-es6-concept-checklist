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
}