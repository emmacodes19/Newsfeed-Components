/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
const newMenu = document.querySelector('.header')
const MenuButton = document.querySelector('.menu-button')



function menuComponent(lists) {
  const addMenu = document.createElement('div');
  const addList = document.createElement('ul');

  addMenu.appendChild(addList);

  addMenu.classList.add('menu');
  // addList.classList.add('menu-button');


  lists.forEach ((item) => {
    const newList = document.createElement('li');
    newList.textContent = item;
    addList.appendChild(newList);


  });

  // addList.appendChild(menuItems);

  MenuButton.addEventListener('click', () => addMenu.classList.toggle('menu--open'));
  return addMenu;

}
newMenu.appendChild(menuComponent(menuItems));

























  

    
  // Array.forEach(item => {
  //   let anotherList = document.createElement('li');
  //   anotherList.textContent = item;
  //   addList.appendChild(anotherList);
  // })


  // MenuButton.addEventListener('click',() => {
  //   addMenu.classList.toggle('menu--open');
  //   console.log('it works');
  // })

  // return addMenu;

  // menuItems.forEach(() => {
  //   header.appendChild(menuComponent(menuItems));
  // })


// for (let i=0; i<menuItems.length; i++) {
//   let result = menuComponent(menuItems[i]);
//   newMenu.appendChild(result);
// }

// menuItems.forEach((item)=> {
//   let result = menuComponent(menuItems[i]);
//     menuComponent.appendChild(result);

// });

// let resultArray = menuItems.map((item) => {
//   let result = menuComponent(item);
//   return result;
// });

// console.log('button', resultArray);