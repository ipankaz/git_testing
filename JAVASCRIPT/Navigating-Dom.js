// Selecting element by its id 
let nav = document.getElementById('navbar');
console.log(nav);

// changing the HTML of navbar 
nav.innerHTML = "<div>Image</div>";

// gives the text written inside 
let text  = nav.innerText;

// Selecting elements by their class name 
let containers = document.getElementsByClassName('container');
console.log(containers);

// Selecting elements by using Selectors or Pseudo Selectors but it will show first element
let sel = document.querySelector('.container>ul');
console.log(sel);

// Selecting all elelemnts by using Selecters or Pseudo Selectors 
let sel1 = document.querySelectorAll('#navbar');
console.log(sel1);

// it will give the class of element 
let class1 = nav.getAttribute('class');

let id1 = containers.getAttribute('id');

// now we can edit the contents of section having id = nav 
nav.setAttribute('conteneteditable' , true);

// by default when edit the contents spell check is on , to make it off we use this method 
nav.setAttribute('spellcheck' , false);

// to change the attributes or anyhthing for input elements , we use value function 
let inpt = document.getElementById('inputbox');

// it will give the inner text of input element 
inpt.Value

inpt.setAttribute('type' ,'email');

// gives the info about the input eleemnt whether it have correct or wrong values 
inpt.validity 



