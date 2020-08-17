const searchButton = document.getElementById('search-btn');
const searchArea = document.getElementById('search-area');
const result = document.getElementById('result');

const apiURL = 'https://api.lyrics.ovh';

searchButton.addEventListener('click', function(){
    const searchTerm = searchArea.value.trim();
    // console.log(searchTerm);
    if (!searchTerm) {
        alert('Please type in a search term.')
    }
    else{
        searchSongs(searchTerm);
    }
})

async function searchSongs(term) {
    // fetch(`${apiURL}/suggest/${term}`)
    // .then(res => res.json())
    // .then(data => console.log(data));
    
    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = await res.json();

    // console.log(data);
    showData(data);
}

function showData(data){
    result.innerHTML = `
    <ul class="songs">
        ${data.data.map(song => `<li>
        <span><strong>${song.artist.name}<strong> - ${song.title}<span>
        <button class="btns" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
        </li>`)
        .join('')
    }
    </ul>
    `;
}














// let output = "";

// data.data.forEach(song => {
//         output += `
//             <li>
//             <span><strong>${song.artist.name}<strong> - ${song.title}<span>
//             <button class="btns" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
//             </li>
//         `;
//     });

//    result.innerHTML = `
//     <ul class="songs">
//         ${output}
//     </ul>
//     `;