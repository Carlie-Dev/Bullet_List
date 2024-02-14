/**
*  
* @param {object} ev
* @returns {}
* @example
* 
*/

document.getElementById('item-input').addEventListener('mouseover', function(ev){
    console.log('list was hovered over');
    
})

document.getElementById('item-input').addEventListener('click', function(ev){
    console.log('box was selected');
    
})


document.getElementById('add-item').addEventListener('click', function(ev){
    let mainList = document.getElementById('items-list');
    let myInput = document.getElementById('item-input');
    console.log(ev);

    //Gets the inserted text
    const itemText = myInput.value.trim();

    console.log('button was clicked');
    
    //Creates new item
    let newItem = document.createElement('li');
    newItem.style.fontVariant = 'small-caps';
    newItem.classList.add('list-item'); 

    //Text content sets the content
    newItem.textContent = itemText;
    console.log(newItem);
    
    mainList.appendChild(newItem);
    
    //To clear the box for the next input.
    myInput.value = '';
})
