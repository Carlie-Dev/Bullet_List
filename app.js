/**
*  
* @param {object} ev
* @returns {}
* @example
* 
* Removes item from List
*/

let ItemsList = document.getElementById('items-list');
ItemsList.addEventListener('click', function (ev) {
    if (ev.target && ev.target.matches('.list-item')) {
        // Remove the clicked item
        ev.target.remove();
    }else{
        let text = ev.target.innerHTML;
        ev.target.innerHTML = text.toUpperCase();
        ev.target.style.color = 'red';
    }
});


document.getElementById('item-input').addEventListener('mouseover', function (ev) {
    console.log('list was hovered over');

})



document.getElementById('item-input').addEventListener('click', function (ev) {
    console.log('box was selected');

})



/**
*  
* @param {object} ev
* @returns {}
* @example
*
* The input in the box goes into the function and then appears on the list
*/

document.getElementById('add-item').addEventListener('click', function (ev) {
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
