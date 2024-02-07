let quote= document.getElementById("quote")
let author= document.getElementById("author")
let tag = document.getElementById("type")
let button = document.getElementById("new-quote")

const getQuote = async() =>{
    const respon = await fetch("https://quotable.io/random");
    const data = await respon.json();
    quote.innerText = data.content ;
    author.innerText = data.author;
    quote.className= "mt-2"
    tag.innerText = "--"+ data.tags+ "--";
}
setInterval(()=>{
    getQuote();
},10000)

button.addEventListener("click", getQuote);

