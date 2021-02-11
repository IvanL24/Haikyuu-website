import { players } from 'players.js';
  
let outputHTML = '';
  
const gallery = document.querySelector('.gallery');

console.log(players)

players.forEach(function(item){
  
  console.log(item);
  
  outputHTML +=
    
  `<figure class="card">
        
    <img src="img/players/${item.id}.jpg" alt="${item.title}">

    <figcaption>
      <h2>${item.name}</h2>
      <p>Uniform Number: ${item.id}</p>
      <p>Height:  ${item.height}</p>
      <p>Weight:  ${item.weight}</p>
      <p>Position:  ${item.position}</p>
    </figcaption>
    
  </figure>`

  });

gallery.innerHTML = outputHTML;



