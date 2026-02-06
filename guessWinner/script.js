let btn=document.querySelector("button")
let h1=document.querySelector("h1")
let h2=document.querySelector("h2")
let h3=document.querySelector("h3")
let img= document.querySelector("#image img")
const arr = [
  {
    img:"https://i.pinimg.com/1200x/0b/c6/c1/0bc6c1070c9e7242d368c94834f65bbb.jpg",
    name: "Mumbai Indians",
    captain: "Hardik Pandya",
    trophies: 5
  },
  {
    img:"https://imgs.search.brave.com/OIcOM8G6Rx2Wm1MXZkKRpe2e5-U2SCLBCaX9b7kgZG4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YyLzdk/L2Q3L2YyN2RkNzhi/NzJkNmYyMWMxM2M5/MTdmYzcwYTJiYWI2/LmpwZw",
    name: "Chennai Super Kings",
    captain: "MS Dhoni",
    trophies: 5
  },
  {

    img:"https://i.pinimg.com/736x/16/98/af/1698af86c972753db5f1be7cb9ea7b99.jpg",
    name: "Kolkata Knight Riders",
    captain: "Shreyas Iyer",
    trophies: 2
  },
  {
    img:"https://i.pinimg.com/1200x/3c/b7/89/3cb7898be033622d2fcff689bbf96491.jpg",
    name: "Rajasthan Royals",
    captain: "Sanju Samson",
    trophies: 1
  },
  {
    img:"https://i.pinimg.com/1200x/e9/92/b0/e992b0ae3135122a161d63fe3c59a77f.jpg",
    name: "Sunrisers Hyderabad",
    captain: "Pat Cummins",
    trophies: 1
  },
  {
    img:"https://i.pinimg.com/1200x/dd/28/ac/dd28ac7113fb79867a5311aee8e5ead4.jpg",
    name: "Royal Challengers Bengaluru",
    captain: "Rajat Patidar",
    trophies: 1
  },
  {
    img:"https://i.pinimg.com/1200x/9a/2b/84/9a2b84a7f7bb32c454045715b1a3a2b7.jpg",
    name: "Delhi Capitals",
    captain: "Rishabh Pant",
    trophies: 0
  },
  {
    img:"https://i.pinimg.com/1200x/6a/90/75/6a9075c90746ca7d0f9de928546ef285.jpg",
    name: "Punjab Kings",
    captain: "Shikhar Dhawan",
    trophies: 0
  }
];
btn.addEventListener("click",function(){
    winner=Math.floor(Math.random()*arr.length)
    img.src = arr[winner].img;
  h1.innerText = arr[winner].name;
  h2.innerText = `Captain : ${arr[winner].captain}`;
  h3.innerText = `No. of trophies : ${arr[winner].trophies}`;
})