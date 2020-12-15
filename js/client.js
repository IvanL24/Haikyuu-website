import { players } from './players.js';
  
let outputHTML = '';
  
const gallery = document.querySelector('.gallery');

console.log(players)

players.forEach(function(item){
  
  console.log(item);
  
  outputHTML +=
    
  `<figure class="card">
        
    <img src="../img/players/${item.id}.jpg" alt="${item.title}">

    <figcaption>
      <h2>${item.name}</h2>
      <p>${item.position}</p>
    </figcaption>
    
  </figure>`

  });

gallery.innerHTML = outputHTML;



