let player = new AudioPlayer();

function renderItems(data) {
    // render items to the browser
    const ul = document.querySelector('ul.playlist');

    ul.innerHTML ='';

    data.forEach(function(item){
    	const li = document.createElement('li');
    	li.textContent = item.trackName;

    	li.onclick = (e) =>{
    		player.play(item);    		
    	}

    	ul.appendChild(li);
    	// console.log(item);
    })
}


const searchForm = document.querySelector('form');

searchForm.onsubmit = (e) => {

	console.log('My form was submitted');

    // prevent normal form submission
    e.preventDefault();

    // fetch items here

    let artistName = document.querySelector('#artist').value;

    let endpoint = 'https://itunes.apple.com/search?term=' + artistName;

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', (e) =>{
    	// console.log(xhr.responseText);
    	let response = JSON.parse(xhr.responseText);
    	renderItems(response.results);
    	// console.log(response);
    });

    xhr.open('GET', endpoint, true);

    xhr.send();
}
