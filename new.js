const listItems = [
    { id: 1, name: 'Amin', family: 'afrroz shaddel' },
    { id: 2, name: 'Amir', family: 'Zehtab' },
    { id: 3, name: 'Qadir', family: 'Yolme' },
    { id: 4, name: 'Babak', family: 'Mohammadi' },
    { id: 5, name: 'Hasan', family: 'afrooz shaddel' },

    { id: 6, name: 'Amin', family: 'Saeedi Rad' },
    { id: 7, name: 'Amir', family: 'Zehtab' },
    { id: 8, name: 'Qadir', family: 'Yolme' },
    { id: 9, name: 'Babak', family: 'Mohammadi' },
    { id: 10, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 11, name: 'Saeed', family: 'Ehsani' },
    { id: 12, name: 'Siamak', family: 'Modiri' },
    { id: 13, name: 'Mohsen', family: 'Ansari' },
    { id: 14, name: 'Mehran', family: 'Ali Pour' },
    { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },

    { id: 16, name: 'Hossein', family: 'Amino' },
    { id: 17, name: 'Melika', family: 'Ehsani' },
    { id: 18, name: 'Qadir', family: 'Yolme' },
    { id: 19, name: 'Fatemeh', family: 'Alilou' },
    { id: 20, name: 'Ehsan', family: 'Tayyebi' },

    { id: 21, name: 'Zahra', family: 'Gholami' },
    { id: 22, name: 'Matin', family: 'Sahebi' },
    
];


let rowsCount=5;
let currentPage=1;


let userListContainer=document.querySelector(".list")
console.log(userListContainer)
let userPagination=document.querySelector(".container")


function newslider(rowsCount , currentPage , userList , items){
    userListContainer.innerHTML=""
   let endIndex=rowsCount*currentPage
   let startIndex=endIndex-rowsCount
   let slider=items.slice(startIndex , endIndex)
  
     slider.forEach(function(item){
        userList.insertAdjacentHTML("beforeend" ,"<li class= 'item' >"+ item.name + ''+  item.family+"</li>")
     } 
        
  );

}
function newpagination(rowsCount ,userPagination,  items ){
    userPagination.innerHTML=" "
   let numbers=Math.ceil  (items.length/rowsCount)
   for (let i=1; i<numbers+1 ; i++){
   
    let buttonElem=document.createElement("button")
    buttonElem.innerHTML=i
    userPagination.append(buttonElem)

    if(i===currentPage){
        buttonElem.classList.add("active")
    }
    buttonElem.addEventListener("click" , function(){
   
        currentPage=i;
        newslider(rowsCount , currentPage , userListContainer ,  listItems)
         let preButton=document.querySelector("button.active")
         preButton.classList.remove("active")
         buttonElem.classList.add("active")
    })
   }
  
 
}


newslider(rowsCount , currentPage , userListContainer ,  listItems)
newpagination(rowsCount , userPagination ,  listItems)