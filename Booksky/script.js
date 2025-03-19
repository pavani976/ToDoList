var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopups=document.getElementById("addbtn")

addpopups.addEventListener("click",function(){
  popupoverlay.style.display="block";
  popupbox.style.display="block";
});
var cancel=document.getElementById("cancel-book")
cancel.addEventListener("click",function(event){
  event.preventDefault()
  popupoverlay.style.display="none";
  popupbox.style.display="none";
})
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var description=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
  event.preventDefault()
  var div=document.createElement("div")
  div.setAttribute("class","book-container")
  div.innerHTML= `<h2>${booktitle.value}</h2>
  <h5>${bookauthor.value}</h5>
  <p>${description.value}</p>
  <button onclick="deletebook(event)">Delete</button>`
container.append(div)
popupoverlay.style.display="none";
popupbox.style.display="none";
})
function deletebook(event){
event.target.parentElement.remove()
}