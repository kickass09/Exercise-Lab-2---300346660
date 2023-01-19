const usersList=users;

// console.log(users);
// console.log(usersList);

const conList = document.querySelector('.contact-list'); 
//console.log(conList); 
const conItem = document.querySelectorAll('.contact-item'); 
//console.log(conItem); 
// const conList2 = document.querySelectorAll('.contact-details'); //<li> contact items in the list 
// console.log(conList2);
const btnPage = document.querySelector('.pagination'); 

//const imageList=document.getElementsByClassName("avatar");
//console.log(imageList);
//const List=document.getElementsByClassName("contact-List");
const itemsPage = 10;  
const totalItem = conItem.length; 
// const num="5";
document.getElementById('ele').innerHTML="Total: "+totalItem;
const pagesCount = Math.ceil(totalItem / itemsPage); 

homePage();
generateBtns();

function homePage(){
    let homePageItems = '';
    for(var i = 0; i < itemsPage; i++){
        //conList2[i].innerHTML=usersList[i].name;
        homePageItems += conItem[i].outerHTML;
        //console.log(defaultPageItems);
        //defaultPageItems += usersList[i].name+usersList[i].image+usersList[i].joined;
        //conList.outerHTML = usersList[i].name + usersList[i].image;
        //defaultPageItems += usersList[i]; 
        
    }
    conList.innerHTML = homePageItems;
}

 
function generateBtns() {
    let btn = '';
    for(var i = 0; i < pagesCount; i++){
        btn += `<li><a id='${i}' onclick='clickedPage(id)'>${i+1}</a></li>`;
    }
    
    btnPage.innerHTML = btn;
}


function clickedPage(id) {
    let first = id * 10; 
    let last; 

    
    if(id == (pagesCount-1)){ 
        last = conItem.length;
    } else { 
        last = first + itemsPage; 
    }
    
    
    let nextPageItems = '';  
    while(first < last){ 
         nextPageItems += conItem[first].outerHTML;
         //console.log(nextPageItems);
         first++;
    }
    
    conList.innerHTML = nextPageItems;
}