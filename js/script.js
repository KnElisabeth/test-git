//alert("My JS is working !");
//console.log("le JS c'est génial");
//console.log(typeof("Bonjour"));
//let fruit="pomme";
//fruit="poire";
//console.log(fruit);
//let vegetable="carotte";
//console.log(vegetable);
//const fruit="Citron";
//console.log(fruit);
/*let list=["Tomatoes", "Potatoes", 50, false];
console.log (list);
list.push ("poireau",50,10);
console.log (list);

delete list[0];
console.log (list);

list.splice (0,1);
console.log (list);
list.splice (1);
list.splice(1, list.length);
list.length=1;
console.log (list);

let name="HOARAU";
let firstName="Elisabeth";
let age=30;
console.log (`Je m'appelle ${name}, ${firstName} et j'ai ${age} ans !`);

function sayHello () {
    console.log("Hello");
    sayGoodbye()
}
function sayGoodbye(){
    alert("Goodbye");
}
function popUp(){
    alert ("Vous venez de me créditer de 20,000$, merci bien !")
}
function sayThankYou(){
    alert("Thank You");
}
function message(){
    alert("Yesss!");
}

let fruit=prompt ("Quel est ton fruit préféré ?");
if(fruit=="citron"){
    console.log ("super, j'adore le citron");
}else{
    console.log ("birk");
}

let name="Elisabeth"
if(name=="Elisabeth"){
    alert ("lol, ce prénom est trop long");
}

let test=prompt("dit le fantôme...");
if(test=="merci"){
    alert("BOUH");
}
if(test!="merci"){
    alert("loupé")
}

let reponse=prompt("le droit est-il utile ?")
if(reponse=="oui"){
    console.log("félicitatiooooons");
}else{
    console.log("LOOSER");
}

let color=prompt("Préfères-tu le noir ou le blanc?");
if(color=="noir"){
    console.log("le noir c'est classe")
}else if(color=="blanc"){
    console.log("salissant");
}else {
    console.warn("t'as pas répondu!");
}

for (let chocolat=0;chocolat<10;){
    console.log (`Ma variable ets égale à ${chocolat}`);
    chocolat++;
}
console.log("Fin de la boucle");

for(let index=0;index<=100;index++){
    console.log(`mon index est proche de ${index}`)
}

let list=["Romain","Mylène","Pascal", "Justine", "Paul", "Tristan", "Capucine", "Clément", "Victor", "Robert(alias Bob)"];
console.log ("Voici les élèves de la classe de CM2")
console.log (list[0])

list.forEach (function(apprenant){
    console.log(apprenant);
})

let chiant=prompt ("Hey, on peut aller à Disneyland stp ?");

while (chiant != "oui"){
    chiant=prompt("Allé stp stp stp stp");
}
console.log("génial, on va à disneyland !!!!")

document.getElementById("title");
document.getElementById("paragraph")
document.getElementsByClassName("list-elements")
document.querySelector("p")[2]

let title=document.querySelector("h1");
let par=document.querySelector("p");
let li=document.querySelectorAll("li")[2];

document.querySelectorAll("li")[0].classList.remove("ul")
document.querySelector("p").style.backgroundColor="blue";
document.querySelector("p").style.setProperty("color", "red");
document.querySelector("p").style.removeProperty("color")*/

let h1=document.querySelector(".title")
h1.addEventListener("mouseover",function() {
    h1.classList.toggle("classeEssai");
});
h1.addEventListener("mouseout",function() {
    h1.classList.toggle("classeEssai");
});

document.querySelector("button").addEventListener("contextmenu",()=> {
    alert("Vous avez perduuu");
});

//exemple d'une searchbar
document.querySelectorAll("input")[1].addEventListener("click",function() {
    console.log(document.querySelectorAll("input")[0].value);
});

document.querySelector("ul").addEventListener("mouseover", ()=>{
    document.querySelector("ul").classList.toggle("ul-modified")
});
document.querySelector("ul").addEventListener("mouseout", ()=>{
    document.querySelector("ul").classList.toggle("ul-modified")
});

document.querySelectorAll("button")[1].addEventListener("click",()=>{
    document.querySelectorAll("p")[0].classList.toggle("p-hidden");
});

document.querySelectorAll("button")[2].addEventListener("click",()=>{
    document.querySelectorAll("p")[2].classList.toggle("p-hidden");
});

document.querySelectorAll("button")[3].addEventListener("click",()=>{
    document.querySelector("body").classList.toggle("body");
});
let tp5= Number (prompt("Chiffre 1"));+(prompt("chiffre 2"));
