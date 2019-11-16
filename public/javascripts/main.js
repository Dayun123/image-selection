const imageContainer = document.getElementById('image-container');
const imageSelection = [];

imageContainer.addEventListener('click', (e) => {
  if (!imageSelection.includes(e.target.src)) {
    imageSelection.push(e.target.src);
  }
});


const addImageButton = document.getElementById('add-image-button');

addImageButton.addEventListener('click', async () => {
  const url = 'http://localhost:3001/post-images';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(imageSelection)
  });
  const myJson = await response.json();
  console.log(JSON.stringify(myJson));
});
