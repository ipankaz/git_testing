let list = document.getElementById('list');

for(let i = 1 ; i< 20 ; i++){
    let item = document.createElement('li');
    item.innerText = i;
    list.appendChild(item);
}

// this method of creating elements is faster in website loading 